import game from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const instruction = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const step = generateRandomNumber(1, 10);
  const space = generateRandomNumber(1, 10);

  const getProgressionStr = () => {
    let str = '';

    for (let i = 1; i < 11; i += 1) {
      if (i !== space) { str = `${str}${step * i} `; } else { str = `${str}.. `; }
    }

    return str;
  };

  const question = getProgressionStr();
  const answer = (step * space).toString();
  return [question, answer];
};

export default () => { game(instruction, getQuestionAndAnswer); };
