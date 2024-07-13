import game from '../index.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const numbers = [randomNumber1, randomNumber2];
  const sortNumbers = numbers.sort((a, b) => a - b);
  let i = sortNumbers[0];

  while ((randomNumber1 % i !== 0) || (randomNumber2 % i !== 0)) {
    i -= 1;
  }
  const answer = i;

  return [question, answer.toString()];
};

export default () => {
  game(instruction, getQuestionAndAnswer);
};
