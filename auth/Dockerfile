FROM node:latest
RUN npm install -g nodemon 
RUN mkdir -p /usr/src/app/auth

WORKDIR /usr/src/app/auth

COPY package.json /usr/src/app/auth

RUN npm install tsc --silent
RUN npm install

COPY . .
EXPOSE 5000
CMD [ "npm", "start"]