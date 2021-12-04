function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has ${task.complete ? "" : "not"} been compeleted`);
    },

    markComplete: function() {
      task.complete = true;
    }
  };

  return task;
}

// DRIVER CODE BELOW
const task1 = newTask("Know Thyself", "Read Meditations by Marcus Aurealius");
const task2 = newTask("Love Thyself", "Watch Avatar the Last Airbender");
const task = [task1, task2];

console.log(task1.title);
console.log(task1.description);
task1.logState();
task1.markComplete();
task1.logState(1);


////////////////////////////////////////////////////////////////////////////////////

/* -> PRIOR TO OOP with functions as behaviours (methods of the object)

function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false
  };
  return task;
}

//prints out the provided task details
function logTaskState(task) {
  console.log(`${task.title} has ${task.complete ? "" : "not"} been compeleted`)
}

function completeTask(task) {
  task.complete = true;
}

// DRIVER CODE BELOW
const task1 = newTask("Know Thyself", "Read Meditations by Marcus Aurealius");
const task2 = newTask("Love Thyself", "Watch Avatar the Last Airbender")
const task = [task1, task2]

logTaskState(task1)
completeTask(task1)
logTaskState(task1)

// console.log(task)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* -> PRIOR TO OOP
// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskcomplete.push(false)
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}


// DRIVER CODE BELOW

newTask("Know thyself"); // task 0
newTask("Love thyself"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
completeTask(1);
logTaskState(1); // Clean Cat Litter has been completed
*/
