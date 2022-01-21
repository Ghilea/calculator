$(function () {

    let calcArray = [];
    let number;
    let operator = '+';

    let sc = $('.screen');
    //screen
    $(document).keypress(function (event) {

        let keys = event.originalEvent.keyCode;

        switch (keys) {
            case 13:
                calculate();
                event.preventDefault();
                break;
            case 99:
                clear()
                event.preventDefault();
                break;
            case 42:
                multiplication();
                event.preventDefault();
                break;
            case 43:
                addition();
                event.preventDefault();
                break;
            case 45:
                subrtraction();
                event.preventDefault();
                break;
            case 47:
                division();
                event.preventDefault();
                break;
            case 48:
                numbers(0);
                event.preventDefault();
                break;
            case 49:
                numbers(1);
                event.preventDefault();
                break;
            case 50:
                numbers(2);
                event.preventDefault();
                break;
            case 51:
                numbers(3);
                event.preventDefault();
                break;
            case 52:
                numbers(4);
                event.preventDefault();
                break;
            case 53:
                numbers(5);
                event.preventDefault();
                break;
            case 54:
                numbers(6);
                event.preventDefault();
                break;
            case 55:
                numbers(7);
                event.preventDefault();
                break;
            case 56:
                numbers(8);
                event.preventDefault();
                break;

            case 57:
                numbers(9);
                event.preventDefault();
                break;

        }
    });

    //addition
    $('#btn0').click(function () {
        numbers(0);
    });

    $('#btn1').click(function () {
        numbers(1);
    });

    $('#btn2').click(function () {
        numbers(2);
    });

    $('#btn3').click(function () {
        numbers(3);
    });

    $('#btn4').click(function () {
        numbers(4);
    });

    $('#btn5').click(function () {
        numbers(5);
    });

    $('#btn6').click(function () {

        numbers(6);
    });

    $('#btn7').click(function () {

        numbers(7);
    });

    $('#btn8').click(function () {

        numbers(8);
    });

    $('#btn9').click(function () {

        numbers(9);
    });

    //addition
    $('#btnAdd').click(function () {
        addition();
    });

    //subrtraction
    $('#btnSub').click(function () {
        subrtraction();
    });

    //multiplication
    $('#btnMul').click(function () {
        multiplication();
    });

    //division
    $('#btnDiv').click(function () {
        division();
    });

    //calculate
    $('#eval').click(function () {
        calculate();
    });

    //clear
    $('.clear').click(function () {
        clear();
    });

    //functions
    function addition() {
        calcArray.push(parseInt(number));
        console.log(calcArray);
        number = '';
        sc.val(sc.val() + '+');
    }

    function subrtraction() {
        calcArray.push(parseInt(number));
        console.log(calcArray);
        number = '';
        sc.val(sc.val() + '-');
    }

    function multiplication() {
        calcArray.push(parseInt(number));
        console.log(calcArray);
        number = '';
        sc.val(sc.val() + '*');
    }

    function division() {
        calcArray.push(parseInt(number));
        console.log(calcArray);
        number = '';
        sc.val(sc.val() + '/');
    }

    function calculate() {
        let result = convMath(operator);
        console.log('resultat: ' + result);
    }

    function clear() {
        console.log('clear');
        calcValue = [];
        number = '';
        sc.val('');
    }

    function convMath(operator) {
        calcArray.push(parseInt(number));
        console.log(calcArray);
        number = '';

        switch (operator) {
            case '+':
                let total;

                $.each(calcArray, function (index, value) {
                    console.log(value);
                    if (index <= 0) {
                        total = value;
                    } else {
                        total += value;
                    }

                });

                return total;
                break;
        }
    }

    function numbers(value) {
        if (number === null || number === '' || number === undefined) {
            number = toString(value);
        } else {
            number += toString(value);
        }

        console.log(number);
        sc.val(sc.val() + value);
    }

});