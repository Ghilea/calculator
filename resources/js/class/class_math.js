import Check from "./class_check.js";

export default class Math extends Check {
    constructor() {
        super();
        this.total;
        this.result;
    }

    convMath(operation) {
        let split = operation.split(/(\+)|(\*)|(\/)|(\-)/g).filter(Boolean);

        console.log(split);

        $.each(split, index => {

            if (index < 3) {
                if (index % 3) {

                    //if sub is in the beginning of our array
                    if (split[0] == '-') {
                        let subValue = split[0] + split[1];
                        split.splice(0,2);
                        split.unshift(subValue);
                    }

                    let doMath = split.slice(0, 3);
                    console.log('first: ' + doMath);

                    this.ev(doMath[1], parseFloat(doMath[0]), parseFloat(doMath[2]))
                    console.log('total :' + this.total);
                }
            } else {
                if (index % 2) {

                    let doMath = split.slice(index, index + 2);

                    this.ev(doMath[0], parseFloat(this.total), parseFloat(doMath[1]))
                    console.log('else :' + this.total);

                }
            }
        });

        if (Number.isInteger(this.total)) {
            this.result = this.total;
        } else {
            this.result = this.total.toFixed(2);
        }

        return this.result;
    };

    ev(check, a, b) {
        switch (check) {
            case '+':
                this.total = a + b;
                break;
            case '-':
                this.total = a - b;
                break;
            case '/':
                this.total = a / b;
                break;
            case '*':
                this.total = a * b;
                break;
        }
    };
}