FROM node:18.12.1-alpine
# set work directory
WORKDIR /usr/src/app

# install dependencies
RUN npm install axios
RUN npm install --save react-apexcharts apexcharts
COPY . /usr/src/app


EXPOSE 3000

CMD ["npm", "start"]