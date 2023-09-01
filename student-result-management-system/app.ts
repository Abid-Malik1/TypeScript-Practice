// app.ts
import Student from './student';
import db from './db';

class StudentResultManagementSystem {
  enrollStudent(id: string, name: string): Student {
    const student = new Student(id, name);
    return student;
  }

  addResult(student: Student, score: number): void {
    db.saveResult(student.id, score);
  }

  getResult(student: Student): number | undefined {
    return db.getResult(student.id);
  }
}

const system = new StudentResultManagementSystem();
const student1 = system.enrollStudent('1', 'John Doe');
system.addResult(student1, 95);
console.log(`Result for ${student1.name}: ${system.getResult(student1)}`);
