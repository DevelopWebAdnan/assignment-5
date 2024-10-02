// console.log('features file added');

document.getElementById('show-donation-cards')
.addEventListener('click', function(){
    // console.log('Donation button clicked');
    showSectionById('donation-cards');
    // this.style.backgroundColor = 'rgb(180, 244, 97)';
});

document.getElementById('show-history-section')
    .addEventListener('click', function(){
        // console.log('History button clicked');
        showSectionById('history-section');
        // this.style.backgroundColor = 'rgb(180, 244, 97)';
    });