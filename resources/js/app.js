import Btn from './class/class_btn.js';

$(function () {

    let btn = new Btn();

    //keys
    $(document).keypress(function (event) {

        let keys = event.originalEvent.keyCode;

        switch (keys) {
            case 13:
                btn.calculate();
                event.preventDefault();
                break;
            case 99:
                btn.clear()
                event.preventDefault();
                break;
            case 42:
                btn.calcBtn('*');
                event.preventDefault();
                break;
            case 43:
                btn.calcBtn('+');
                event.preventDefault();
                break;
            case 45:
                btn.calcBtn('-');
                event.preventDefault();
                break;
            case 46:
                btn.calcBtn('.');
                event.preventDefault();
                break;
            case 47:
                btn.calcBtn('/');
                event.preventDefault();
                break;
            case 48:
                btn.calcBtn(0);
                event.preventDefault();
                break;
            case 49:
                btn.calcBtn(1);
                event.preventDefault();
                break;
            case 50:
                btn.calcBtn(2);
                event.preventDefault();
                break;
            case 51:
                btn.calcBtn(3);
                event.preventDefault();
                break;
            case 52:
                btn.calcBtn(4);
                event.preventDefault();
                break;
            case 53:
                btn.calcBtn(5);
                event.preventDefault();
                break;
            case 54:
                btn.calcBtn(6);
                event.preventDefault();
                break;
            case 55:
                btn.calcBtn(7);
                event.preventDefault();
                break;
            case 56:
                btn.calcBtn(8);
                event.preventDefault();
                break;
            case 57:
                btn.calcBtn(9);
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
            btn.calcBtn(keys[1]);
        });
    });

    //calculate
    $('#eval').click(function () {
        let result = btn.calculate();

        let screen = $('.screen');
        screen.val(result);
    });

    //clear
    $('.clear').click(function () {
        btn.clear();
    });

});