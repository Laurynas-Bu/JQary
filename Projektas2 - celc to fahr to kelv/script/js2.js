$(document).ready(function () {
    $('#save').on('click', function () {
        var firstname = $('input[name="firstname"]').val().trim();
        var lastname = $('input[name="lastname"]').val().trim();
        var email = $('input[name="email"]').val().trim();
        var phone = $('input[name="phone"]').val().trim();
        var birthday = $('input[name="birthday"]').val().trim();
        var adress = $('input[name="adress"]').val().trim();

        if (firstname == '' || lastname == '' || email == '' || phone == '' || birthday == '' || adress == '') {
        alert('Užpildykite visus laukus');
        return;
    }

        html = '<tr>';
        html += '<td>' + firstname + '</td>';
        html += '<td>' + lastname + '</td>';
        html += '<td>' + email + '</td>';
        html += '<td>' + phone + '</td>';
        html += '<td>' + birthday + '</td>';
        html += '<td>' + adress + '</td>';
        html += '</tr>';

        $('.table tbody').append(html);

        $('input[name="firstname"]').val('');
        $('input[name="lastname"]').val('');
        $('input[name="email"]').val('');
        $('input[name="phone"]').val('');
        $('input[name="birthday"]').val('');
        $('input[name="adress"]').val('');
    });

});



