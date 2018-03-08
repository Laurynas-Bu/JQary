 $(document).ready(function () {

     //Datepicker

     var newArray = [
         {
             days: [1, 2, 5, 6, 10, 12, 22],
             times: [
                 ['8:00', '8:30', '9:00', '9:30', '10:00'],
                 ['8:30', '9:00', '10:00'],
                 ['8:00', '9:00', '10:00'],
                 ['9:00', '9:30', '11:00'],
                 ['8:00', '8:30', '9:30', '11:30'],
                 ['9:00', '9:30', '11:30'],
                 ['9:00', '10:00']
             ]
         },
         {
             days: [5, 8, 11, 12, 14, 16, 22, 24, 25, 28],
             times: [
                 ['12:00', '14:30', '15:00', '15:30'],
                 ['13:00', '13:30', '14:00'],
                 ['12:30', '14:00', '15:00', '15:30'],
                 ['12:00'],
                 ['13:30'],
                 ['12:00', '12:30', '15:30'],
                 ['14:00', '15:00'],
                 ['15:30'],
                 ['15:00', '15:30']
             ]
         },

         {
             days: [4, 11, 15, 20, 22, 26, 27],
             times: [
                 ['18:00', '18:30'],
                 ['16:00', '16:30', '17:00'],
                 ['16:30', '17:00', '18:00', '18:30'],
                 ['16:30', '18:00'],
                 ['17:00', '18:30'],
                 ['16:00', '17:00'],
                 ['16:30', '17:30', '18:00', '18:30']
             ]
         }
     ];


     var eventDates = newArray[0].days,
         eventTime = newArray[0].times,
         $picker = $('#custom-cells'),
         $content = $('#custom-cells-events');

     function getTimes(data, selectedDay) {
         var dayIndex = 0;
         for(var i = 0; i < (data.days).length; i++){
             if(data.days[i] == selectedDay){
                 dayIndex = i;
             }
         }
         return data.times[dayIndex];
     }



    $picker.datepicker({
        language: 'lt',
        disableNavWhenOutOfRange: true,
        moveToOtherMonthsOnSelect: false,
        minDate: new Date(),
        maxDate: '',
        disableNavWhenOutOfRange: false,

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
                title = currentDate.getFullYear();

                var $dateArray = fd.split('-');
                var selectedDay = $dateArray[2];

                var times = getTimes( newArray[0], selectedDay );

                console.log(times);
                //console.log($dateArray);

                content = times;

            }
            $('strong', $content).html(title);
            $('p', $content).html(content);
        }
    });

// Select initial date from `eventDates`
    var currentDate = currentDate = new Date();
    $picker.data('datepicker').selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 10))

});

