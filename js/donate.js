// console.log('donate js file added')

// Card-1
document.getElementById('button-donate-now')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donationAmount = getInputFieldValueById('input-donation-amount');
        console.log('value by Donate Now button click', donationAmount);

        const balance = getTextFieldValueById('account-balance');
        console.log(' balance here',  balance);

        const newBalance = balance - donationAmount;
        // console.log('new balance:', newBalance);

        document.getElementById('account-balance').innerText = newBalance;

        const currentDonation = getTextFieldValueById('current-donation-amount');
        console.log('current donation here', currentDonation);

        const newCurrentDonation = currentDonation + donationAmount;
        // console.log('new current donation:', newCurrentDonation);

        document.getElementById('current-donation-amount').innerText = newCurrentDonation;
});

// Card-2
document.getElementById('button-donate-now-2')
    .addEventListener('click', function(event){
    event.preventDefault();

    const donationAmount2 = getInputFieldValueById('input-donation-amount-2');
    console.log(' value by Donate Now 2 button click', donationAmount2);

    const balance = getTextFieldValueById('account-balance');
    console.log('2nd time balance here', balance);

    const newBalance2 = balance - donationAmount2;
    // console.log('new balance2:', newBalance2);

    document.getElementById('account-balance').innerText = newBalance2;

    const currentDonation2 = getTextFieldValueById('current-donation-amount-2');
    console.log('current donation2 here', currentDonation2);

    const newCurrentDonation2 = currentDonation2 + donationAmount2;
    // console.log('new current donation2', newCurrentDonation2);

    document.getElementById('current-donation-amount-2').innerText = newCurrentDonation2;

});

// Card-3
document.getElementById('button-donate-now-3')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donationAmount3 = getInputFieldValueById('input-donation-amount-3');
        console.log('value by Donate now button3 click', donationAmount3);

        const balance = getTextFieldValueById('account-balance');
        console.log('3rd time balance here,', balance);

        const newBalance3 = balance - donationAmount3;
        // console.log('new balance3,', newBalance3);

        document.getElementById('account-balance').innerText = newBalance3;

        const currentDonation3 = getTextFieldValueById('current-donation-amount-3');
        console.log('current donation amount3 here,', currentDonation3);

        const newCurrentDonation3 = currentDonation3 + donationAmount3;
        // console.log('new current donation3:', newCurrentDonation3);

        document.getElementById('current-donation-amount-3').innerText = newCurrentDonation3;

});