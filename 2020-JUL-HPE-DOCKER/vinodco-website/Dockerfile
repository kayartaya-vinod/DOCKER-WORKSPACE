# 1. use ubuntu as base image
FROM ubuntu:16.04

# 2. install apache web server
RUN apt-get update -y
RUN apt-get install -y apache2

# 3. install wget to download the zip file from github
RUN apt-get install -y wget

# 4. install unzip to extract the zip file onto our workdir
RUN apt-get install unzip

# 5. set the work directory (if the directory specifed does not exist,
#    it will be created)
WORKDIR /usr/vinod/tmp

# 6. download the content from git as a zip
RUN wget https://github.com/kayartaya-vinod/vinodco-home/archive/master.zip

# 7. unzip the downloaded zip file
RUN unzip ./master.zip

# 8. copy the extracted files into apache specific folder /var/www/html
RUN cp ./vinodco-home-master/* /var/www/html

# 9. start the apache http server (at port 80)
ENTRYPOINT [ "apachectl", "-D", "FOREGROUND" ]