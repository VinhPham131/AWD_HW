
var notiEven = function () {
    return "is even";
}

var notiOdd = function () {
    return "is odd";
}

var calculate = class {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    sum() {
        return this.num1 + this.num2;
    }
    sub() {
        return this.num1 - this.num2;
    }
    mul() {
        return this.num1 * this.num2;
    }
    div() {
        return this.num1 / this.num2;
    }
}

var set = new Set([notiEven, notiOdd, calculate]);

export { set };
