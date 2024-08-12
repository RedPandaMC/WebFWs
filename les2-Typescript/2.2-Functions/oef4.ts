function productCalc(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc * val, 1);
}
console.log(productCalc(1,5,2,6,5,7))