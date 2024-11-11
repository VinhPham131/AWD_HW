const { Rectangle, saveRectangleData } = require('../models/rectangle');

exports.showForm = (req, res) => {
    res.render('index', { perimeter: null, area: null });
}

exports.calculateRectangle = async (req, res) => {
    const { height, width } = req.body;
    console.log('Received height:', height);
    console.log('Received width:', width);

    const rec = new Rectangle(Number(height), Number(width));
    const perimeter = rec.getPerimeter();
    const area = rec.getArea();   

    console.log('Calculated perimeter:', perimeter);
    console.log('Calculated area:', area);

    try {
        await saveRectangleData(height, width, perimeter, area);
        res.render('index', { perimeter, area });
    } catch (error) {
        console.error("Error saving rectangle data:", error);
        res.render('index', { perimeter: null, area: null });
    }
}