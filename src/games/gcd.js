import game from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const getGcd = (number1, number2) => {
  const numbers = [number1, number2];
  const sortNumbers = numbers.sort((a, b) => a - b);
  let i = sortNumbers[0];

  while ((number1 % i !== 0) || (number2 % i !== 0)) {
    i -= 1;
  }
  return i;
};

const instruction = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const randomNumber1 = generateRandomNumber(0, 100);
  const randomNumber2 = generateRandomNumber(0, 100);

  const answer = (getGcd(randomNumber1, randomNumber2).toString());
  const question = `${randomNumber1} ${randomNumber2}`;
  return [question, answer];
};

export default () => {
  game(instruction, getQuestionAndAnswer);
};
