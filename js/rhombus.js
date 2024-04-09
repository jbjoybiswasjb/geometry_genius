function calculateAreaOfRhombus() {
    const d1InputField = document.getElementById('rhombus_d1');
    const lengthOfDiagonal1 = d1InputField.value;

    const d2InputField = document.getElementById('rhombus_d2');
    const lengthOfDiagonal2 = d2InputField.value;

    const areaOfRhombus = 0.5 * lengthOfDiagonal1 * lengthOfDiagonal2;
    const rhombusAreaElement = document.getElementById('rhombus_area_element');
    rhombusAreaElement.innerText = areaOfRhombus;

    d1InputField.value = '';
    d2InputField.value = '';
}