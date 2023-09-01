// db.ts
class Database {
    private static instance: Database;
    private data: Record<string, number> = {};
  
    private constructor() {}
  
    static getInstance(): Database {
      if (!Database.instance) {
        Database.instance = new Database();
      }
      return Database.instance;
    }
  
    saveResult(studentId: string, score: number): void {
      this.data[studentId] = score;
    }
  
    getResult(studentId: string): number | undefined {
      return this.data[studentId];
    }
  }
  
  export default Database.getInstance();
  