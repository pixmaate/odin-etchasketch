const boxHolder = document.querySelector('.contentHolder');
const resetButton = document.querySelector('.resetBtn');
const radioSelector = document.querySelectorAll('input');
const remakeButton = document.querySelector('.recreateBtn');


function getRadioEl() {
    let selectedValue = 12;
    radioSelector.forEach(el => {
        if (el.checked) {
            selectedValue = el.value
        }
    })
    return selectedValue;
}

remakeButton.addEventListener('click', () => {

});


resetButton.addEventListener('click', () =>{
    resetGrid();
});

function makeBoxes(numberOfBoxes) {
    for (let i=1; i<= (numberOfBoxes**2); i++) {
        const divBox = document.createElement('div');
        let sizeValue = 480/numberOfBoxes;
        sizeValue = sizeValue + 'px'
        divBox.classList.toggle('oneBox')
        divBox.style.cssText = `width: ${sizeValue}; height: ${sizeValue}; border-style: solid; box-sizing: border-box; border-width: 1px`;
        boxHolder.appendChild(divBox);
    };
    
};

boxHolder.addEventListener('mouseover', (event) => {
    const isDivBox = event.target.lastChild === null;

    if (!isDivBox) {
        return;
    }
    event.target.style.backgroundColor = 'black';
});

function resetGrid() {
    const everyBox = document.querySelectorAll('.oneBox');
    everyBox.forEach(el => {
        el.style.backgroundColor = 'white';
    });
}


makeBoxes(12);