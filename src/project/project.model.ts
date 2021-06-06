import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  totalHours: { type: Number, required: true },
  contributors: { type: Number, required: true },
});

export interface Project {
  title: string,
  description: string,
  author: string,
  date: string,
  totalHours: number,
  contributors: number,
};