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



     var eventDates = newArray[0].days,
         $picker = $('#custom-cells'),
         $content = $('#custom-cells-events'),

     date = new Date(),
     maxdate = new Date();
     maxdate.setMonth(date.getMonth() + 2);

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
        maxDate: maxdate,
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
            var title = '', div = '';
            // If date with event is selected, show it
            if (date && eventDates.indexOf(date.getDate()) != -1) {
                title = fd;

                var $dateArray = fd.split('-'),
                    selectedDay = $dateArray[2],
                    div = '<div class="times">',

                    timesMorning = getTimes(newArray[0], selectedDay),
                    timesNoon = getTimes(newArray[1], selectedDay),
                    timesEvening = getTimes(newArray[2], selectedDay);

                div += '<strong>' + title + '</strong>';

                timesMorning.forEach(function (element) {
                        div += '<div class="timeBlock">' + (element) + '</div>';

            });
            }
            $($content).html(div);
        }
    });

// Select initial date from `eventDates`
    var currentDate = currentDate = new Date();
    $picker.data('datepicker').selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 22));


     //remove dayTime from list
     function removedayTime(dayTimeListElm, dayTimeValue) {
         var arr=dayTimeListElm.value.split(',');

         var p=arr.indexOf(dayTimeValue);
         if(p!=-1){
             arr.splice(p, 1);
             dayTimeListElm.value=arr.join(',');
         }
     }

//add dayTime to list
     function adddayTime(dayTimeListElm, dayTimeValue) {
         var arr=dayTimeListElm.value.split(',');
         if(arr.join()==''){ arr=[]; }

         var p = arr.indexOf(dayTimeValue);
         if(p == -1){
             arr.push(dayTimeValue); //append
             dayTimeListElm.value=arr.join(',');

         }
     }

//called everytime a dayTime is clicked
     function dayTimeClick(dayTime) {
         dayTime = (this instanceof HTMLInputElement ) ? this : dayTime;
         var firstSelected;
         var selecteddayTimes = [];
         var confirmeddayTimes = [];


         if (dayTime.classList.contains('none')==false) {

             if (dayTime.classList.toggle('selected')) {
                 adddayTime (document.getElementById('dayTimes'), dayTime.value);
                 $(".dayTime").each(function () {
                     if (this != dayTime) {
                         if (firstSelected == null && this.classList.contains('selected')) {
                             firstSelected = this;
                             selecteddayTimes.push(firstSelected);
                             confirmeddayTimes = selecteddayTimes.slice();

                         } else if (firstSelected) {
                             if (this.classList.contains('selected')) {
                                 selecteddayTimes.push(this);
                                 confirmeddayTimes = selecteddayTimes.slice();
                             }
                             if (!this.classList.contains('none')) {
                                 selecteddayTimes.push(this);
                             }
                         }
                     } else {
                         selecteddayTimes.push(this);
                         confirmeddayTimes = selecteddayTimes.slice();
                     }
                 });
             } else {
                 removedayTime(document.getElementById('dayTimes'), dayTime.value);
             }
         }
     }
//adding event click to dayTimes
     var elms = $('.timeselectButton');
     for(var i=0, l=elms.length ; i<l ; i++){
         elms[i].onclick = dayTimeClick;
     }
 });


 //  $('#morning').click(function() {
 //     eventDates = newArray[0].days;
 //
 // });
 //
 //  $('#noon').click(function() {
 //      eventDates = newArray[1].days;
 //
 //  });
 //
 // // $('#evening').click(function() {
 // //     eventDates = newArray[2].days;
 //
 // // });
