import Btn from './class/class_btn.js';
let btn = new Btn();

$(function () {

    //background design
    $('<div>', {
        class: 'bubbles',
    }).appendTo('main');
    for (let index = 0; index < 10; index++) {
        $('<span>').appendTo('.bubbles');
    }

    //keyboard
    $(document).bind('keypress', (e) => {
        $('#calcValue').focus();
        switch (e.key.toLowerCase()) {
            case 'enter':
                e.preventDefault();
                btn.calculate();
                break;
            case 'c':
                e.preventDefault();
                btn.clear();
                break;
            case '=':
                e.preventDefault();
                btn.calculate();
                break;
            default:
                if (btn.reset && e.key >= '0' && e.key <= '9') {
                    btn.clear();
                }

                btn.reset = false;

                return (
                    (e.key >= '0' && e.key <= '9') ||
                    e.key === '+' ||
                    e.key === '-' ||
                    e.key === '*' ||
                    e.key === '/' ||
                    e.key === '.'
                )
        }
    })

    //buttons
    const arrayButtons = [
        ['#btn0', '0'],
        ['#btn1', '1'],
        ['#btn2', '2'],
        ['#btn3', '3'],
        ['#btn4', '4'],
        ['#btn5', '5'],
        ['#btn6', '6'],
        ['#btn7', '7'],
        ['#btn8', '8'],
        ['#btn9', '9'],
        ['#btnAdd', '+'],
        ['#btnSub', '-'],
        ['#btnMul', '*'],
        ['#btnDiv', '/'],
        ['#btnDot', '.'],
        ['#eval', ''],
        ['#btnClear', '']
    ];

    $.each(arrayButtons, (index, keys) => {
        $(keys[0]).bind('click', () => {
            switch (keys[0]) {
                case '#eval':
                    btn.calculate();
                    break;
                case '#btnClear':
                    btn.clear();
                    break;
                default:
                    if (btn.reset && keys[1] >= '0' && keys[1] <= '9') {
                        btn.clear();
                    }

                    btn.reset = false;

                    btn.outputBtnValue(keys[1]);
                    break;
            }
        })

    });
});