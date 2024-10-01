console.log('donate js file added')

document.getElementById('button-donate-now')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log('donate button clicked');

        // const donationAmount = document.getElementById('input-donation-amount').value;
        // console.log(donationAmount);

        // const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);

        // const donationAmountNumber = parseFloat(donationAmount);
        // const balanceNumber = parseFloat(balance);
        // const newBalance = balanceNumber - donationAmountNumber;
        // console.log(newBalance);
        
        // document.getElementById('account-balance').innerText = newBalance;

        // const currentDonation = document.getElementById('current-donation-amount').innerText;
        // console.log(currentDonation);

        // const currentDonationNumber = parseFloat(currentDonation);
        // const newCurrentDonation = currentDonationNumber + donationAmountNumber;
        // console.log(newCurrentDonation);

        // document.getElementById('current-donation-amount').innerText = newCurrentDonation;

        getInputFieldValueById();
})