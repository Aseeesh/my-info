"use server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src/data/skills.json");

async function readData() {
  const fileContent = await fs.promises.readFile(dataFilePath, "utf8");
  return JSON.parse(fileContent);
}

export async function addData(newItem: { name: string }) {
  const data = await readData();
  const newEntry = { id: Date.now(), ...newItem };
  data.push(newEntry);
  await fs.promises.writeFile(dataFilePath, JSON.stringify(data, null, 2));
  return newEntry;
}
export async function deleteData(id: number) {
  const data = await readData();
  const updatedData = data.filter((item: { id: number }) => item.id !== id);
  await fs.promises.writeFile(
    dataFilePath,
    JSON.stringify(updatedData, null, 2),
  );
}
export async function getData() {
  return await readData();
}
