import game from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const isEven = (number) => {
  const result = number % 2 === 0;
  return result;
};

const instruction = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const question = generateRandomNumber(1, 100);

  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  game(instruction, getQuestionAndAnswer);
};
