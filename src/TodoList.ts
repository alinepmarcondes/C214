export type Task = {
  title: string,
  description: string,
  targetDate: string,
  type?: string,
  priority?: string,
  subTasks?: Task []
}

export type UpdateTask = {
title?: string,
description?: string,
targetDate?: string,
type?: string,
priority?: string,
subTasks?: Task []
}

export class ToDoList {
private tasks: Task[] = []

add (task: Task) {
  const missingProperties = ['title', 'description', 'targetDate'].filter(
    (prop) => !Object.keys(task).includes(prop)
  )
  try {
    if (missingProperties.length > 0) {
      return 'Missing properties in task object'
    }
    this.tasks.push(task)
  } catch (error) {
    return error
  }
}

getTasks () {
  return this.tasks
}

updateTask(index: number, task: UpdateTask) {
  const existingTask = this.tasks[index];

  if (
      JSON.stringify(existingTask) === JSON.stringify({ ...existingTask, ...task })
  ) {
      throw new Error('Cannot update task with the same parameters.');
  }

  this.tasks[index] = {
      ...existingTask,
      ...task
  };
}

removeTask(index: number) {
  if (index < 0 || index >= this.tasks.length) {
      throw new Error('Index is out of bounds. Cannot remove task.');
  }

  this.tasks.splice(index, 1);
}
}