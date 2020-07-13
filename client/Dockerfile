FROM node:alpine

RUN mkdir -p /usr/src/app/client

WORKDIR /usr/src/app/client

ENV PATH /usr/src/app/client/.bin:$PATH

COPY package.json /usr/src/app/client/package.json
RUN npm install tsc --silent
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY . ./
CMD ["npm", "start"]