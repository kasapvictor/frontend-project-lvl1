const getRandom = (min = 1, max = 100) => {
  const numMin = Math.ceil(min);
  const numMax = Math.floor(max);
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
};
export default getRandom;
