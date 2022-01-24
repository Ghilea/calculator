import Math from './class_math.js'

export default class Btn extends Math {
    constructor() {
        super();
    }

    calcBtn(value) {
        let screen = $('.screen');
        screen.val(screen.val() + value);
    }

    calculate() {
        let screen = $('.screen');

        this.input(screen);

        let output = $('#outputMessage h2:first-child').after('<p>' + screen.val() + '</p>');

        return this.convMath(screen.val());
    }

    clear() {
        let screen = $('.screen');
        screen.val('');
    }
}