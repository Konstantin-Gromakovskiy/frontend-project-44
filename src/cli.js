import readlineSync from 'readline-sync';

export const name = () => {
    let name = readlineSync.question('May I have your name?: ');
    return `Hello, ${name}!`;
};
