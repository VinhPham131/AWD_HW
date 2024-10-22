
import { set } from "./demo_set.mjs";

getFromSet = function(set, name) {
    for (let item of set) {
        if (item.name === name) {
            return item;
        }
    }
    return null; 
}
var calculate = getFromSet(set, "calculate");
var notiEven = getFromSet(set, "notiEven");
var notiOdd = getFromSet(set, "notiOdd");

var calculateValue = new calculate(2, 3);

console.log(`Sum: ${calculateValue.sum()}`);
console.log(`Sub: ${calculateValue.sub()}`);
console.log(`Mul: ${calculateValue.mul()}`);
console.log(`Div: ${calculateValue.div()}`);

if (calculateValue.sum() % 2 === 0) {
    console.log(`Sum ${notiEven()}`);
} else {
    console.log(`Sum ${notiOdd()}`);
}

if (calculateValue.sub() % 2 === 0) {
    console.log(`Sub ${notiEven()}`);
} else {
    console.log(`Sub ${notiOdd()}`);
}

if (calculateValue.mul() % 2 === 0) {
    console.log(`Mul ${notiEven()}`);
} else {
    console.log(`Mul ${notiOdd()}`);
}

if (calculateValue.div() % 2 === 0) {
    console.log(`Div ${notiEven()}`);
} else {
    console.log(`Div ${notiOdd()}`);
}
