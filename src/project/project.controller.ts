import { Controller, Get, Post, Render, Body, UseInterceptors, UploadedFiles, UploadedFile, ClassSerializerInterceptor } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

import { ProjectService } from './project.service';
import { Project } from './project.model'
import { options } from './../../helper/upload';

const colors = ['blue', 'red', 'yellow', 'green']

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @Render('index')
  async getAll() {
    const projects = await this.projectService.getAll()
    projects.map(project => {
      project.color = colors[Math.floor(Math.random() * colors.length)]
    })
    return { projects }
  }

  @Get('/new')
  @Render('new')
  new() {
  }

  @Post('/create')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'contributors' },
      { name: 'logo', maxCount: 1 },
    ], options)
  )
  async uploadFile(
    @UploadedFiles() uploads,
    @Body() params: Project
  ) {
    const logo = uploads?.logo?.[0]?.filename ?? undefined
    const contributors = uploads?.contributors?.map(contributor => contributor.filename)
    const data = {
      ...params,
      logo,
      contributors
    }
    try {
      const project = await this.projectService.create(data)
      if (project) {
        return { success: true }
      }
    } catch(err) {
      return err.response.error
    }
  }
}
