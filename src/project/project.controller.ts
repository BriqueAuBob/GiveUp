import { Controller, Get, Post, Render, Body } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.model'

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @Render('index')
  async getAll() {
    const projects = await this.projectService.getRandoms()
    return { projects }
  }

  @Post('/create')
  async create(@Body() params: Project) {
    try {
      const project = await this.projectService.create(params)
      if (project) {
        return { success: true }
      }
    } catch {
      // return error
    }
  }
}
