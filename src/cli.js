import readlineSync from 'readline-sync';
import CONFIG from './utils/config.js';

const hello = () => {
  const WELCOME_TEXT = 'Welcome to the Brain Games!';
  const ASK_NAME = 'May I have your name? \n';
  const HELLO_TEXT = (name) => `Hello, ${name}!`;

  console.log(WELCOME_TEXT);

  CONFIG.name = readlineSync.question(ASK_NAME);

  console.log(HELLO_TEXT(CONFIG.name));
};

export default hello;
