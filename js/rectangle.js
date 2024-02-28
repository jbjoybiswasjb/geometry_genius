function calculateRectangleArea() {
    // Rectangle Width.
    const inputFieldRectangleWidth = document.getElementById('rectangle_w');
    const rectangleWidthString = inputFieldRectangleWidth.value;
    const rectangleWidthNumber = parseFloat(rectangleWidthString);

    // Rectangle Height.
    const rectangleHeightField = document.getElementById('rectangle_l');
    const rectangleHeightValue = rectangleHeightField.value;
    const rectangleHeightNumber = parseFloat(rectangleHeightValue);

    // Rectangle Area.
    const rectangleArea = rectangleWidthNumber * rectangleHeightNumber;

    // Rectangle area show in html document.
    const rectangleAreaField = document.getElementById('rectangle_area');
    rectangleAreaField.innerText = rectangleArea;

    inputFieldRectangleWidth.value = '';
    rectangleHeightField.value = '';
}