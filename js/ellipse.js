function areaOfEllipse () {
    const a = getValueFromInput('ellipse_a');
    const b = getValueFromInput('ellipse_b');

    const areaOfEllipse = 3.17 * a * b;
    // console.log(areaOfEllipse);

    showAreaInAreaField('areaFieldOfEllipse', areaOfEllipse);
}