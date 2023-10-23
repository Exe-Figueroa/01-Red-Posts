FROM node:16 AS build

RUN mkdir -p /usr/src/my-store-two

WORKDIR /usr/src/my-store-two


ARG DB_HOST
ARG DB_PORT
ARG DB_PASSWORD
ARG DB_USER
ARG DB_NAME

ENV DB_HOST=$DB_HOST
ENV DB_PORT=$DB_PORT
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_USER=$DB_USER
ENV DB_NAME=$DB_NAME


COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 8080

CMD ["npm", "start"]