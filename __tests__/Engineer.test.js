const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('get role', () => {
    const engineer = new Engineer('Test', 1, 'test@gmail.com');
    const role ="Engineer";

    expect(engineer.getRole()).toBe(role);
});

test('get github user', () => {
    const engineer = new Engineer('Test', 1, 'test@gmail.com', 'test');
    const github = 'test';

    expect(engineer.getGithub()).toBe(github);
});