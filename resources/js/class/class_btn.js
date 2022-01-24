import Math from './class_math.js'

export default class Btn extends Math {
    constructor() {
        super();
    }

    calcBtn(value) {
        let screen = $('.screen');
        screen.focus();
        screen.val(screen.val() + value);
        
    }

    calculate() {
        let screen = $('.screen');

        //checking input field
        if(this.input(screen.val())){
            return;
        }

        let result = this.convMath(screen.val());

        $('#outputMessage h2:first-child').after('<p>' + screen.val() + '=' + result + '</p>');

        return result;
    }

    clear() {
        let screen = $('.screen');
        screen.val('');
    }
}