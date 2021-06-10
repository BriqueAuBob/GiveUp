import { Injectable } from '@nestjs/common';
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
      console.log(err)
    }
  }

  async getAll(count: number = 9) {
    return await this.projectModel.aggregate([
      { $sample: { size : count } }
    ]).exec()
  }
}
