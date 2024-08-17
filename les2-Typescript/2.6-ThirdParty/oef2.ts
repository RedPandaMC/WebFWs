// Throttle functie die voorkomt dat een functie te vaak wordt aangeroepen
function throttle(func: Function, limit: number) {
    let lastFunc: number;
    let lastRan: number;
    return function(...args: any[]) {
        const context = this;
        if (!lastRan) {
            lastRan = Date.now();
            return func.apply(context, args); // Return the result of the function call
        } else {
            clearTimeout(lastFunc);
            return new Promise((resolve) => {
                lastFunc = setTimeout(function() {
                    if ((Date.now() - lastRan) >= limit) {
                        lastRan = Date.now();
                        resolve(func.apply(context, args)); // Resolve the result of the function call
                    }
                }, limit - (Date.now() - lastRan));
            });
        }
    }
}


// Functie om willekeurige getallen te genereren
function generateRandomNumber(length: number): number {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gestructureerdeMededeling(jaar:number=0, klantNr:number=0, bestelNr:number=0, sep:string="/", dec:string="+") {
    if (jaar === 0) jaar = generateRandomNumber(3);
    if (klantNr === 0) klantNr = generateRandomNumber(4);
    if (bestelNr === 0) bestelNr = generateRandomNumber(3);

    let numbers : string[] = Array(3);
    numbers[0] = jaar.toString().slice(-3).padStart(3, '0');
    numbers[1] = klantNr.toString().slice(-4).padStart(4,'0');
    numbers[2] = bestelNr.toString().slice(-3).padStart(3,'0');

    let c : string = (parseInt(numbers.join('')) % 97).toString().padStart(2,'0');

    return dec.repeat(3) + (numbers.join(sep) + c) + dec.repeat(3);
}

// Gebruik van de throttle functie om te voorkomen dat de functie te vaak wordt aangeroepen
const throttledGestructureerdeMededeling = throttle(gestructureerdeMededeling, 10);

async function runThrottledTests() {
    console.log(await throttledGestructureerdeMededeling(2017, 123, 1));
    console.log(await throttledGestructureerdeMededeling(17, 123, 1));
    console.log(await throttledGestructureerdeMededeling(2017));
    console.log(await throttledGestructureerdeMededeling()); // Willekeurige waarden
}

runThrottledTests();



