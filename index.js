//FOR loop
function writeCards(obj, eventName) {
    const nameArray = [...obj];
    let newArray = [];
    for (let i = 0; i < nameArray.length; i++) {
        //Update new array with message
        newArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");


//WHILE Loop

function countDown(number) {
    let count = number;
    while (count >= 0) {
        console.log(count--);
    }
}


countDown(10);
