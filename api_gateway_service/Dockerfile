# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install
RUN npm install -g nodemon jest

# Bundle app source
COPY . .
#RUN npm test
RUN npm uninstall jest

# Expose the service's port
EXPOSE 3000

# Command to run the service
CMD [ "node", "index.js" ]
# CMD ["nodemon", "-L", "--watch", "/usr/src/app/index.js"]