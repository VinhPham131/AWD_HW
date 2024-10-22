
const periRec = (width, height) => {
    return (width + height) * 2;
}

const areaRec = (width, height) => {
    return width * height;
}



const calculate = () => {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    const peri = periRec(width, height);
    const area = areaRec(width, height);

    document.getElementById('chuVi').innerHTML = 'Chu vi: ' + peri;
    document.getElementById('dienTich').innerHTML = 'Dien tich: ' + area;
}

document.getElementById('submit').addEventListener('click', calculate);