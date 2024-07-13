import game from '../index.js';

const instruction = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const step = Math.floor(Math.random() * 10) + 1;
  const space = Math.floor(Math.random() * 10) + 1;
  const answer = step * space;
  let question = '';

  for (let i = 1; i < 11; i += 1) {
    // if (i !== space) { progressionArr.push(step * i); } else { progressionArr.push('..'); }
    if (i !== space) { question = `${question}${step * i} `; } else { question = `${question}.. `; }
  }

  return [question, answer.toString()];
};

export default () => { game(instruction, getQuestionAndAnswer); };
