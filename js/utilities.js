// console.log('utilities loaded');

// function getInputFieldValueById(){
    // console.log('get value by id');
    // const donationAmount = document.getElementById('input-donation-amount').value;
    // return donationAmount;
// }

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    // return inputValue;
    const inputNumber = parseFloat(inputValue);
    // console.log(id, inputValue, inputNumber);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    // console.log(id, textValue, textNumber);
    return textNumber;
}