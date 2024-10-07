# Use the Node.js base image
FROM node:20

# Create an app directory
RUN mkdir -p /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"]
