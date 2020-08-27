# specify a base image for your image
FROM alpine

# run some commands
WORKDIR /usr/vinod/app

COPY vinod.txt ./

# specify an entrypoint / cmd

ENTRYPOINT [ "cat", "./vinod.txt" ]
