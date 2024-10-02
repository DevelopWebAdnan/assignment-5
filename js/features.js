// console.log('features file added');

document.getElementById('show-donation-cards')
.addEventListener('click', function(){
    // console.log('Donation button clicked');
    showSectionById('donation-cards');
});

document.getElementById('show-history-section')
    .addEventListener('click', function(){
        // console.log('History button clicked');
        showSectionById('history-section');
    });