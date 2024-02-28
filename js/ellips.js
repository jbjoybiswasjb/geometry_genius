function areaOfEllips () {
    const a = getValueFromInput('ellipse_a');
    const b = getValueFromInput('ellipse_b');

    const areaOfEllips = 3.17 * a * b;
    // console.log(areaOfEllips);

    showAreaInAreaField('areaFieldOfEllips', areaOfEllips);
}