import Btn from './class/class_btn.js';

$(function () {

    $('<div>', {
        class: 'bubbles',
    }).appendTo('main');

    for (let index = 0; index < 10; index++) {
        $('<span>').appendTo('.bubbles');
    }

    let btn = new Btn(false);

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
        ['#eval', 'Enter'],
        ['.clear', 'c'],
        ['', 'Backspace'],
        ['', 'ArrowLeft'],
        ['', 'ArrowRight'],
        ['', 'Delete'],
    ];

    $.each(arrayButtons, (index, keys) => {
        $(document).bind('keypress',(e)=>{
            if(keys[0] !== '' && e.key === keys[1]){
                e.preventDefault();
                switch(e.key){
                    case 'Enter':
                        if (btn.reset) {
                            return;
                        }
                
                        let result = btn.calculate();
                
                        let screen = $('.screen');
                        screen.val(result);
                        btn.reset = true;
                        break;
                    case 'c' || 'C':
                        btn.clear();
                        break;
                    default:
                        btn.resetIt(keys[1]);
                        btn.calcBtn(keys[1]);
                        break;

                }
            }else{
                return (
                    e.key === 'Backspace' || 
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'Delete'
                );
            }
        })

        if(keys[0] !== ''){
            $(keys[0]).bind('click',()=>{
                
                switch (keys[0]) {
                    case '#eval':
                        if (btn.reset) {
                            return;
                        }
                
                        let result = btn.calculate();
                
                        let screen = $('.screen');
                        screen.val(result);
                        btn.reset = true;
                        break;
                    case '.clear':
                        btn.clear();
                        break;
                    default:
                        btn.resetIt(keys[1]);
                        btn.calcBtn(keys[1]);
                        break;
                }                
            })
        }
    });
});