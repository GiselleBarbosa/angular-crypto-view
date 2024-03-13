# Base image
FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli@16.2.0

# Bundle app source
COPY . .

# Build the Angular app
RUN ng build --configuration production

# Install JSON Server globally
RUN npm install -g json-server

# Expose the ports the app runs on
EXPOSE 4200 3000

# Start both JSON Server and Angular app
CMD json-server --watch ./database/db.json --port 3000 & ng serve --host 0.0.0.0 --disable-host-check
