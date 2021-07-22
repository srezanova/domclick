# Generated by Django 3.2.5 on 2021-07-22 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField(auto_now_add=True)),
                ('product', models.CharField(blank=True, max_length=200)),
                ('category', models.CharField(choices=[('CNSL', 'Consulting'), ('DGNS', 'Diagnosis'), ('REPA', 'Repair'), ('RPLC', 'Replacement'), ('RTRN', 'Return'), ('CMPL', 'Complaint'), ('OTHER', 'Other')], max_length=15)),
                ('status', models.CharField(choices=[('OPEN', 'Open'), ('SCHEDULED', 'Scheduled'), ('CANCELED', 'Canceled'), ('CLOSED', 'Closed')], max_length=15)),
                ('problem', models.CharField(max_length=255)),
                ('solution', models.CharField(max_length=255)),
            ],
        ),
    ]
