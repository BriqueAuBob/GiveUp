import { Controller, Get, Render } from '@nestjs/common';
import { ProjectService } from "./project/project.service";

@Controller()
export class AppController {
  @Get()
  @Render('new')
  getAll() {
    // const projects = await ProjectService.getAll()
    // return { projects }
  }
}
