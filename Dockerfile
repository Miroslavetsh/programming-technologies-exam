FROM node

WORKDIR /usr/src/app
COPY package*.json .

COPY . .
EXPOSE 3000

CMD ["npm", "test"]
