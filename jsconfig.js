const boxHolder = document.querySelector('.contentHolder');

function makeBoxes(numberOfBoxes) {
    const divBox = document.createElement('div');
    let sizeValue = 480/numberOfBoxes;
    sizeValue = sizeValue + 'px'
    divBox.style.cssText = `width: ${sizeValue}; height: ${sizeValue}; border-style: solid; box-sizing: border-box; border-width: 2px`;
    boxHolder.appendChild(divBox);
}

makeBoxes(24);