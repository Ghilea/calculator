import Check from "./class_check.js";

export default class Math extends Check {
    constructor() {
        super();
        this.total;
        this.result;
    }

    convMath(operation) {
        let split = operation.split(/(\+)|(\*)|(\/)|(\-)/g).filter(Boolean);

        //sub in beginning
        if (split[0] == '-') {
            let subValue = split[0] + split[1];
            split.splice(0, 2);
            split.unshift(subValue);
        }

        //add in beginning
        if (split[0] == '+') {
            split.splice(0, 1);
        }

        console.log(split)
        //if theres any mul in it
        while ($.inArray('*', split) !== -1) {
            let index = $.inArray('*', split);
            let newValue = this.ev(split[index], split[index - 1], split[index + 1]);

            split.splice(index - 1, 3);
            split.splice(index - 1, 0, newValue.toString());

            if (split.length === 1) {
                this.total = parseFloat(split[0]);
            }
        }

        //if theres any div in it
        while ($.inArray('/', split) !== -1) {
            let index = $.inArray('/', split);

            console.log(index)
            let newValue = this.ev(split[index], split[index - 1], split[index + 1]);

            split.splice(index - 1, 3);
            split.splice(index - 1, 0, newValue.toString());

            if (split.length === 1) {
                this.total = parseFloat(split[0]);
            }
        }

        //calc it
        while (split.length >= 3) {
            let newValue = this.ev(split[1], parseFloat(split[0]), parseFloat(split[2]));

            split.splice(0, 3);
            split.splice(0, 0, newValue.toString());

            if (split.length === 1) {
                this.total = parseFloat(split[0]);
            }
        }

        if (Number.isInteger(this.total)) {
            this.result = this.total;
        } else {
            this.result = this.total.toFixed(2);
        }

        return this.result;
    };

    ev(check, a, b) {
        let result;

        switch (check) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '/':
                result = a / b;
                break;
            case '*':
                result = a * b;
                break;
        }

        return result;
    };
}