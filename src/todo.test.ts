import { error } from 'console'
import { ToDoList } from './TodoList'

const groceriesTask = {
    title: 'groceries',
    description: 'supermarket',
    targetDate: '01/01/25',
    type: 'any_type',
    priority: '1',
    subTasks: []
}

describe('ToDoList', () => {
    describe('Testing add', () => {
        test('Should add a new task to the list', () =>{
            const todoInstance = new ToDoList()
            todoInstance.add(groceriesTask)
            const tasks = todoInstance.getTasks()
            expect(tasks).toEqual([groceriesTask])
        })

        test('should add a valid tasks', () => {
            const todoInstance = new ToDoList()
            const invalidValue: any = {
              invalidField: 'invalidValue'
            }
            todoInstance.add(invalidValue)
            const tasks = todoInstance.getTasks()
            expect(tasks).toEqual([])
          })

    })

    describe('Testing update', () => {
          test('Should update a task', () => {
            const todoInstance = new ToDoList();
            todoInstance.add(groceriesTask);

            const newGroceriesTask = {
                title: 'Updated Groceries Task',
                description: 'Go to the supermarket',
                targetDate: '16/03/24',
                type: 'Shopping',
                priority: '2',
            };

            todoInstance.updateTask(0, newGroceriesTask);
            
            const tasks = todoInstance.getTasks();
            expect(tasks.length).toBe(1);
            expect(tasks[0]).toEqual({
                ...groceriesTask,
                ...newGroceriesTask
            });
        });   

        test('Should update a task with the same parameters', () => {
            const todoInstance = new ToDoList();
            todoInstance.add(groceriesTask);

            const updateSameTask = () => {
                todoInstance.updateTask(0, groceriesTask);
            };
        
            expect(updateSameTask).toThrow(Error);
        });

    }) 
    
    describe('Testing remove', () => {
        test('Should remove a task', () => {
            const todoInstance = new ToDoList();
            todoInstance.add(groceriesTask);

            todoInstance.removeTask(0);

            const tasks = todoInstance.getTasks();
            expect(tasks.length).toBe(0);
        });

        test('Should remove an unexisting task', () => {
            const todoInstance = new ToDoList();

            const removeUnexistingTask = () => {
                todoInstance.removeTask(0);
            };
        
            expect(removeUnexistingTask).toThrow(Error);
        });
    
    })     
})