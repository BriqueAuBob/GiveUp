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
    author: string,
    date: string,
    totalHours: number,
    contributors: number
  }) {
    const newProject = new this.projectModel(project);
    const result = await newProject.save();
    return result
  }

  async getAll() {
    const projects = await this.projectModel.find().exec();
    return projects
  }

  async getRandoms(count: Number = 9) {
    return await this.projectModel.aggregate([
      { $sample: { size : count } }
    ]).exec()
  }
}
