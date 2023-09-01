"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// db.ts
class Database {
    constructor() {
        this.data = {};
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    saveResult(studentId, score) {
        this.data[studentId] = score;
    }
    getResult(studentId) {
        return this.data[studentId];
    }
}
exports.default = Database.getInstance();
