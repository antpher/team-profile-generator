
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test('set office number', () => {
    const manager = new Manager('Test', 1, 'test@gmail.com', 10);
    const officeNumber = 10;

    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test('get role', () => {
    const manager = new Manager('Test', 1, 'test@gmail.com', 10);
    const role = 'Manager';

    expect(manager.getRole()).toBe(role);
});