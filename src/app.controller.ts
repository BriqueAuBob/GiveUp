import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index')
  getHello() {
    return { message: 'Bob tu pues du cul et c\'est vrai' };
  }
}
