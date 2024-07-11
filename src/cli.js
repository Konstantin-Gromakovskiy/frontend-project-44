import readlineSync from 'readline-sync';

const name = () => {
    let name = readlineSync.question('May I have your name?: ');
    return name
};

export { name }
