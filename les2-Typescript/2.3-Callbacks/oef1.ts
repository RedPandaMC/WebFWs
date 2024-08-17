let names : string[] = [ 'Sven', 'Andie', 'Kelly', 'Nabil', 'Silke', 'Muhammed' ];

console.log(names.filter((val) => val.length == 4))
console.log(names.filter((val) => val[0] === "S"))
console.log(names.filter((_,ind) => ind % 2 == 0))
