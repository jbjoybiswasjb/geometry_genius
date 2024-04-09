/**
 * Objective: get base, height of triangle. Calculate the area by using the provided formula. and then display the area.
 * 
 * Step -1: Get base value
 * Step -2: Added an id in the base input field
 * Step -3: Use getElementById to access the input field
 * Step -4: Get value from the input field (Value is string now)
 * Step -5: Convert the value to a number. Use ParseFloat
 * 
 */

function calculateTriangleArea() {
    // Get triangle base value.
    const triangleBaseInput = document.getElementById('triangle_b');
    const triangleBaseInputText = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseInputText);

    // Get triangle height value.
    const triangleHeightInput = document.getElementById('triangle_h');
    const triangleHeightInputText = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightInputText);

    // Triangle Area.
    const TriangleArea = 0.5 * triangleBase * triangleHeight;
    
    // Set Value in HTML Page.
    const spanForTriangleArea = document.getElementById('triangle_area');
    spanForTriangleArea.innerText = TriangleArea;

    triangleBaseInput.value = '';
    triangleHeightInput.value = '';
}