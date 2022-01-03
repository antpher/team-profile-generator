const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test('get school', () => {
    const intern = new Intern('Test', 1, 'test@gmail.com', 'schooltest');
    const school = 'schooltest';

    expect(intern.getSchool()).toBe(school);
});

test('get role', () => {
    const intern = new Intern('Test', 1, 'test@gmail.com', 'schooltest');
    const role = 'Intern';

    expect(intern.getRole()).toBe(role)
});