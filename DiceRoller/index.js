function rollDice(){
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        values.push(Math.floor(Math.random() * 6) + 1);
        images.push(`<img src="images/${values[i]}.png">`);
    }

    diceResult.innerHTML ='dice: ' + values.join(", ");
    diceImages.innerHTML = images.join(" ");
}