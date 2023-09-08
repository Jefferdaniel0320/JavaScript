// 3 6 9 12 ... fizz
// 5 10 15 20 ... buzz
// 15 30 45 ... FIZZBUZZ!
let num = 100;

for(let i=0; i <= num; i++) {

    if(i%5 === 0 && i%3 === 0 && i!= 0) {
        console.log(`${i} FIZZBUZZ!`);
    }
    else if(i%3 === 0 && i!= 0) {
        console.log(`${i} fizz`);
    }
    else if(i%5 === 0 && i!= 0) {
        console.log(`${i} buzz`);
    }
}
