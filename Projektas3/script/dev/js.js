$(document).ready(function () {

    $('#rytas').click(function () {
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

    //Datepicker

    var newArray = [
        { day: [1, 2, 5, 6, 10, 12, 22], time: [
                ['8:00', '8:30', '9:00', '9:30', '10:00'],
                ['8:30', '9:00', '10:00'],
                ['8:00', '9:00', '10:00'],
                ['9:00', '9:30', '10:00'],
                ['8:00', '8:30', '9:30', '10:00'],
                ['9:00', '9:30', '10:00'],
                ['9:00', '10:00']
            ]
        },
        {
            day: [5, 8, 11, 12, 14, 16, 22, 24, 25, 28], time: [
            ['12:00', '14:30', '15:00', '15:30'],
            ['13:00', '13:30', '14:00'],
            ['12:30', '14:00', '15:00', '15:30'],
            ['12:00'],
            ['13:30'],
            [],
            ['14:00', '15:00'],
            ['15:30'],
            ['15:00', '15:30']
            ]
        },

        {
            day: [4 ,11, 15, 20, 22, 26, 27], time: [
                ['16:00', '14:30', '15:00', '15:30'],
                ['13:00', '13:30', '14:00'],
                ['12:30', '14:00', '15:00', '15:30'],
                ['12:00'],
                ['13:30'],
                [],
                ['14:00', '15:00'],
                ['15:30'],
                ['15:00', '15:30']
            ]
        }
    ];
    console.log(newArray[0].time[2]);
    var eventDates =
            newArray[0].day,
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

