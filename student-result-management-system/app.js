"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const student_1 = __importDefault(require("./student"));
const db_1 = __importDefault(require("./db"));
class StudentResultManagementSystem {
    enrollStudent(id, name) {
        const student = new student_1.default(id, name);
        return student;
    }
    addResult(student, score) {
        db_1.default.saveResult(student.id, score);
    }
    getResult(student) {
        return db_1.default.getResult(student.id);
    }
}
const system = new StudentResultManagementSystem();
const student1 = system.enrollStudent('1', 'John Doe');
system.addResult(student1, 95);
console.log(`Result for ${student1.name}: ${system.getResult(student1)}`);
