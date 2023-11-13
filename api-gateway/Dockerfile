FROM node:16-alpine as node
RUN apk update
RUN apk add wireguard-tools
RUN mkdir -p /run/app
COPY ./ /run/app/
WORKDIR /run/app
RUN npm install
EXPOSE 80
CMD [ "npm", "run", "start" ]