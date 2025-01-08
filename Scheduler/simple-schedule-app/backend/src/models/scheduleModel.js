exports.Schedule = {
    taskName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
};