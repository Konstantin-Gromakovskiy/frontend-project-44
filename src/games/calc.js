import game from '../index.js';

const instruction = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const symbols = ['+', '-', '*'];
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const randomNumber1 = Math.floor(Math.random() * 10);
  const randomNumber2 = Math.floor(Math.random() * 10);
  let question = '';
  let answer;

  switch (randomSymbol) {
    case '+':
      answer = randomNumber1 + randomNumber2;
      question = `${randomNumber1} + ${randomNumber2}`;
      break;
    case '-':
      answer = randomNumber1 - randomNumber2;
      question = `${randomNumber1} - ${randomNumber2}`;
      break;
    default:
      answer = randomNumber1 * randomNumber2;
      question = `${randomNumber1} * ${randomNumber2}`;
  }

  return [question, answer.toString()];
};

export default () => {
  game(instruction, getQuestionAndAnswer);
};
