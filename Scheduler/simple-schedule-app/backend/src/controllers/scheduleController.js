class ScheduleController {
    constructor(scheduleModel) {
        this.scheduleModel = scheduleModel;
    }

    async addTask(req, res) {
        try {
            const { startTime, endTime, taskName, description } = req.body;
            const newTask = await this.scheduleModel.create({ startTime, endTime, taskName, description });
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: 'Error adding task', error });
        }
    }

    async getTasks(req, res) {
        try {
            const tasks = await this.scheduleModel.findAll();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving tasks', error });
        }
    }

    async editTask(req, res) {
        try {
            const { id } = req.params;
            const { startTime, endTime, taskName, description } = req.body;
            const updatedTask = await this.scheduleModel.update(id, { startTime, endTime, taskName, description });
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(500).json({ message: 'Error editing task', error });
        }
    }

    async deleteTask(req, res) {
        try {
            const { id } = req.params;
            await this.scheduleModel.delete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting task', error });
        }
    }
}

export default ScheduleController;