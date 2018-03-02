$(document).ready(function () {
    $('#save').click(function () {
        allIn();
    });

    function allIn() {

        var check = $('#forma input');
        var error = 'Užpildykite visus laukus';

        check.each(function(i){
            if (check.eq(i).val() === '') {
                alert(error);
                return false
            }

            html = '<tr>';
            $('table tbody').append(html += check.eq(i).val());
            html += '</tr>';

        });
        console.log (check)
    }
});

