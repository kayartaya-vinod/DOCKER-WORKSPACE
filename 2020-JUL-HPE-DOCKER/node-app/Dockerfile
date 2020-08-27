FROM node:alpine3.10

WORKDIR /usr/vinod/app

COPY appfiles/package.json ./

RUN npm install 

COPY appfiles/* ./

ENTRYPOINT [ "npm", "start" ]