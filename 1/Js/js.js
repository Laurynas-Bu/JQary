$(document).ready(function () {
    $('.geltonas').on('click', function () {
        var number = parseInt($(this).text());
        $(this).text(number + 1);
    });

    $('.raudonas').on('click', function () {
        var number = parseInt($('.geltonas').text());
        $(this).text(number + 1);
    });

    $('.zalias').on('click', function () {
        parseInt ($('.geltonas, .raudonas').text());
        $('.geltonas, .raudonas').text(0);
    });

});

