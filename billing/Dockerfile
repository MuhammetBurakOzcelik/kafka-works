FROM node:16-alpine as node
WORKDIR /run/app
COPY package* ./
RUN npm install
COPY ./ /run/app/
EXPOSE 80
CMD [ "npm", "run", "start" ]