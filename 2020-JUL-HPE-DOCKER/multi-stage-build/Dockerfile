FROM node:alpine as builder

WORKDIR /usr/vinod/app

COPY ./hello-react/package.json ./

RUN npm install

COPY ./hello-react/ ./

RUN npm run build
# the result of this is a new folder /usr/vinod/app/build

FROM nginx:alpine

COPY --from=0 /usr/vinod/app/build /usr/share/nginx/html/