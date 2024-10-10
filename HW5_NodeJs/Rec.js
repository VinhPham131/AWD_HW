const periRec = (width, height) => {
    return (width + height) * 2;
}

const areaRec = (width, height) => {
    return width * height;
}

var width = 10;
var height = 20;

console.log(`The perimeter of the rectangle is ${periRec(width, height)}`);
console.log(`The area of the rectangle is ${areaRec(width, height)}`);