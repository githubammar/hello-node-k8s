# Use a lightweight Node.js image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY server.js ./

# Document the port used by the application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
