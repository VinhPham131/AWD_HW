import { map } from "./demo_map.mjs";

var calculate =  map.get("calculate");
var notiEven = map.get("notiEven");
var notiOdd = map.get("notiOdd");

var calculateValue = new calculate(2, 3);

console.log(`Sum: ${calculateValue.sum()}`);  
console.log(`Sub: ${calculateValue.sub()}`);
console.log(`Mul: ${calculateValue.mul()}`);
console.log(`Div: ${calculateValue.div()}`);

// Check if the sum is even or odd
if(calculateValue.sum() % 2 == 0){
    console.log(`Sum ${notiEven()}`);
}else{
    console.log(`Sum ${notiOdd()}`);
}

// Check if the sub is even or odd
if(calculateValue.sub() % 2 == 0){
    console.log(`Sub ${notiEven()}`);
}else{
    console.log(`Sub ${notiOdd()}`);
}

// Check if the mul is even or odd
if(calculateValue.mul() % 2 == 0){
    console.log(`Mul ${notiEven()}`);
}else{
    console.log(`Mul ${notiOdd()}`);
}

// Check if the div is even or odd
if(calculateValue.div() % 2 == 0){
    console.log(`Div ${notiEven()}`);
}else{
    console.log(`Div ${notiOdd()}`);
}