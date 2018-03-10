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

     $('#morning').click(function() {

     var eventDates = newArray[0].days,
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
                        div += '<div class="timeBlock">'+ (element) + '</div>';
            });
                div += '</div>';
            }

            console.log(timesMorning);
            $($content).html(div);
        }
    });


// Select initial date from `eventDates`
    var currentDate = currentDate = new Date();
    $picker.data('datepicker').selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 10))

});

     //remove seat from list
     function removeSeat(seatListElm, seatValue) {
         var arr=seatListElm.value.split(',');

         var p=arr.indexOf(seatValue);
         if(p!=-1){
             arr.splice(p, 1);
             seatListElm.value=arr.join(',');
         }
     }


//add seat to list
     function addSeat(seatListElm, seatValue) {
         var arr=seatListElm.value.split(',');
         if(arr.join()==''){ arr=[]; }

         var p=arr.indexOf(seatValue);
         if(p==-1){
             arr.push(seatValue); //append
             arr=arr.sort(); //sort list
             seatListElm.value=arr.join(',');
         }
     }

//called everytime a seat is clicked
     function seatClick(seat) {
         seat = (this instanceof HTMLInputElement ) ? this : seat;
         var firstSelected;
         var selectedSeats = [];
         var thisInputHasAlreadyBeenSeen = false;
         var confirmedSeats = [];
         if (seat.classList.contains('reserved')==false) {

             if (seat.classList.toggle('selected')) {
                 addSeat(document.getElementById('seats'), seat.value);
                 $(".seat").each(function() {
                     if(this != seat) {
                         if(firstSelected == null && this.classList.contains('selected')) {
                             firstSelected = this;
                             selectedSeats.push(firstSelected);
                             confirmedSeats = selectedSeats.slice();
                         } else if (firstSelected) {
                             if(this.classList.contains('selected')) {
                                 selectedSeats.push(this);
                                 confirmedSeats = selectedSeats.slice();
                             }
                             if(!this.classList.contains('reserved')) {
                                 selectedSeats.push(this);
                             }
                             else{
                                 if(!thisInputHasAlreadyBeenSeen) {
                                     selectedSeats = [];
                                     firstSelected = null;
                                 } else {
                                     return false;
                                 }
                             }
                         }
                     } else {
                         selectedSeats.push(this);
                         confirmedSeats = selectedSeats.slice();
                         if(firstSelected == null) {
                             thisInputHasAlreadyBeenSeen = true;
                             firstSelected = this;
                         }
                     }
                 });
                 if(confirmedSeats.length > 1) {
                     selectAll(confirmedSeats);
                 }
             } else {
                 removeSeat(document.getElementById('seats'), seat.value);
             }

         } else {
             alert("This seat is reserved!\nPlease select another seat");
             removeSeat(document.getElementById('seats'), seat.value);
             return;
         }
     }


//adding event click to seats
     var elms=document.getElementsByClassName('seat');
     for(var i=0, l=elms.length ; i<l ; i++){
         elms[i].onclick=seatClick;
     }

     function selectAll(seats) {
         seats.forEach(function(seat) {
             seat.className = seat.className + ' selected';
         });
     }
     /* PS:
      I used this way to keep this simple without the crossbrowser handling,
      but maybe you want to add events by adding/attaching event listener
     */
 });

