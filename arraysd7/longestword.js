let arr = ["cat", "elephant", "dog"];
let longest = arr.reduce((a, b) => a.length > b.length ? a : b);
console.log(longest);