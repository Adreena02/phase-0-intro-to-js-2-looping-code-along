// Code your solutions in this file
function writeCards(stringName, eventName) {
    let thankYouCard = [];
    for(let i = 0; i < stringName.length; i++){
        thankYouCard.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouCard;
}

writeCards(["Evie", "Nicole", "Mary"], "birthday");

function countDown(number){
    while(number>=0) {
        console.log(number);
        number--;
    }
}