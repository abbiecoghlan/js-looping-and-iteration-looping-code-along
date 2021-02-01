// Code your solutions in this file
function writeCards(namesArray, eventName){ 
    let newarray = []
    for (let i = 0; i < namesArray.length; i++) {
        newarray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`)
    }
        
    return newarray;
}

function countDown(number){
    while (number >= 0) {
        console.log(number--)
    }
}

