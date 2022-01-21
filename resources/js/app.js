$(function () {
    
    let calcArray = [];

    //add
    $('#btnAdd').click(function () {
        let value = $('.screen').val();
        calcArray.push(value);
        $('#outputMessage').append(value);
    });

    //sub
    $('#btnAdd').click(function () {
        let value = $('.screen').val();
        $('#outputMessage').val(value);
    });

    //calc
    $('#btnAdd').click(function () {
        let value = $('.screen').val();
        $('#outputMessage').val(value);
    });
});