for(let i=0; i < 20; i++) {
    if(i === 5) {
        console.log(`The Number is ${i}, CINCO`);
        continue;
    }
    if(i === 7) {
        console.log(`The Number is ${i}, SIETE`);
        break;
    }
    console.log(`The Number is ${i}`);
}