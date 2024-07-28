import game from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const instruction = 'What is the result of the expression?';

const calculate = (number1, number2, symbol) => {
  switch (symbol) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const getQuestionAndAnswer = () => {
  const symbols = ['+', '-', '*'];
  const randomSymbolIndex = generateRandomNumber(0, symbols.length - 1);
  const randomSymbol = symbols[randomSymbolIndex];
  const randomNumber1 = generateRandomNumber(1, 10);
  const randomNumber2 = generateRandomNumber(1, 10);

  const question = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
  const answer = (calculate(randomNumber1, randomNumber2, randomSymbol)).toString();
  return [question, answer];
};

export default () => {
  game(instruction, getQuestionAndAnswer);
};
