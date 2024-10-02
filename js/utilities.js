// console.log('utilities loaded');

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


function showSectionById(id){
    // console.log(id);
    document.getElementById('donation-cards').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}