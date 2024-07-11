#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const brainEven = (name) => {
    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no"');

    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 100)
        let correctAnswer
        console.log(`Question: ${randomNumber}`)
        let userAnswer = readlineSync.question('Your answer: ')

        //Проверяем четность рандомного числа, присваеваем переменной правильный ответ
        const isNumberEven = (number) => {
            if (number % 2 === 0) {
                correctAnswer = 'yes'
                return true
            }
            else {
                correctAnswer = 'no'
                return false
            }
        }

        //Переводим ответ пользователя в булево значение (если пользователь ввел некорректный ввод, вернется null )
        const booleanUserAnswer = (userAnswer) => {
            let result
            switch (userAnswer) {
                case 'yes': result = true
                    break;
                case 'no': result = false
                    break;
                default: result = null
            }
            return result
        }

        if (booleanUserAnswer(userAnswer) === isNumberEven(randomNumber)) {
            console.log('Correct!');
        }
        else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${name}`);
            break
        }

        if (i === 2) { console.log(`Congratulations, ${name}!`) };

    }
}

brainEven(name())