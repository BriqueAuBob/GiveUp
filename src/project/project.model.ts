import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  logo: { type: String, required: true },
  totalHours: { type: Number, required: true },
  contributors: { type: Array, required: true },
});

export interface Project {
  title: string,
  description: string,
  contributors: string[],
  logo: string,
  totalHours: number,
};