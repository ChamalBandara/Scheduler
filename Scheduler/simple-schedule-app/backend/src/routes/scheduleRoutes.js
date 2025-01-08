const express = require('express');
const ScheduleController = require('../controllers/scheduleController');

const router = express.Router();
const scheduleController = new ScheduleController();

function setRoutes(app) {
    router.post('/tasks', scheduleController.addTask.bind(scheduleController));
    router.get('/tasks', scheduleController.getTasks.bind(scheduleController));
    router.put('/tasks/:id', scheduleController.editTask.bind(scheduleController));
    router.delete('/tasks/:id', scheduleController.deleteTask.bind(scheduleController));

    app.use('/api', router);
}

module.exports = setRoutes;