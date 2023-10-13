# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the service's port
EXPOSE 3002

# Command to run the service
CMD [ "node", "index.js" ]

