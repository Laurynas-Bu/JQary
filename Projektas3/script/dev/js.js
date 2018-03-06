 $(document).ready(function () {
//
//     $('#rytas').click(function () {
//         allIn();
//     });
//     function allIn() {
//         var check = $('#forma input');
//         var error = 'Užpildykite visus laukus';
//         var html ='<tr>';
//         check.each(function(i, formInput){
//             if (check.eq(i).val() === '') {
//                 alert(error);
//                 return false
//             }
//             html +='<td>' + check.eq(i).val() + '</td>';
//         });
//         html +='</tr>';
//         $('.table tbody').append(html);
//     }

    //Datepicker

    var eventDates = [1, 10, 12, 22],
        $picker = $('#custom-cells'),
        $content = $('#custom-cells-events'),
        sentences = [ 'Lorem',
            'Lorem',
            'Lorem',
            'Lorem'];

    $picker.datepicker({
        onRenderCell: function (date, cellType) {
            var currentDate = date.getDate();
            // Add extra element, if `eventDates` contains `currentDate`
            if (cellType == 'day' && eventDates.indexOf(currentDate) != -1) {
                return {
                    html: currentDate + '<span class="available"></span>'
                }
            }
        },
        onSelect: function onSelect(fd, date) {
            var title = '', content = '';
            // If date with event is selected, show it
            if (date && eventDates.indexOf(date.getDate()) != -1) {
                title = fd;
                content = sentences[Math.floor(Math.random() * eventDates.length)];
            }
            $('strong', $content).html(title);
            $('p', $content).html(content);
        }
    });

// Select initial date from `eventDates`
    var currentDate = currentDate = new Date();
    $picker.data('datepicker').selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 10))

});

