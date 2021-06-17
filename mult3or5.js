function solution(number){
  let sum = 0;
  for (let i = 0; i < number; i++)
    if (i % 3 === 0 || i % 5 === 0){
    sum += i; //same as sum = i + sum
  }
  return sum;
}

//same as

solution = n => {
  let s = 0;
  for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
  return s;
}
