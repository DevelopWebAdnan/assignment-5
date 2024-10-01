console.log('donate js file added')

document.getElementById('button-donate-now')
    .addEventListener('click', function(){
        // console.log('donate button clicked');

        const donationAmount = document.getElementById('input-donation-amount').value;
        console.log(donationAmount);
})