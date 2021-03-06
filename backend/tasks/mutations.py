import graphene
from graphql import GraphQLError

from .models import Task, Customer
from .schema import TaskType, CustomerType, StatusEnum, CategoryEnum
from users.models import User
from .telegram_bot import send_update_to_bot


class TaskInput(graphene.InputObjectType):
    '''
    Arguments for Task mutation classes.
    Defines fields allowing user to create or update the data.
    '''
    id = graphene.ID()
    description = graphene.String()
    customer_phone = graphene.String()
    category = CategoryEnum()
    status = StatusEnum()


class CustomerInput(graphene.InputObjectType):
    '''
    Arguments for Customer mutation classes.
    Defines fields allowing user to create or update the data.
    '''
    id = graphene.ID()
    telegram_id = graphene.ID()
    phone = graphene.String(required=True)
    name = graphene.String()


class CreateTask(graphene.Mutation):
    '''Creates a task. Employee is the user creating task.'''
    task = graphene.Field(TaskType)

    class Arguments:
        task_data = TaskInput(required=True)

    def mutate(self, info, task_data):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')

        try:
            customer = Customer.objects.get(phone=task_data.customer_phone)
        except Customer.DoesNotExist:
            customer = Customer(phone=task_data.customer_phone)
            customer.save()

        task = Task(
            description=task_data.description,
            customer=customer,
            employee=user,
            category=task_data.category,
            status=task_data.status,
        )

        task.save()
        return CreateTask(task=task)


class UpdateTask(graphene.Mutation):
    '''Update task by ID.'''
    task = graphene.Field(TaskType)

    class Arguments:
        task_data = TaskInput(required=True)

    def mutate(self, info, task_data):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')

        task_instance = Task.objects.get(
            id=task_data.id)

        if task_data.description is not None:
            task_instance.description = task_data.description
        if task_data.category is not None:
            task_instance.category = task_data.category
        if task_data.status is not None:
            task_instance.status = task_data.status

        task_instance.save()

        if task_data.status is not None:
            bot_chatID = str(task_instance.customer.telegram_id)
            if bot_chatID is not None:
                bot_message = f'Your request No.{task_instance.id} changed status: {task_instance.status}'
                send_update_to_bot(bot_chatID, bot_message)

        return UpdateTask(task=task_instance)


class DeleteTask(graphene.Mutation):
    '''Delete task by ID.'''
    id = graphene.ID()

    class Arguments:
        id = graphene.ID(required=True)

    def mutate(self, info, id):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')

        task = Task.objects.get(id=id)

        if task is not None:
            task.delete()

        return DeleteTask(id=id)


class CreateCustomer(graphene.Mutation):
    '''Creates a customer.'''
    customer = graphene.Field(CustomerType)

    class Arguments:
        customer_data = CustomerInput(required=True)

    def mutate(self, info, customer_data):
        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')

        customer = Customer(
            phone=customer_data.phone,
            name=customer_data.name,
            telegram_id=customer_data.telegram_id,
        )

        customer.save()
        return CreateCustomer(customer=customer)


class UpdateCustomer(graphene.Mutation):
    '''Updates a customer with customerPhone.'''
    customer = graphene.Field(CustomerType)

    class Arguments:
        customer_data = CustomerInput(required=True)

    def mutate(self, info, customer_data):

        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')

        customer = Customer.objects.get(phone=customer_data.phone)
        if customer_data.name is not None:
            customer.name = customer_data.name
        if customer_data.telegram_id is not None:
            customer.telegram_id = customer_data.telegram_id

        customer.save()
        return UpdateCustomer(customer=customer)


class DeleteCustomer(graphene.Mutation):
    '''Deletes a customer with customerPhone.'''
    phone = graphene.String()

    class Arguments:
        phone = graphene.String(required=True)

    def mutate(self, info, phone):

        user = info.context.user

        if user.is_anonymous:
            raise GraphQLError('You need to be logged in.')

        customer = Customer.objects.get(phone=phone)
        if customer is not None:
            customer.delete()

        return DeleteCustomer(phone=phone)


class Mutation(graphene.ObjectType):
    create_customer = CreateCustomer.Field()
    create_task = CreateTask.Field()
    update_customer = UpdateCustomer.Field()
    update_task = UpdateTask.Field()
    delete_customer = DeleteCustomer.Field()
    delete_task = DeleteTask.Field()
