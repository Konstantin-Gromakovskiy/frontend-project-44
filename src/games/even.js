import game from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const question = generateRandomNumber(1, 100);

  const isEven = (number) => {
    const answer = number % 2 === 0 ? 'yes' : 'no';
    return answer;
  };

  const answer = isEven(question);
  return [question, answer];
};

export default () => {
  game(instruction, getQuestionAndAnswer);
};
