# Generated by Django 3.2.5 on 2021-07-23 10:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('requests', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='created_at',
            field=models.DateField(auto_now=True),
        ),
    ]
