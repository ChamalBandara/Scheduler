# Simple Schedule App

This project is a simple web application that allows users to manage their daily schedules. It consists of a frontend built with HTML, CSS, and JavaScript, and a backend powered by Node.js and Express.

## Project Structure

```
simple-schedule-app
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── scheduleController.js
│   │   ├── models
│   │   │   └── scheduleModel.js
│   │   ├── routes
│   │   │   └── scheduleRoutes.js
│   │   └── types
│   │       └── index.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── scripts.js
│   ├── index.html
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm
- SQLite

### Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Open `index.html` in your web browser to access the application.

## Features

- Add, edit, and delete tasks.
- View scheduled tasks.
- Notifications for upcoming tasks.

## API Endpoints

The backend provides the following API endpoints for task management:

- `POST /tasks` - Add a new task
- `GET /tasks` - Retrieve all tasks
- `PUT /tasks/:id` - Edit an existing task
- `DELETE /tasks/:id` - Delete a task

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is open-source and available under the MIT License.