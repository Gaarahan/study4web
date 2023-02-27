const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Size(30):", function(size) {

  rl.question("Input\n", function(input) {
    const nums = input.split(' ').map(Number);
    const res = nums.reduce((num, cur) => cur + num) + nums.length - 1
    console.log(`Sum: ${res}`)
    console.log(`Res: ${size - res}`)
    rl.close()
  });

})

