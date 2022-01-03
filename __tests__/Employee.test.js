const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee('Test');

    expect(employee.name).toBe('Test');
});

test('creates an id', () => {
    const employee = new Employee('Test', 1);
    const id = 1

    expect(employee.id).toBe(id);
});

test('creates an email', () => {
    const employee = new Employee('Test', 1, 'test@gmail.com');
    const email = 'test@gmail.com';

    expect(employee.email).toBe(email);
});

test('return role', () => {
    const employee = new Employee('Test', 1, 'test@gmail.com');
    const role = 'Employee';

    expect(employee.getRole()).toBe('Employee');
});