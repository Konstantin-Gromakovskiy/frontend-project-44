import game from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomNumber = generateRandomNumber(0, 100);

  const isPrime = (number) => {
    let answer = 'yes';
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        answer = 'no';
      }
    }
    return answer;
  };

  const answer = (isPrime(randomNumber).toString());
  const question = randomNumber;

  return [question, answer];
};

export default () => { game(instruction, getQuestionAndAnswer); };
