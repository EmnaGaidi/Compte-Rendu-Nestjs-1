import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AddItemDto } from 'src/dto/AddItemDto';
import { updatedto } from 'src/dto/updatedto';
import { TodoModel } from 'src/TodoModel';

@Injectable()
export class TodoModuleService {
  @Inject('UUID') uuid: () => string;
  private todos = [];
  getTodos() {
    return this.todos;
  }
  createTodo(newTodo: AddItemDto) {
    const { name, description } = newTodo;
    if (description == null || description.length < 10) {
      return new BadRequestException(
        'la description est obligatoire et doit avoir au moins 10 caractères ',
      );
    }
    if (name == null || name.length < 3 || name.length > 10) {
      return new BadRequestException(
        'le nom est obligatoire et doit avoir entre 3 et 10 caractères ',
      );
    }
    const todo = new TodoModel(name, description);
    this.todos.push(todo);
    return this.todos;
  }
  getTodoById(id: string) {
    const todo = this.todos.find((Todo) => Todo.id == id);
    return todo;
  }
  deleteTodoById(id: string) {
    this.todos = this.todos.filter((item) => item.id !== id);
    return 'done';
  }
  updateTodo(updatedTodo: updatedto, id: string) {
    const { name, description } = updatedTodo;
    const todo = this.todos.find((item) => item.id == id);
    todo.name = name ? name : todo.name;
    todo.description = description ? description : todo.description;
    return { todo, message: 'the item was updated successfully' };
  }
}
