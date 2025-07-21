# Express.js REST Starter Kit

## Overview

This project is a starter kit for building RESTful APIs using Express.js. It provides a basic structure and essential features to help you get started quickly.

## Features

- Simple and clean project structure
- RESTful API endpoints
- Middleware support
- Error handling
- Basic logging

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expressjs-rest-starter-kit.git
   ```
2. Navigate to the project directory:
   ```bash
   cd expressjs-rest-starter-kit
   ```
3. Copy the example environment file:
   ```bash
    cp .env.example .env
   ```
4. Install the dependencies:
   ```bash
    npm install
   ```
5. Run the database migrations:
   ```bash
    npx prisma migrate deploy
   ```
6. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```
7. Run the project in development mode:
   ```bash
    npm run dev
   ```
