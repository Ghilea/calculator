import Btn from './class/class_btn.js';

$(function () {

    //add bubbles
    $('<div>', {
        class: 'bubbles',
    }).appendTo('main');

    for (let index = 0; index < 10; index++) {
        $('<span>').appendTo('.bubbles');
    }

    let btn = new Btn(false);
 
    //keys
    $(document).keypress(function (event) {

        let keys = event.originalEvent.keyCode;

        switch (keys) {
            case 13:
                btn.calculate();
                btn.reset = true;
                event.preventDefault();
                break;
            case 99:
                btn.clear();
                event.preventDefault();
                break;
            case 42:
                btn.resetIt('*');
                btn.calcBtn('*');
                event.preventDefault();
                break;
            case 43:
                btn.resetIt('+');
                btn.calcBtn('+');
                event.preventDefault();
                break;
            case 45:
                btn.resetIt('-');
                btn.calcBtn('-');
                event.preventDefault();
                break;
            case 46:
                btn.resetIt('.');
                btn.calcBtn('.');
                event.preventDefault();
                break;
            case 47:
                btn.resetIt('/');
                btn.calcBtn('/');
                event.preventDefault();
                break;
            case 48:
                btn.calcBtn(0);
                btn.resetIt(0);
                event.preventDefault();
                break;
            case 49:
                btn.calcBtn(1);
                btn.resetIt(1);
                event.preventDefault();
                break;
            case 50:
                btn.calcBtn(2);
                btn.resetIt(2);
                event.preventDefault();
                break;
            case 51:
                btn.calcBtn(3);
                btn.resetIt(3);
                event.preventDefault();
                break;
            case 52:
                btn.calcBtn(4);
                btn.resetIt(4);
                event.preventDefault();
                break;
            case 53:
                btn.calcBtn(5);
                btn.resetIt(5);
                event.preventDefault();
                break;
            case 54:
                btn.calcBtn(6);
                btn.resetIt(6);
                event.preventDefault();
                break;
            case 55:
                btn.calcBtn(7);
                btn.resetIt(7);
                event.preventDefault();
                break;
            case 56:
                btn.calcBtn(8);
                btn.resetIt(8);
                event.preventDefault();
                break;
            case 57:
                btn.calcBtn(9);
                btn.resetIt(9);
                event.preventDefault();
                break;

        }
    });

    //click buttons
    const arrayButtons = [
        ['#btn0', 0], 
        ['#btn1', 1], 
        ['#btn2', 2], 
        ['#btn3', 3], 
        ['#btn4', 4],
        ['#btn5', 5], 
        ['#btn6', 6], 
        ['#btn7', 7], 
        ['#btn8', 8], 
        ['#btn9', 9],
        ['#btnAdd', '+'],
        ['#btnSub', '-'],
        ['#btnMul', '*'],
        ['#btnDiv', '/'],
        ['#btnDot', '.']
    ];

    $.each(arrayButtons, (index, keys) => {
        $(keys[0]).click( () => {
            btn.resetIt(keys[1]);
            btn.calcBtn(keys[1]);
        });
    });

    //calculate
    $('#eval').click(() => {
        if (btn.reset) {
            return;
        }

        let result = btn.calculate();

        let screen = $('.screen');
        screen.val(result);
        btn.reset = true;
    });

    //clear
    $('.clear').click( () => {
        btn.clear();
    });

});