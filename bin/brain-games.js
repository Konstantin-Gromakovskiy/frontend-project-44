#!/usr/bin/env node
import { name } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

//Функция запрашивает имя у пользователя и возвращает его в виде приветствия
console.log(name());
