import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Project } from './project.model'

@Injectable()
export class ProjectService {
  // private projects: Project[] = [];
  
  constructor (
    @InjectModel('Project') private readonly projectModel: Model<Project>
  ) {}

  async create(project: {
    title: string,
    description: string,
    totalHours: number,
    contributors: string[],
    logo: string,
  }) {
    const newProject = new this.projectModel(project);
    try {
      const result = await newProject.save();
      return result
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Tous les champs ne sont pas renseignés et/ou sont mal renseignés.',
      }, HttpStatus.FORBIDDEN);
    }
  }

  async getAll(count: number = 9) {
    return await this.projectModel.aggregate([
      { $sample: { size : count } }
    ]).exec()
  }
}
