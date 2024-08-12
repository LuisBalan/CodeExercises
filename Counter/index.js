const sumButton = document.createElement('button');
const substractButton = document.createElement('button');
const plus = document.createTextNode('+');
const minus = document.createTextNode('-');
sumButton.appendChild(plus);
substractButton.appendChild(minus);
document.body.appendChild(sumButton);
document.body.appendChild(substractButton);

let amount =  0;
const numberDisplay = document.createElement('span');
const numberNode = document.createTextNode(amount);
numberDisplay.appendChild(numberNode);
document.body.appendChild(numberDisplay);

sumButton.addEventListener("click", (event) => {
    amount++
    console.log('sum amount: ', amount)
    numberDisplay.innerText = amount;
});

substractButton.addEventListener("click", (event) => {
    console.log(event);
    if (amount > 0) {
        amount--;
    }
    numberDisplay.innerText = amount;
})
