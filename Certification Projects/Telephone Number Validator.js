//Made by Victor Alexis
//https://www.freecodecamp.org/VictorAlexisL

const regex = /^(\+?1\s?\d{3}|\+?1\s?\(\d{3}\)|\d{3}|\(\d{3}\))\s?\-?\d{3}\s?\-?\d{4}$/;

function telephoneCheck(str) {
  return regex.test(str);
};
