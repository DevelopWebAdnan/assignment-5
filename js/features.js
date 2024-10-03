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


// Toggle Active Status
const ulTag = document.getElementById('features-list');

const buttonLists = ulTag.getElementsByTagName('button');


let lastClicked = null;

for(let singleButtonList of buttonLists){
    singleButtonList.addEventListener('click', function(){

        if(lastClicked == null){
            singleButtonList.style.backgroundColor = 'rgb(180, 244, 97)';
            lastClicked = singleButtonList;
        }
        else{
            lastClicked.style.backgroundColor = 'transparent';

            singleButtonList.style.backgroundColor = 'rgb(180, 244, 97)';
            lastClicked = singleButtonList;
        }

    });
}