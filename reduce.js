  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
  console.log(
    'accumulator:', acc,
    'current value:', curr,
    'total:', acc + curr
  );
  return acc + curr;
  // 0 added to explicitly specify to start at 0, initial value can be anything, best to always specify
}, 0)
console.log(sum);

// Below is the simplified version of the above code

// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

// remove the 0 specified to see it break, correct answer is 16
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); 
console.log(totalExperience);
// Grouping by a property, and totaling it too
