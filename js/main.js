const inputs = document.querySelectorAll('input');  // all of the inputs from html 
const p = document.querySelector('p');  // the first paragraph from html 

//console.log(inputs)
//inputs[0].value = 100;

const subTotal = inputs[0];  // the first input from html 
const tipPercentage = inputs[1];  // the secon input from html 
const total = inputs[2];  // the third input from html 
const partySize = inputs[3];  // the fourth input from html 

subTotal.addEventListener('input', function() {  // listen for the user to input something 
    calculate(); 
});

tipPercentage.addEventListener('input', function() {  // listen for the user to input something 
    calculate(); 
});

partySize.addEventListener('input', function() {
    p.innerHTML = total.value / (Number(partySize.value));
});

function calculate() {
    let currentTotal = Number(subTotal.value);  // convert the input value to a number 
    let tip = currentTotal * (Number(tipPercentage.value) / 100);  // calculate the tip 
    total.value = currentTotal + tip;  // add the tip to the value 
} 


/*function calculateTotal() {
    let currentTotal = Number(subTotal.value);  // convert the input value to a number 
    let tip = currentTotal * (Number(tipPercentage.value) / 100);  // calculate the tip 
    total.value = currentTotal + tip;  // add the tip to the value 
}

function showResult() {
    const p = document.createElement('p'); 
    document.querySelector('.tip-container').prepend(p); 
    p.innerHTML = 'each person pays:  ' + total.value / (Number(partySize.value)); 
}*/

//tipPercentage.value = 20;
//total.value = 120;
//partySize.value = 2;

/*inputs[5].addEventListener('input', function() {
    document.querySelector('.tipContainer').style.backgroundColor = inputs[5].value; 
})*/