import readlineSync from 'readline-sync';
import CONFIG from './utils/config.js';

const hello = () => {
  console.log(CONFIG.greeting);
  CONFIG.name = readlineSync.question(CONFIG.askName);
  console.log(CONFIG.hello());
};

export default hello;
