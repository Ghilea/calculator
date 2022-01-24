import Btn from './class/class_btn.js';

$(function () {

    let btn = new Btn();
    let reset = false;

    //keys
    $(document).keypress(function (event) {

        let keys = event.originalEvent.keyCode;

        switch (keys) {
            case 13:
                btn.calculate();
                reset = true;
                event.preventDefault();
                break;
            case 99:
                btn.clear();
                event.preventDefault();
                break;
            case 42:
                resetItOperator();
                btn.calcBtn('*');
                event.preventDefault();
                break;
            case 43:
                resetItOperator();
                btn.calcBtn('+');
                event.preventDefault();
                break;
            case 45:
                resetItOperator();
                btn.calcBtn('-');
                event.preventDefault();
                break;
            case 46:
                resetItOperator();
                btn.calcBtn('.');
                event.preventDefault();
                break;
            case 47:
                resetItOperator();
                btn.calcBtn('/');
                event.preventDefault();
                break;
            case 48:
                btn.calcBtn(0);
                resetIt();
                event.preventDefault();
                break;
            case 49:
                btn.calcBtn(1);
                resetIt();
                event.preventDefault();
                break;
            case 50:
                btn.calcBtn(2);
                resetIt();
                event.preventDefault();
                break;
            case 51:
                btn.calcBtn(3);
                resetIt();
                event.preventDefault();
                break;
            case 52:
                btn.calcBtn(4);
                resetIt();
                event.preventDefault();
                break;
            case 53:
                btn.calcBtn(5);
                resetIt();
                event.preventDefault();
                break;
            case 54:
                btn.calcBtn(6);
                resetIt();
                event.preventDefault();
                break;
            case 55:
                btn.calcBtn(7);
                resetIt();
                event.preventDefault();
                break;
            case 56:
                btn.calcBtn(8);
                resetIt();
                event.preventDefault();
                break;
            case 57:
                btn.calcBtn(9);
                resetIt();
                event.preventDefault();
                break;

        }
    });

    //click buttons
    let arrayButtons = [
        '#btn0', '#btn1', '#btn2', '#btn3', '#btn4',
        '#btn5', '#btn6', '#btn7', '#btn8', '#btn9'
    ]

    $.each(arrayButtons, (index, element) => {
        $(element).click(function () {
            resetIt();
            btn.calcBtn(index);
        });
    });

    let arrayOperator = [
        ['#btnAdd', '+'],
        ['#btnSub', '-'],
        ['#btnMul', '*'],
        ['#btnDiv', '/'],
        ['#btnDot', '.'],
    ]

    $.each(arrayOperator, (index, keys) => {
        $(keys[0]).click(function () {
            resetItOperator();
            btn.calcBtn(keys[1]);
        });
    });

    //calculate
    $('#eval').click(function () {
        if (reset) {
            return;
        }

        let result = btn.calculate();

        let screen = $('.screen');
        screen.val(result);
        reset = true;
    });

    //clear
    $('.clear').click(function () {
        btn.clear();
    });

    function resetIt() {
        if (reset) {
            btn.clear();
            reset = false;
        }
    }

    function resetItOperator() {
        if (reset) {
            reset = false;
        }
    }

});