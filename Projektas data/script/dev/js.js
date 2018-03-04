$(document).ready(function () {
    $('#save').click(function () {
        allIn();
    });

    function allIn() {

        var check = $('#forma input');
        var error = 'Užpildykite visus laukus';
        var html ='<tr>';
        check.each(function(i, formInput){
            if (check.eq(i).val() === '') {
                    alert(error);
                    return false
            }
            html +='<td>' + check.eq(i).val() + '</td>';
        });
        html +='</tr>';
        $('.table tbody').append(html);
    }
});

