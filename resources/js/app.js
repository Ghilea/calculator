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

        let key = event.key;
        console.log(event);
        switch (key) {
            case 'Enter':
                event.preventDefault();
                if (btn.reset) {
                    return;
                }
        
                let result = btn.calculate();
        
                let screen = $('.screen');
                screen.val(result);
                btn.reset = true;
                break;
            case 'c' || 'C':
                event.preventDefault();
                btn.clear();
                break;
            case '*':
                event.preventDefault();
                btn.resetIt('*');
                btn.calcBtn('*');
                break;
            case '+':
                event.preventDefault();
                btn.resetIt('+');
                btn.calcBtn('+');
                break;
            case '-':
                event.preventDefault();
                btn.resetIt('-');
                btn.calcBtn('-');
                break;
            case '.':
                event.preventDefault();
                btn.resetIt('.');
                btn.calcBtn('.');
                break;
            case '/':
                event.preventDefault();
                btn.resetIt('/');
                btn.calcBtn('/');
                break;
            case '0':
                event.preventDefault();
                btn.resetIt(0);
                btn.calcBtn(0);
                break;
            case '1':
                event.preventDefault();
                btn.resetIt(1);
                btn.calcBtn(1);
                break;
            case '2':
                event.preventDefault();
                btn.resetIt(2);
                btn.calcBtn(2);
                break;
            case '3':
                event.preventDefault();
                btn.resetIt(3);
                btn.calcBtn(3);
                break;
            case '4':
                event.preventDefault();
                btn.resetIt(4);
                btn.calcBtn(4);
                break;
            case '5':
                event.preventDefault();
                btn.resetIt(5);
                btn.calcBtn(5);
                break;
            case '6':
                event.preventDefault();
                btn.resetIt(6);
                btn.calcBtn(6);
                break;
            case '7':
                event.preventDefault();
                btn.resetIt(7);
                btn.calcBtn(7);
                break;
            case '8':
                event.preventDefault();
                btn.resetIt(8);
                btn.calcBtn(8);
                break;
            case '9':
                event.preventDefault();
                btn.resetIt(9);
                btn.calcBtn(9);
                break;
            default:
            return (
                key === 'Backspace' || 
                key === 'ArrowLeft' ||
                key === 'ArrowRight' ||
                key === 'Delete'
            );
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