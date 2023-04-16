import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { AddItemDto } from 'src/dto/AddItemDto';
import { updatedto } from 'src/dto/updatedto';
import { TodoModuleService } from 'src/todo-module/todo-module.service';
import { TodoModel } from 'src/TodoModel';

@Controller('controllerTodo')
export class ControllerTodoModuleController {
  constructor(private service: TodoModuleService) {}
  private todos = [];
  @Get('allTodos')
  getTodos() {
    return this.service.getTodos();
  }
  @Post('addTODO')
  createTodo(@Body() newTodo: AddItemDto) {
    const { name, description } = newTodo;
    const todo = new AddItemDto();
    todo.name = name;
    todo.description = description;
    return this.service.createTodo(todo);
  }
  @Get(':id')
  getTodoById(@Param('id') id) {
    return this.service.getTodoById(id);
  }
  @Get('delete/:id')
  deleteTodoById(@Param('id') id) {
    return this.service.deleteTodoById(id);
  }
  @Put('update/:id')
  updateTodo(@Body() updatedTodo: updatedto, @Param('id') id) {
    const { name, description } = updatedTodo;
    return this.service.updateTodo(updatedTodo, id);
  }
}
