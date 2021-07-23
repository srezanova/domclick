import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError
import graphene_django_optimizer as gql_optimizer
from .models import Request
from users.schema import UserType
from django.db.models import Q


class StatusEnum(graphene.Enum):
    OPEN = 'Open'
    SCHEDULED = 'Scheduled'
    CANCELED = 'Canceled'
    CLOSED = 'Closed'

class CategoryEnum(graphene.Enum):
    CONSULTING = 'Consulting'
    DIAGNOSIS = 'Diagnosis'
    REPAIR = 'Repair'
    REPLACEMENT = 'Replacement'
    RETURN = 'Return'
    COMPLAINT = 'Complaint'
    OTHER = 'Other'


class RequestType(DjangoObjectType):
    class Meta:
        model = Request
        exclude = ['requests']
        description = " Type definition for a single request "

class Query(graphene.ObjectType):
    my_requests = graphene.List(RequestType)
    all_requests = graphene.List(RequestType)
    request = graphene.Field(RequestType, id=graphene.ID(required=True))
    all_requests_filter_status_and_category = graphene.List(RequestType, status=StatusEnum(), category=CategoryEnum())
    my_requests_filter_status_and_category = graphene.List(RequestType, status=StatusEnum(), category=CategoryEnum())
    all_requests_filter_status_or_category = graphene.List(RequestType, status=StatusEnum(), category=CategoryEnum())
    my_requests_filter_status_or_category = graphene.List(RequestType, status=StatusEnum(), category=CategoryEnum())

    def resolve_my_requests(self, info, **kwargs):
        '''
        Resolves user's own requests.
        '''
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')

        elif user.is_staff:
            return gql_optimizer.query(Request.objects.filter(employee=info.context.user), info)
        elif user.is_staff == False:
            return gql_optimizer.query(Request.objects.filter(client=info.context.user), info)

    def resolve_all_requests(self, info, **kwargs):
        '''
        Resolves all requests for staff.
        '''
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')

        if user.is_staff:
            return gql_optimizer.query(Request.objects.all(), info)
        else:
            raise GraphQLError('Not found.')

    def resolve_request(self, info, id):
        '''
        Resolves request by ID.
        '''
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')

        request = Request.objects.get(id=id)

        if user.is_staff:
            return request
        else:
            raise GraphQLError('Not found.')

    def resolve_all_requests_filter_status_and_category(self, info, status=None, category=None):
        '''
        Resolves all requests by status and category at the same time.
        '''
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')
        if user.is_staff:
            return Request.objects.filter((Q(status=status) & Q(category=category)))
        else:
            raise GraphQLError('Not found.')

    def resolve_my_requests_filter_status_and_category(self, info, status=None, category=None):
        '''
        Resolves user's own requests by status and category at the same time.
        '''
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')
        if user.is_staff:
            return Request.objects.filter((Q(status=status) & Q(category=category) & Q(employee=user)))
        else:
            raise GraphQLError('Not found.')

    def resolve_all_requests_filter_status_or_category(self, info, status=None, category=None):
        '''
        Resolves all requests by status or category
        '''
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')
        if user.is_staff:
            return Request.objects.filter((Q(status=status) | Q(category=category)))
        else:
            raise GraphQLError('Not found.')

    def resolve_my_requests_filter_status_or_category(self, info, status=None, category=None):
        '''
        Resolves user's own requests by status and category at the same time.
        '''
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')
        if user.is_staff:
            return Request.objects.filter(((Q(status=status) & Q(employee=user)) | (Q(category=category) & Q(employee=user))))
        else:
            raise GraphQLError('Not found.')