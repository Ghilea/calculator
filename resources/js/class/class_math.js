import Check from "./class_check.js";

export default class Math extends Check {
    constructor() {
        super();
    }

    convMath(operation) {

        let split = operation.split(/(\+)|(\*)|(\/)|(\-)/g).filter(Boolean);

        console.log(split);

        let start = 0;
        let total;

        $.each(split, index => {

            if (start === 0) {
                if (index % 3) {

                    let doMath = split.slice(0, 3);

                    console.log('first: ' + doMath);

                    start = 3;

                    switch (doMath[1]) {
                        case '+':
                            total = this.sum(parseFloat(doMath[0]), parseFloat(doMath[2]))
                            console.log('first :' + total);
                            break;
                        case '-':
                            total = this.sub(parseFloat(doMath[0]), parseFloat(doMath[2]))
                            console.log('first :' + total);
                            break;
                        case '*':
                            total = this.mul(parseFloat(doMath[0]), parseFloat(doMath[2]))
                            console.log('first :' + total);
                            break;
                        case '/':
                            total = this.div(parseFloat(doMath[0]), parseFloat(doMath[2]))
                            console.log('first :' + total);
                            break;
                    }
                }
            } else {
                if (index % 2) {

                    let doMath = split.slice(index, index + 2);

                    console.log(total + ' ' + doMath[1]);

                    switch (doMath[0]) {
                        case '+':
                            total = this.sum(parseInt(total), parseInt(doMath[1]))
                            console.log('else :' + total);
                            break;
                        case '-':
                            total = this.sub(parseInt(total), parseInt(doMath[1]))
                            console.log('else :' + total);
                            break;
                        case '*':
                            total = this.mul(parseInt(total), parseInt(doMath[1]))
                            console.log('else :' + total);
                            break;
                        case '/':
                            total = this.div(parseInt(total), parseInt(doMath[1]))
                            console.log('else :' + total);
                            break;
                    }
                }
            }
        });

        let result;

        if (Number.isInteger(total)) {
            result = total;
        }else{
            result = total.toFixed(2);
        }

        return result;

    };

    sum(a, b) {
        let total;

        total = a + b;

        return total;
    };

    sub(a, b) {
        let total = 0;

        total = a - b;

        return total;
    };

    div(a, b) {
        let total = 0;

        total = a / b;

        return total;
    };

    mul(a, b) {
        let total = 0;

        total = a * b;

        return total;

    }

}