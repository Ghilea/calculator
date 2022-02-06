import Math from './class_math.js'

export default class Btn extends Math {
    constructor() {
        super();
        this.reset = false;
        this.screen = $('#calcValue');
        this.outputMessage = $('#outputMessage');
    }

    outputBtnValue(value) {
        this.screen.focus();
        this.screen.val(this.screen.val() + value);
    }

    calculate() {
        if (this.reset) {
            return;
        }

        if (this.input(this.screen.val())) {
            return;
        }

        let result = this.convMath(this.screen.val());

        this.outputMessage.html('<p>' + this.screen.val() + ' = ' + result + '</p>');

        this.screen.val(result);
        this.reset = true;

        return result;
    }

    clear() {
        this.screen.val('');
        this.outputMessage.html('');
        Math.result = '';
    }
}