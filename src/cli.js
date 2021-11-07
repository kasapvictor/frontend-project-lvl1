import readlineSync from 'readline-sync';

const CONFIG = {
  name: '',
  welcome: 'Welcome to the Brain Games!',
  askName: 'May I have your name? \n',
  hello: () => `Hello, ${CONFIG.name}!`,
};

const hello = () => {
  console.log(CONFIG.welcome);

  const userName = readlineSync.question(CONFIG.askName);

  CONFIG.name = userName !== '' ? userName : 'John Doe';

  console.log(CONFIG.hello());
};

export default hello;
