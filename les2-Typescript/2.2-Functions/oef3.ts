function anonymize(text:string,sep:string="-") {
    return text.split('').join(sep).split('')
}
console.log(anonymize("hello"))