# Generated by Django 4.1.7 on 2023-03-04 09:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0006_contactme"),
    ]

    operations = [
        migrations.DeleteModel(
            name="ContactMe",
        ),
    ]