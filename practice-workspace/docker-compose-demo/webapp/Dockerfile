FROM node:alpine
WORKDIR /usr/projects/hello-webapp

COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD ["npm", "start"]
