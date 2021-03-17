//TODO: unit test this
export function stripStringToNumber(value: any) {
  // remove some things like comma's and % signs
  const replaceValues = [",", "%"];
  const regex = new RegExp(replaceValues.join("|"), "g");
  const stringNumber = value.replace(regex, '');
  const result = +stringNumber;
  return result;
}

//TODO: unit test this
export function convertToNumber(value: any) {
  let result;
  if (isNaN(parseInt(value))) {
    return NaN;
  }
  result = +value
  if (isNaN(result)) {
    result = stripStringToNumber(value);
  }
  // if (isNaN(result)) {
  //   throw new Error("Could not convert to number");
  // }
  return result;
}

//TODO: unit test this
export function timeFormatToSeconds(timeFormattedString: string) : number {
  const values = timeFormattedString.split(":").reverse();
  let answer = 0;
  const multipliers = [1, 60, 60 * 60];
  for (let i = 0; i < values.length; i++) {
    const value = convertToNumber(values[i]);
    if (value > 0) {
      if (answer === 0) {
        answer = value;
      } else {
        answer += value * multipliers[i];
      }
    }
  }
  return answer;
}

//TODO: revisit this function
export function determineType(value: any) {
  let type = "string";
  if (!isNaN(convertToNumber(value))) {
    type = "number";
  } else if (new Date(value).toString() !== "Invalid Date") {
    type = "date";
  }
  return type;
}