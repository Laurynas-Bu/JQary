$(document).ready(function () {
     var newArray = [
         {
             days: [1, 4, 8, 12, 17, 20, 22],
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
                 ['15:00', '15:30'],
                 ['13:30', '14:30', '15:30']
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

     //Datepicker

     $('.timeselectButton').on('click', function () {
         $('.timeselectButton.selected').removeClass('selected');
         $(this).addClass('selected');

         var $selectedDayType = $(this).attr('id');
         var $selectedDayTypeIndex = 3;

         switch ($selectedDayType){
             case 'morning':
                 $selectedDayTypeIndex = 0;
                 break;
             case 'noon':
                 $selectedDayTypeIndex = 1;
                 break;
             case 'evening':
                 $selectedDayTypeIndex = 2;
                 break;
             default:
                 $selectedDayTypeIndex = 3;
         }

         var $daysByType = [];

         if($selectedDayTypeIndex == 3){
             for(var i = 0; i < newArray.length; i++){
                 $daysByType = $daysByType.concat(newArray[i].days);
             }
             $daysByType = uniq($daysByType);
         }else{
             var $daysByType = newArray[$selectedDayTypeIndex].days;
         }

         $daysByType = $daysByType.sort(function(a, b){return a-b});

         var eventDates = $daysByType,
             $picker = $('#custom-cells'),
             $content = $('#custom-cells-events'),

             date = new Date(),
             maxdate = new Date();
             maxdate.setMonth(date.getMonth() + 2);

         function uniq(a) {
             return a.sort().filter(function(item, pos, ary) {
                 return !pos || item != ary[pos - 1];
             })
         }

         function getTimes(data, selectedDay, filter) {
             var dayIndex = 0;
             var $times = [];
             if(filter !=  3){
                 for(var i = 0; i < (data[filter].days).length; i++){
                     if(data[filter].days[i] == selectedDay){
                         dayIndex = i;
                     }
                 }
                 $times = data[filter].times[dayIndex];
             }else{
                 for(var i = 0; i < data.length; i++){
                     for(var j = 0; j < (data[i].days).length; j++){
                         if(data[i].days[j] == selectedDay){
                             dayIndex = j;
                         }
                     }
                     $times = $times.concat(data[i].times[dayIndex]);
                 }
             }
             return $times;
         }

         $picker.datepicker({
             language: 'lt',
             disableNavWhenOutOfRange: true,
             moveToOtherMonthsOnSelect: false,
             minDate: new Date(),
             maxDate: maxdate,
             disableNavWhenOutOfRange: true,

             onRenderCell: function (date, cellType) {
                 var currentDate = date.getDate();
                 if (cellType == 'day' && eventDates.indexOf(currentDate) != -1) {
                     return {
                         html: currentDate + '<span class="available"></span>'
                     }
                 }
             },

             onSelect: function onSelect(fd, date) {
                 var title = '', div = '';
                 if (date && eventDates.indexOf(date.getDate()) != -1) {
                     title = fd;
                     var $dateArray = fd.split('-'),
                         selectedDay = $dateArray[2],
                         div = '<div class="times">';

                        var times = getTimes(newArray, selectedDay, $selectedDayTypeIndex);

                     div += '<strong>' + title + '</strong>';
                     times.forEach(function (element) {
                         div += '<div class="timeBlock">' + (element) + '</div>';

                     });
                 }
                 $($content).html(div);
             }
         });

         // Select initial date from `eventDates`
         var currentDate = currentDate = new Date();
         $picker.data('datepicker').selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 22));
     });
 });