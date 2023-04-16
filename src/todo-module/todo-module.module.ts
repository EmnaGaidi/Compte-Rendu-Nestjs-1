import { Module } from '@nestjs/common';
import { ControllerTodoModuleController } from 'src/controller-todo-module/controller-todo-module.controller';
import { TodoModuleService } from './todo-module.service';

@Module({
  providers: [TodoModuleService],
  controllers: [ControllerTodoModuleController],
})
export class TodoModuleModule {}
