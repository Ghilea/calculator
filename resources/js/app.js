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
    $(document).keydown(function (event) {

        let key = event.keyCode;
        //console.log(key);
        switch (key) {
            case 13:
                //enter
                event.preventDefault();
                if (btn.reset) {
                    return;
                }
        
                let result = btn.calculate();
        
                let screen = $('.screen');
                screen.val(result);
                btn.reset = true;
                break;
            case 67:
                //c
                event.preventDefault();
                btn.clear();
                break;
            case 191:
                event.preventDefault();
                btn.resetIt('*');
                btn.calcBtn('*');
                break;
            case 187:
                event.preventDefault();
                btn.resetIt('+');
                btn.calcBtn('+');
                break;
            case 189:
                event.preventDefault();
                btn.resetIt('-');
                btn.calcBtn('-');
                break;
            case 190:
                event.preventDefault();
                btn.resetIt('.');
                btn.calcBtn('.');
                break;
            case 47:
                event.preventDefault();
                btn.resetIt('/');
                btn.calcBtn('/');
                break;
            case 48:
                event.preventDefault();
                btn.resetIt(0);
                btn.calcBtn(0);
                break;
            case 49:
                event.preventDefault();
                btn.resetIt(1);
                btn.calcBtn(1);
                break;
            case 50:
                event.preventDefault();
                btn.resetIt(2);
                btn.calcBtn(2);
                break;
            case 51:
                event.preventDefault();
                btn.resetIt(3);
                btn.calcBtn(3);
                break;
            case 52:
                event.preventDefault();
                btn.resetIt(4);
                btn.calcBtn(4);
                break;
            case 53:
                event.preventDefault();
                btn.resetIt(5);
                btn.calcBtn(5);
                break;
            case 54:
                event.preventDefault();
                btn.resetIt(6);
                btn.calcBtn(6);
                break;
            case 55:
                event.preventDefault();
                btn.resetIt(7);
                btn.calcBtn(7);
                break;
            case 56:
                event.preventDefault();
                btn.resetIt(8);
                btn.calcBtn(8);
                break;
            case 57:
                event.preventDefault();
                btn.resetIt(9);
                btn.calcBtn(9);
                break;
            default:
            return (
                key == 8 || 
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
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
    $('.clear').click(() => {
        btn.clear();
    });

});