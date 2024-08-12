# Use the official Node.js 18 image as a base
FROM node:18

# Set the working directory
WORKDIR /workspace

# Install Angular CLI globally
RUN npm install -g @angular/cli@16

# Copy the current project directory contents into the container at /workspace
COPY . /workspace

# Install project dependencies
# RUN npm install

# Expose the port the app runs on
EXPOSE 4200

# Command to run the application
# CMD ["ng", "serve", "--host", "0.0.0.0"]
