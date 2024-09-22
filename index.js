for (let age = 30; age < 40; age++) {
    console.log(`I'M ${age} years old, Happy birthday to me!`);
}
 
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.legnth; i++) (
        messages.push(`Thank you, ${names[i]}, for the ${event} gift!`)
    )
    return messages;
}

function countDown(integer) {
    let number = integer;
    while (number >= 0) {
        console.log(number);
        --number;
    }
}