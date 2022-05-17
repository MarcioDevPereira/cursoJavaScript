let nums = [0,1,2,3,4,5,6,7,8,9];

console.log(nums.slice(6,7)); //6
console.log(nums.slice(6,9)); //6,7,8
//determina o elemento e seu final -1

console.log(nums.slice(2));
//se não determinar o fim ele pegará todos os posteriores

console.log(nums.slice(-2));
//conta ao contrário (decrementando o array)

console.log(nums.slice(3,-2));//3,4,5,6,7
