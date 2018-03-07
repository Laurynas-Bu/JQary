 $(document).ready(function () {

    //Datepicker

    var newArray = [
        { days: [1, 2, 5, 6, 10, 12, 22], time: [
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
            days: [5, 8, 11, 12, 14, 16, 22, 24, 25, 28], time: [
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
            days: [4 ,11, 15, 20, 22, 26, 27], time: [
                ['18:00', '18:30'],
                ['16:00', '16:30', '17:00'],
                ['16:30', '17:00', '18:00', '18:30'],
                ['16:30', '18:00'],
                ['17:00', '18:30'],
                ['16:00', '17:00'],
                []
            ]
        }
    ];
    console.log(newArray[1].time[6]);

    var eventDates = newArray[0].days,
        eventTime = newArray[0].time,
        $picker = $('#custom-cells'),
        $content = $('#custom-cells-events'),
        sentences = [];

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

    //     $('#rytas').click(function () {
    //     allIn();
    // });
    //  function allIn() {
    //      var check = $(newArray[index].time);
    //      var html ='<tr>';
    //      check.each(function(i){
    //          if (check.eq(i).val() === '') {
    //              alert(error);
    //              return false
    //          }
    //          html +='<td>' + check.eq(i).val() + '</td>';
    //      });
    //      html +='</tr>';
    //      $('.table tbody').append(html);
    //  }

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

