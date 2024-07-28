import game from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const isPrime = (number) => {
  let answer = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      answer = false;
    }
  }
  return answer;
};

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomNumber = generateRandomNumber(1, 100);

  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;

  return [question, answer];
};

export default () => { game(instruction, getQuestionAndAnswer); };
