import { Test, TestingModule } from '@nestjs/testing';
import { ControllerTodoModuleController } from './controller-todo-module.controller';

describe('ControllerTodoModuleController', () => {
  let controller: ControllerTodoModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerTodoModuleController],
    }).compile();

    controller = module.get<ControllerTodoModuleController>(ControllerTodoModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
