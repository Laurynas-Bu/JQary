var celcius, kelvin, fahrenheit;

{
    celcius = document.getElementById("celc");
    kelvin = document.getElementById("kelv");
    fahrenheit = document.getElementById("fahr");
}

function toCelcius()
{
    kelvin.value = (parseFloat(celcius.value) + 273.15).toFixed(2);
    fahrenheit.value = (parseFloat(celcius.value) * 1.8 + 32).toFixed(2);
}

function toFahrenheit()
{
    celcius.value = ((parseFloat(fahrenheit.value) - 32) / 1.8).toFixed(2);
    kelvin.value = ((parseFloat(fahrenheit.value) + 459.67) * 5/9).toFixed(2);
}

function toKelvin()
{
    celcius.value = (parseFloat(kelvin.value) - 273.15).toFixed(2);
    fahrenheit.value = (parseFloat(kelvin.value) * 9/5 - 459.67).toFixed(2);
}

$(document).ready(function () {

    $('#fahr').on('input', function () {


    });

});



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
        var number = parseInt ($('.geltonas, .raudonas').text());
        $('.geltonas, .raudonas').text(0);
    });

});