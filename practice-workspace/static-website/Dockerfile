FROM ubuntu:16.04

LABEL maintainer="Vinod Kumar" version=1.0.0 maintainer_email="vinod@vinod.co"

RUN apt-get update -y
RUN apt-get install -y apache2
RUN apt-get install -y wget
RUN apt-get install -y unzip

WORKDIR /tmp

RUN wget https://github.com/kayartaya-vinod/vinodco-home/archive/master.zip

RUN unzip master.zip

RUN cp vinodco-home-master/* /var/www/html

EXPOSE 80

CMD [ "apachectl", "-D", "FOREGROUND"]