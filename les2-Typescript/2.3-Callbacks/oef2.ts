let names: string[] = ['Kelly', 'Nabil', 'Sven', 'Silke', 'Andie', 'Muhammed'];
console.log(names.sort((a, b) => (a.length > b.length ? 1 : -1)));
console.log(names.sort((a, b) => (a.length < b.length ? 1 : -1)));

let numbers: number[] = [49, 1, 99, 2, 4]
console.log(numbers.sort((a,b) => a - b));
console.log(numbers.sort((a,b) => (a > b ? 1 : -1)))