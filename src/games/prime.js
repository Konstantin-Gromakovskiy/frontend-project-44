import game from '../index.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 99) + 2;
  let answer = 'yes';
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      answer = 'no';
      break;
    }
  }
  const question = randomNumber;

  return [question, answer];
};

export default () => { game(instruction, getQuestionAndAnswer); };
