module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(bracket => bracket.join(''));

  while (str.length > 0) {
      const initialStr = str;

      brackets.forEach(bracket => str = str.replace(bracket, ''));

      if (initialStr === str) {
          break;
      }
  }

  return str.length === 0;
}
