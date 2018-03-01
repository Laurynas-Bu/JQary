$(document).ready(function () {
    $('#save').click(function () {
        allIn();
    });

    function allIn() {

        var check = $('#forma');
        var error = 'Užpildykite visus laukus';

        check.each(function(){
            if (check.val === '') {
                alert(error);
                return
            }
            console.log(check);
        });


           // if (check.elements[i].value === '' ){
              //  alert(error);
              //  return
           // }
        //};

      //  table ();
//}

    }
});

