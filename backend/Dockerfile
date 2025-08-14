# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose port the app runs on
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
