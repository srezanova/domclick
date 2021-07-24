from django.test import RequestFactory, TestCase
from unittest import skip
from graphql import GraphQLError
from graphene.test import Client

from users.models import User
from requests.models import Request, Customer
from config.schema import schema


TestCase.maxDiff = None


def execute_query(query, user=None, variable_values=None, **kwargs):
    """
    Returns the results of executing a graphQL query using the graphene test client.
    """
    request_factory = RequestFactory()
    context_value = request_factory.get('/graphql/')
    context_value.user = user
    client = Client(schema)
    executed = client.execute(
        query, context_value=context_value, variable_values=variable_values, **kwargs)
    return executed


class QueryTest(TestCase):
    def setUp(self):
        self.user = User.objects.create(
            id=100,
            email='user@test.com',
            password='testpassword',
        )

        self.user2 = User.objects.create(
            id=101,
            email='user2@test.com',
            password='testpassword',
        )

        self.customer = Customer.objects.create(
            id=200,
            phone='+7(800)-000-00-00',
            first_name='Jerry',
            last_name='Smith',
        )

        self.customer2 = Customer.objects.create(
            id=201,
            phone='+7(801)-000-00-00',
            first_name='Frank',
            last_name='Berry',
        )

        self.request = Request.objects.create(
            id=300,
            employee=self.user,
            category='DIAGNOSIS',
            status='ACCEPTED',
            description='Broken phone.',
            customer=self.customer,
        )

        self.request2 = Request.objects.create(
            id=301,
            employee=self.user2,
            category='CONSULTING',
            status='CLOSED',
            description='Broken phone.',
            customer=self.customer2,
        )

    def tearDown(self):
        self.user.delete()
        self.customer.delete()
        self.customer2.delete()
        self.request.delete()
        self.request2.delete()

    def test_me_query(self):
        query = '''
                query {
                    me {
                        id
                        email
                    }
                }
                '''

        expected = {'me': {
            'id': '100',
            'email': 'user@test.com',
        }}

        executed = execute_query(query, self.user)
        data = executed.get('data')
        self.assertEqual(data, expected)

    def test_customer_by_id_query(self):
        query = '''
            query {
                customerById(id:200) {
                    id
                    phone
                    firstName
                    lastName
                }
            }
                '''

        expected = {'customerById': {
            'id': '200',
            'phone': '+7(800)-000-00-00',
            'firstName': 'Jerry',
            'lastName': 'Smith'}}

        executed = execute_query(query, self.user)
        data = executed.get('data')
        self.assertEqual(data, expected)

    def test_all_customers_query(self):
        query = '''
            query {
                allCustomers {
                    id
                    phone
                    firstName
                    lastName
                }
            }
                '''

        expected = {'allCustomers': [
            {'id': '200', 'phone': '+7(800)-000-00-00',
             'firstName': 'Jerry', 'lastName': 'Smith'},
            {'id': '201', 'phone': '+7(801)-000-00-00',
             'firstName': 'Frank', 'lastName': 'Berry'}]}

        executed = execute_query(query, self.user)
        data = executed.get('data')
        self.assertEqual(data, expected)

    def test_customer_by_phone_query(self):
        query = '''
            query {
                customerByPhone(phone:"+7(800)-000-00-00") {
                    id
                    phone
                    firstName
                    lastName
                }
            }
                '''

        expected = {'customerByPhone': {
            'id': '200',
            'phone': '+7(800)-000-00-00',
            'firstName': 'Jerry',
            'lastName': 'Smith'}}

        executed = execute_query(query, self.user)
        data = executed.get('data')
        print('')
        print(data)
        self.assertEqual(data, expected)

    def test_customer_by_phone_query(self):
        query = '''
            query {
                customerByPhone(phone:"+7(800)-000-00-00") {
                    id
                    phone
                    firstName
                    lastName
                }
            }
                '''

        expected = {'customerByPhone': {
            'id': '200',
            'phone': '+7(800)-000-00-00',
            'firstName': 'Jerry',
            'lastName': 'Smith'}}

        executed = execute_query(query, self.user)
        data = executed.get('data')
        self.assertEqual(data, expected)

    def test_my_requests_query(self):
        query = '''
            query {
                myRequests {
                    id
                    description
                    category
                    status
                }
            }
                '''

        expected = {'myRequests': [
            {'id': '300',
             'description': 'Broken phone.',
             'category': 'DIAGNOSIS',
             'status': 'ACCEPTED'}]}

        executed = execute_query(query, self.user)
        data = executed.get('data')
        self.assertEqual(data, expected)

    def test_all_requests_query(self):
        query = '''
            query {
                allRequests {
                    id
                    description
                    category
                    status
                }
            }
                '''

        expected = {'allRequests': [
            {'id': '300', 'description': 'Broken phone.',
             'category': 'DIAGNOSIS', 'status': 'ACCEPTED'}, {
                'id': '301', 'description': 'Broken phone.',
                'category': 'CONSULTING', 'status': 'CLOSED'}]}

        executed = execute_query(query, self.user)
        data = executed.get('data')
        self.assertEqual(data, expected)

    def test_request_by_id_query(self):
        query = '''
            query {
                requestById(id:300) {
                    id
                    status
                    customer {
                        id
                    }
                    employee {
                        id
                    }
                }
            }
                '''

        expected = {'requestById': {'id': '300', 'status': 'ACCEPTED',
                                    'customer': {'id': '200'},
                                    'employee': {'id': '100'}}}

        executed = execute_query(query, self.user)
        data = executed.get('data')
        self.assertEqual(data, expected)

    def test_request_by_customer_query(self):
        query = '''
            query {
                requestByCustomer(customerPhone:"+7(801)-000-00-00") {
                    id
                    status
                    customer {
                        phone
                    }
                    employee {
                        email
                    }
                }
            }
                '''

        expected = {'requestByCustomer': [
            {'id': '301', 'status': 'CLOSED',
             'customer': {'phone': '+7(801)-000-00-00'},
             'employee': {'email': 'user2@test.com'}}]}

        executed = execute_query(query, self.user2)
        data = executed.get('data')
        self.assertEqual(data, expected)
