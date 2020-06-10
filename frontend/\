FROM node:10
RUN mkdir /reactapp
WORKDIR /reactapp
COPY package*.json /reactapp/
RUN npm install
COPY . /reactapp/
EXPOSE 3000
CMD ["npm", "start"]
