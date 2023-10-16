const boxHolder = document.querySelector('.contentHolder');
const resetButton = document.querySelector('.resetBtn');
const radioSelector = document.querySelectorAll('input');
const remakeButton = document.querySelector('.recreateBtn');
const blackButton = document.querySelector('#blackBtn');
const colorButton = document.querySelector('#rgbBtn');

let coloringStyle = 1;

blackButton.addEventListener('click', () => {
    coloringStyle = 1;
});

colorButton.addEventListener('click', () => {
    coloringStyle = 2;
});

function getRadioEl() {
    let selectedValue = 0;
    radioSelector.forEach(el => {
        if (el.checked) {
            selectedValue = el.value
        }
    })
    return selectedValue;
}

remakeButton.addEventListener('click', () => {
    let child = boxHolder.lastElementChild;
    while (child) {
        boxHolder.removeChild(child);
        child = boxHolder.lastElementChild;
    }
    makeBoxes(getRadioEl());
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
    if (coloringStyle === 1) {
        event.target.style.backgroundColor = 'black';
    }
    else if (coloringStyle === 2) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.backgroundColor =  "#" + randomColor;
    }
});

function resetGrid() {
    const everyBox = document.querySelectorAll('.oneBox');
    everyBox.forEach(el => {
        el.style.backgroundColor = 'white';
    });
}


makeBoxes(12);