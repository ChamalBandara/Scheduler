document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('task-input').value;
    const tasks = parseTasks(input);
    displayTasks(tasks);
    setAlarms(tasks);
});

function parseTasks(input) {
    const taskLines = input.split('\n');
    const tasks = [];
    let currentTask = null;

    taskLines.forEach(line => {
        const timeMatch = line.match(/^(\d{1,2}:\d{2} [APM]{2}) - (\d{1,2}:\d{2} [APM]{2}): (.+)$/);
        if (timeMatch) {
            if (currentTask) {
                tasks.push(currentTask);
            }
            currentTask = {
                start: timeMatch[1],
                end: timeMatch[2],
                name: timeMatch[3],
                description: ''
            };
        } else if (currentTask) {
            currentTask.description += line + '\n';
        }
    });

    if (currentTask) {
        tasks.push(currentTask);
    }

    return tasks;
}

function displayTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.start} - ${task.end}: ${task.name}\n${task.description}`;
        taskList.appendChild(li);
    });
}

function setAlarms(tasks) {
    const alarmList = document.getElementById('alarm-list');
    alarmList.innerHTML = '';
    tasks.forEach(task => {
        const startTime = new Date();
        const [startHour, startMinute] = task.start.split(/[: ]/);
        startTime.setHours(convertTo24Hour(startHour, task.start), startMinute, 0, 0);

        const now = new Date();
        const timeUntilStart = startTime - now;

        if (timeUntilStart > 0) {
            const alarmId = setTimeout(() => {
                playAlarm(task.name);
            }, timeUntilStart);

            const li = document.createElement('li');
            li.textContent = `${task.start} - ${task.name}`;
            
            const label = document.createElement('label');
            label.className = 'switch';
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = true;
            input.addEventListener('change', () => {
                if (!input.checked) {
                    clearTimeout(alarmId);
                    stopAlarm();
                    li.remove();
                }
            });
            const span = document.createElement('span');
            span.className = 'slider';
            label.appendChild(input);
            label.appendChild(span);
            
            li.appendChild(label);
            alarmList.appendChild(li);
        }
    });
}

function convertTo24Hour(hour, time) {
    if (time.includes('PM') && hour !== '12') {
        return parseInt(hour) + 12;
    } else if (time.includes('AM') && hour === '12') {
        return 0;
    }
    return parseInt(hour);
}

let alarmAudio;

function playAlarm(taskName) {
    alarmAudio = new Audio('sounds/alarm.mp3');
    alarmAudio.loop = true;
    alarmAudio.play().catch(error => {
        console.error('Error playing alarm sound:', error);
    });

    // Create custom popup
    const popup = document.createElement('div');
    popup.className = 'alarm-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <p>Time for: ${taskName}</p>
            <button id="stop-alarm-button">Stop Alarm</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Add event listener to stop alarm button
    document.getElementById('stop-alarm-button').addEventListener('click', () => {
        stopAlarm();
        document.body.removeChild(popup);
    });
}

function stopAlarm() {
    if (alarmAudio) {
        alarmAudio.pause();
        alarmAudio.currentTime = 0;
    }
}