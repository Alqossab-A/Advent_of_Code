import input from "./input.txt"

const list  = input.split('\n').filter(e => e !== "")

let total = 0;

for (const line of list) {
  let nums = line.split("").filter(e => /\d/.test(e))
  let sum = nums[0] + nums.at(-1)
  total+= +sum;
  console.log(nums)
}

console.log(total);
