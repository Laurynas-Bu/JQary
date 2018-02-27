var celcius, kelvin, fahrenheit;

{
    celcius = $('#celc');
    kelvin = $('#kelv');
    fahrenheit = $('#fahr');
}

        celcius.on ('input', function () {
            kelvin.val((parseFloat(this.value) + 273.15).toFixed(2));
            fahrenheit.val((parseFloat(this.value) * 1.8 + 32).toFixed(2));
        });

        kelvin.on ('input', function () {
            celcius.val((parseFloat(this.value) - 273.15).toFixed(2));
            fahrenheit.val((parseFloat(this.value) * 9/5 - 459.67).toFixed(2));
        });

        fahrenheit.on ('input', function () {
          celci =  celcius.val(((parseFloat(this.value) - 32) / 1.8).toFixed(2));
          kelvi = kelvin.val(((parseFloat(this.value) + 459.67) * 5/9).toFixed(2));

        });


// kelvin.value = (parseFloat(this.value) + 273.15).toFixed(2);
// fahrenheit.value = (parseFloat(this.value) * 1.8 + 32).toFixed(2);


// celcius.value = ((parseFloat(this.value) - 32) / 1.8).toFixed(2);
// kelvin.value = ((parseFloat(this.value) + 459.67) * 5/9).toFixed(2);


// celcius.value = (parseFloat(this.value) - 273.15).toFixed(2);
// fahrenheit.value = (parseFloat(this.value) * 9/5 - 459.67).toFixed(2);