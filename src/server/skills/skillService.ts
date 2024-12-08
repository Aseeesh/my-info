import path from "path";
import GenericRepository from "../repository";
import { Skill } from "./type";

const dataFilePath = path.join(process.cwd(), "src/server/skills/data.json");
const skillRepository = new GenericRepository<Skill>(dataFilePath);

export async function getAllSkills(): Promise<Skill[]> {
  return await skillRepository.read();
}

export async function addNewSkill(skill: Skill): Promise<Skill> {
  return await skillRepository.add(skill);
}

export async function deleteSkill(id: string): Promise<void> {
  await skillRepository.delete(id);
}
