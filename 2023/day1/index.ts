import input from "./input.txt"

const list  = input.split('\n').filter(e => e !== "")

/*
  ********** Part 1 ***********
  let total = 0;

for (const line of list) {
  let nums = line.split("").filter(e => /\d/.test(e))
  let sum = nums[0] + nums.at(-1)
  total+= +sum;
}

console.log(total);
*/

/*
let realTotal = 0;

const stringArr = { "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
                    "six": 6, "seven": 7, "eight": 8, "nine": 9}

for (let line of list) {
  for (const [key, value] of Object.entries(stringArr)) {
    while (line.includes(key)) {
      line = line.replace(key, value.toString())
      //console.log(line);
    }
  }
  let nums = line.split("").filter(e => /\d/.test(e))
  let sum = nums[0] + nums.at(-1)
  realTotal+= Number(sum);
  console.log(sum)
}

console.log(realTotal)
*/

/*
import fs from "node:fs";

const numbers = {
  three: 3,
  seven: 7,
  eight: 8,
  four: 4,
  five: 5,
  zero: 0,
  nine: 9,
  one: 1,
  two: 2,
  six: 6,
} as any;

const findNumericString = (str: string, reverse = false): string | null => {
  const subStrings: Array<string> = ["", "", ""];

  if (reverse) {
    for (let i = str.length - 1;i >= 0;i--) {
      subStrings[0] = str.substring(i + 3, i);
      subStrings[1] = str.substring(i + 4, i);
      subStrings[2] = str.substring(i + 5, i);

      for (const subString of subStrings){
        if (Object.keys(numbers).find(key => key === subString)) 
          return numbers[subString];
      }
      if (/\d/.test(str[i])) return str[i];
    }
  } else {
    for (let i = 0;i < str.length;i++) {
      subStrings[0] = str.substring(i, i + 3);
      subStrings[1] = str.substring(i, i + 4);
      subStrings[2] = str.substring(i, i + 5);

      for (const subString of subStrings){
        if (Object.keys(numbers).find(key => key === subString)) 
          return numbers[subString];
      }
      if (/\d/.test(str[i])) return str[i];
    }
  }

  return null;
}

const getTotal = (rawList: string): number => {
  const args = rawList.split("\n").map(e => e.trim()).filter(e => e !== "");
  const allDigits: Array<number> = [];

  for (const str of args) {
    let num: string = "";

    let foundForward = findNumericString(str);

    num += foundForward?.toString();

    let foundBackwards = findNumericString(str, true);

    num += foundBackwards?.toString();

    if (num.length === 1) num = num+num;

    allDigits.push(parseInt(num));
  }

  return allDigits.reduce((n: number, acc: number) => acc + n, 0);
}

const main = () => {
  const data = fs.readFileSync("./input.txt", "utf-8");

  const res = getTotal(data);
  console.log(res)
  return res;
}

main();

export default main;
*/
