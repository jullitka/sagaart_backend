FROM python:latest
WORKDIR /sagaart

RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt --no-cache-dir

COPY . .
EXPOSE 8000
CMD ["python", "sagaart/manage.py", "runserver", "0.0.0.0:8000"]
#RUN cd sagaart
#RUN python manage.py makemigrations users
#RUN python manage.py migrate
