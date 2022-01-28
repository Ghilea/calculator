import Math from './class_math.js'

export default class Btn extends Math {
    constructor() {
        super();
        this.reset = false;
        this.screen = $('.screen');
    }

    calcBtn(value) {
        this.screen.focus();
        this.screen.val(this.screen.val() + value);
    }

    calculate() {
        if (this.reset) {
            return;
        }

        this.screen.focus();
        //checking input field
        if (this.input(this.screen.val())) {
            return;
        }

        let result = this.convMath(this.screen.val());

        $('#outputMessage').html('<p>' + this.screen.val() + '=' + result + '</p>');

        this.screen.val(result);
        this.reset = true;

        return result;
    }

    clear() {
        this.screen.val('');
        $('#outputMessage').html('');
    }

    resetIt(btn) {

        if (this.reset) {
            const num = new RegExp('[0-9]');
            if (num.test(parseInt(btn))) {
                this.clear();
            }
            this.reset = false;
        }
    }
}