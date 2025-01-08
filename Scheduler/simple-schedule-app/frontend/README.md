# Simple Schedule App

This project is a simple web application that allows users to manage their daily schedules. It consists of a frontend built with HTML, CSS, and JavaScript, and a backend powered by Node.js and Express.

## Frontend

The frontend is located in the `frontend` directory and includes the following files:

- **index.html**: The main HTML file that contains the structure of the application.
- **css/styles.css**: The stylesheet for the frontend, defining the layout and appearance of the application.
- **js/scripts.js**: The JavaScript file that handles user interactions, form submissions, and API calls to the backend.

### Running the Frontend

1. Navigate to the `frontend` directory.
2. Open `index.html` in your web browser to view the application.

## Backend

The backend is located in the `backend` directory and includes the following files:

- **src/app.js**: The entry point of the backend application, initializing the Express app and connecting to the SQLite database.
- **src/controllers/scheduleController.js**: Contains the logic for handling task-related operations.
- **src/models/scheduleModel.js**: Defines the schema for tasks in the SQLite database.
- **src/routes/scheduleRoutes.js**: Sets up the API endpoints for managing tasks.
- **src/types/index.js**: Exports types/interfaces for task data structure.

### Running the Backend

1. Navigate to the `backend` directory.
2. Install the required dependencies by running `npm install`.
3. Start the server with `npm start`.

## Connecting Frontend and Backend

Ensure that the backend server is running before accessing the frontend. The frontend will make API calls to the backend to manage tasks.

## Additional Notes

Feel free to customize the application further to suit your needs!