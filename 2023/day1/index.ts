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

let realTotal = 0;

const stringArr = {"zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
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
  realTotal+= +sum;
  console.log(sum)
}

console.log(realTotal)
