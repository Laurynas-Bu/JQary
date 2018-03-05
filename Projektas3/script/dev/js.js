$(document).ready(function () {
    var eventDates = [1, 10, 12, 22],
        $picker = $('#custom-cells'),
        $content = $('#custom-cells-events'),
        sentences = [  ];

    $picker.datepicker({
        language: 'en',
        onRenderCell: function (date, cellType) {
            var currentDate = date.getDate();
            // Add extra element, if `eventDates` contains `currentDate`
            if (cellType == 'day' && eventDates.indexOf(currentDate) != -1) {
                return {
                    html: currentDate + '<span class="dp-note"></span>'
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

