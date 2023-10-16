const boxHolder = document.querySelector('.contentHolder');
const resetButton = document.querySelector('.resetBtn');
const radioSelector = document.querySelectorAll('input');
const remakeButton = document.querySelector('.recreateBtn');
const blackButton = document.querySelector('#blackBtn');
const colorButton = document.querySelector('#rgbBtn');
const shadingButton = document.querySelector('#shadingBtn');

let coloringStyle = 1;
blackButton.style.backgroundColor = 'teal';

function setButtonColors() {
    if (coloringStyle === 1) {
        blackButton.style.backgroundColor = 'teal';
        colorButton.style.backgroundColor = '';
        shadingButton.style.backgroundColor = '';
    }
    else if (coloringStyle === 2) {
        blackButton.style.backgroundColor = '';
        colorButton.style.backgroundColor = 'teal';
        shadingButton.style.backgroundColor = '';
    }
    else if (coloringStyle === 3) {
        blackButton.style.backgroundColor = 'teal';
        colorButton.style.backgroundColor = '';
        shadingButton.style.backgroundColor = 'teal';
    }
    else if (coloringStyle === 4) {
        blackButton.style.backgroundColor = '';
        colorButton.style.backgroundColor = 'teal';
        shadingButton.style.backgroundColor = 'teal';
    }
    
}

blackButton.addEventListener('click', () => {
    coloringStyle = 1;
    setButtonColors()

});

colorButton.addEventListener('click', () => {
    coloringStyle = 2;
    setButtonColors()
});

shadingButton.addEventListener('click', () => {
    if (coloringStyle === 1) {
        coloringStyle = 3;

    }
    else if (coloringStyle === 2) {
        coloringStyle = 4;
    }
    setButtonColors()
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
    let currentOpacity = 0.1;
    if (!isDivBox) {
        return;
    }
    if (coloringStyle === 1) {
       event.target.style.backgroundColor = 'black';
       event.target.style.opacity = 1;       
    }
    else if (coloringStyle === 2) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.backgroundColor =  "#" + randomColor;
    }
    else if (coloringStyle === 3) {
        if (event.target.style.opacity == '' || event.target.style.backgroundColor != 'black') {
            currentOpacity = currentOpacity;
        }
        else {
            let oldOpacity = event.target.style.opacity
            currentOpacity = parseFloat(oldOpacity) + 0.1;
        }
        event.target.style.backgroundColor = 'black';    
        event.target.style.opacity = currentOpacity;
    }
    else if (coloringStyle === 4) {
        if (event.target.style.opacity == '' || event.target.style.backgroundColor === 'black') {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.backgroundColor =  "#" + randomColor;
            event.target.style.opacity = currentOpacity;

        }
        else {
            let oldOpacity = event.target.style.opacity
            currentOpacity = parseFloat(oldOpacity) + 0.1;
            event.target.style.opacity = currentOpacity;
            
        }
    }
});

function resetGrid() {
    const everyBox = document.querySelectorAll('.oneBox');
    everyBox.forEach(el => {
        el.style.backgroundColor = 'white';
    });
}


makeBoxes(12);