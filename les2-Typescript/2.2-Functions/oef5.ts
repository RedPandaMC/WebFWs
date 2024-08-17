function gestructureerdeMededeling(jaar:number=0,klantNr:number=0,bestelNr:number=0,sep:string="/",dec:string="+") {
    let numbers : string[] = Array(3);
    numbers[0] = jaar.toString().slice(-3).padStart(3, '0');
    numbers[1] = klantNr.toString().slice(-4).padStart(4,'0')
    numbers[2] = bestelNr.toString().slice(-3).padStart(3,'0')

    let c : string = (parseInt(numbers.join('')) % 97).toString().padStart(2,'0')

    return dec.repeat(3) + (numbers.join(sep) + c) + dec.repeat(3)
}

console.log(gestructureerdeMededeling(2017, 123, 1))
console.log(gestructureerdeMededeling(17, 123, 1)) 
console.log(gestructureerdeMededeling(2017))

/*
exercise result
+++017/0123/00136+++
+++017/0123/00136+++
+++017/0000/00031+++ */

/* 
my output
+++017/0123/00136+++
+++017/0123/00136+++
+++017/0000/00031+++ */