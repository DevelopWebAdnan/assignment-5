// console.log('donate js file added')

// Card-1
document.getElementById('button-donate-now')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donationAmount = getInputFieldValueById('input-donation-amount');
        console.log('value by Donate Now button click', donationAmount);

        // Input validation
        if(isNaN(donationAmount)){
            alert('Please provide a number');
            return;
        }

        const balance = getTextFieldValueById('account-balance');
        console.log(' balance here',  balance);

        if(donationAmount > balance){
            alert('Sorry, you do not have enough money to donate');
            return;
        }

        const newBalance = balance - donationAmount;
        // console.log('new balance:', newBalance);

        document.getElementById('account-balance').innerText = newBalance;

        const currentDonation = getTextFieldValueById('current-donation-amount');
        console.log('current donation here', currentDonation);
        
        const newCurrentDonation = currentDonation + donationAmount;
        // console.log('new current donation:', newCurrentDonation);

        const donationTitle = document.getElementById('donated-for').innerText;
        // console.log(donationTitle);

        const div = document.createElement('div');
        div.classList.add('bg-yellow-100');
        div.innerHTML = `
        <h3 class="text-xl font-bold">${newCurrentDonation} Tk. is donated for ${donationTitle}</h3>
        <p class="font-light">Date: ${Date()};</p>
        `;

        document.getElementById('history-container').appendChild(div);

        // const p = document.createElement('p');
        // p.innerHTML =`Date: ${Date()}`;
        // console.log(p);

        document.getElementById('current-donation-amount').innerText = newCurrentDonation;

        // document.getElementById('history-container').appendChild(p);
});

// Card-2
document.getElementById('button-donate-now-2')
    .addEventListener('click', function(event){
    event.preventDefault();

    const donationAmount2 = getInputFieldValueById('input-donation-amount-2');
    console.log(' value by Donate Now 2 button click', donationAmount2);

    // Input validation
    if(isNaN(donationAmount2)){
        alert('Please provide a valid number');
        return;
    }

    const balance = getTextFieldValueById('account-balance');
    console.log('2nd time balance here', balance);

    if(donationAmount2 > balance){
        alert('Sorry, you do not enough money to donate');
        return;
    }

    const newBalance2 = balance - donationAmount2;
    // console.log('new balance2:', newBalance2);

    document.getElementById('account-balance').innerText = newBalance2;

    const currentDonation2 = getTextFieldValueById('current-donation-amount-2');
    console.log('current donation2 here', currentDonation2);

    const newCurrentDonation2 = currentDonation2 + donationAmount2;
    // console.log('new current donation2', newCurrentDonation2);

    const donationTitle2 = document.getElementById('donated-for-2').innerText;
    // console.log(donationTitle2);

    const div2 = document.createElement('div');
    div2.classList.add('bg-red-100');
    div2.innerHTML = `
    <h3 class="text-xl font-bold">${newCurrentDonation2} Tk. has been donated for ${donationTitle2}</h3>
    <p class="font-light">Date: ${Date()};</p>
    `;

    document.getElementById('history-container').appendChild(div2);

    document.getElementById('current-donation-amount-2').innerText = newCurrentDonation2;

});

// Card-3
document.getElementById('button-donate-now-3')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donationAmount3 = getInputFieldValueById('input-donation-amount-3');
        console.log('value by Donate now button3 click', donationAmount3);

        // Input validation
        if(isNaN(donationAmount3)){
            alert('Please provide a number');
            return;
        }

        const balance = getTextFieldValueById('account-balance');
        console.log('3rd time balance here,', balance);

        if(donationAmount3 > balance){
            alert('Sorry! You do not have enough money to donate');
            return;
        }

        const newBalance3 = balance - donationAmount3;
        // console.log('new balance3,', newBalance3);

        document.getElementById('account-balance').innerText = newBalance3;

        const currentDonation3 = getTextFieldValueById('current-donation-amount-3');
        console.log('current donation amount3 here,', currentDonation3);

        const newCurrentDonation3 = currentDonation3 + donationAmount3;
        // console.log('new current donation3:', newCurrentDonation3);

        document.getElementById('current-donation-amount-3').innerText = newCurrentDonation3;

        const donationTitle3 = document.getElementById('donated-for-3').innerText;
        // console.log(donationTitle3);

        const div3 = document.createElement('div');
        div3.classList.add('bg-green-100');
        div3.innerHTML = `
        <h3 class="text-xl font-bold">${newCurrentDonation3} Tk. has been donated for ${donationTitle3}</h3>
        <p class='font-light'>Date: ${Date()}</p>
        `;

        document.getElementById('history-container').appendChild(div3);

});