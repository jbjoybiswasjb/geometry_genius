function areaOfPentagon() {
    const valueOfP =  getValueFromInput('pentagon_p');
    
    const valueOfB = getValueFromInput('pentagon_b');

    const areaOfPentagon = 0.5 * valueOfP * valueOfB;

    showAreaInAreaField('pentagon_area_field', areaOfPentagon);
}

function getValueFromInput (inputId) {
    const inputFieldId = document.getElementById(inputId);
    const inputText = inputFieldId.value;
    const inputNumber = parseFloat(inputText);
    inputFieldId.value = '';
    return inputNumber;

}

function showAreaInAreaField(areaFieldId, area) {
    const pentagonAreaField = document.getElementById(areaFieldId);
    pentagonAreaField.innerText = area;
}