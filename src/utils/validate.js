export const existNumber = string => {
  const regex = RegExp('[0-9]+', 'g');
  return regex.test(string);
}

export const existUppercase = string => {
  const regex = RegExp('[A-Z]+', 'g');
  return regex.test(string);
}


export const validateLength = (string, maxLength) => string.length <= maxLength;

export const validatePassword = string => validateLength(string, 12) && existNumber(string) && existUppercase(string);