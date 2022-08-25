FROM node:16.17.0

WORKDIR /myReact/

COPY ./package.json /myReact/
COPY ./package-lock.json /myReact/

RUN npm install
COPY . /myReact
CMD npm run start