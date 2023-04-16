import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('controller')
export class ControllerController {
  @Get('get')
  getMethod(): string {
    return "it's get method";
  }
  @Post('post')
  postMethod(): string {
    return "it's post method";
  }
  @Delete('delete')
  deleteMethod(): string {
    return "it's post method";
  }
  @Patch('patch')
  ppatchMethod(): string {
    return "it's post method";
  }
}
