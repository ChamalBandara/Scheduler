# Simple Schedule App - Backend

## Overview
This backend application is built using Node.js and Express. It provides an API for managing daily schedules, allowing users to add, edit, delete, and retrieve tasks.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd simple-schedule-app/backend
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

## Running the Application

To start the backend server, run the following command:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

### Tasks

- **GET /tasks**: Retrieve all tasks.
- **POST /tasks**: Add a new task.
- **PUT /tasks/:id**: Edit an existing task.
- **DELETE /tasks/:id**: Delete a task.

## Database

This application uses SQLite as the database to store tasks. Ensure that the database is set up correctly before running the application.

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.