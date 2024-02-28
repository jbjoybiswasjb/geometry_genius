// //Simple Function for get value from input field.
// function parallelogramBase() {
//     const inputFieldOfParallelogramBase = document.getElementById('parallelogram_b');
//     const textInputValueOfParallelogramBase = inputFieldOfParallelogramBase.value;
//     const numberInputValueOfParallelogramBase = parseFloat(textInputValueOfParallelogramBase);
//     console.log(numberInputValueOfParallelogramBase);
// }


// Extract common code into a function.
function parallelogramAreaCalculation() {
    const parallelogramBase = getInputValueById('parallelogram_b');
    // console.log(parallelogramBase);

    const parallelogramHeight = getInputValueById('parallelogram_h');
    // console.log(parallelogramHeight);

    const AreaOfParallelogram = parallelogramBase * parallelogramHeight;
    
    // console.log(AreaOfParallelogram);

    setInnerTextById('paralelogram_area_element', area);
}


function getInputValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputStringValue = inputField.value;
    const inputFloatValue = parseFloat(inputStringValue);
    // console.log(inputFloatValue);
    return inputFloatValue;
}


function setInnerTextById(elementId, area) {
    const textFieldOfParallelogramArea = document.getElementById(elementId);
    textFieldOfParallelogramArea.innerText = area;
}