import fs from "fs/promises";

export interface Repository<T> {
  read(): Promise<T[]>;
  add(data: T): Promise<T>;
  delete(id: string): Promise<void>;
}

class GenericRepository<T extends { id: string } = { id: string }>
  implements Repository<T>
{
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  async read(): Promise<T[]> {
    try {
      const filePath = await fs.readFile(this.filePath, "utf8");
      const fileData = JSON.parse(filePath);
      return fileData;
    } catch (error) {
      if ((error as Error).cause === "ENOENT") {
        console.log(`Error: File not found at ${this.filePath}`);
      } else if (error instanceof SyntaxError) {
        console.log(`Error parsing JSON at ${this.filePath}:`);
        console.error(error.message);
      }
    }
    return [];
  }
  // async read(): Promise<T[]> {
  //   try {
  //     if (fs.existsSync(this.filePath)) {
  //       console.log("File exists!");
  //       // Proceed with reading or processing the file
  //     } else {
  //       const fileContent = fs.readFileSync(this.filePath, "utf8");
  //       if (fileContent) {
  //         return JSON.parse(fileContent);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error reading data:", error);
  //     console.error((error as Error).message);
  //   }

  //   // Default return if fileContent is null or an error occurred
  //   return []; // Return an empty array to satisfy the return type
  // }

  async add(data: T): Promise<T> {
    const existingData = await this.read();
    if (!existingData.some((item) => item.id === data.id)) {
      const newEntry = { ...data };
      if (!newEntry.id) {
        newEntry.id = "id"; // Only set `id` if it’s not already present
      }
      //  const newEntry = { id: data.id, ...data };
      existingData.push(newEntry);
      await fs.writeFile(this.filePath, JSON.stringify(existingData, null, 2));
      return newEntry;
    } else {
      throw new Error(`Skill with ID ${data.id} already exists`);
    }
  }
  async getById(id: string): Promise<T> {
    const data = await this.read();
    const index = data.findIndex((item) => item.id === id);
    if (data.length === 0) {
      throw new Error(`Skill with ID ${id} does not exist`);
    }
    return data[index];
  }
  async delete(id: string): Promise<void> {
    const data = await this.read();
    const updatedData = data.filter((item) => item.id !== id);
    if (updatedData.length === 0) {
      throw new Error(`Skill with ID ${id} does not exist`);
    }
    await fs.writeFile(this.filePath, JSON.stringify(updatedData, null, 2));
  }
}

export default GenericRepository;
