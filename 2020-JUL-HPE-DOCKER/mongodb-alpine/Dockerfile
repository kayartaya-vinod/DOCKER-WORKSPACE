# 10. specify the base image - alpine:latest
FROM alpine:latest

LABEL maintainer="Vinod Kumar" email="vinod@vinod.co" website="https://vinod.co/"

# 12. add additional resource links to existing package repository list

RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.6/main" >> /etc/apk/repositories
RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.6/community" >> /etc/apk/repositories

# 15. update the apache package index
RUN apk update

# 20. install mongodb 3.4
RUN apk add mongodb=3.4.4-r0

RUN mkdir -p /data/db

EXPOSE 27017

# 30. specify the execute command - mongod --dbpath /custom/db/directory
ENTRYPOINT [ "mongod" ]