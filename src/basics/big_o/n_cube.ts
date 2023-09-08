function sum_char_codes_cubed(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++j) {
      for(let k = 0; k < n.length; ++k) {
              sum+= n.charCodeAt(j);
      }
    }
  }
  return sum
}

console.log(sum_char_codes_cubed("welcome from 0(N^3) as you can see this loop is itering n.n.n times "))
