$(document).ready(function () {
    var $daysSinceGraduation = $('#daysSinceGraduation');
    var $weeksSinceStartingChordsing = $('#weeksSinceStartingChordsing');
    var now = moment();


    function calculateDaysSinceGraduation() {
        var graduationDate = moment([2013, 5, 15]);

        var daysSinceGraduation = now.diff(graduationDate, 'days');
        $daysSinceGraduation.html(daysSinceGraduation);
    }

    function calculateWeeksSinceStartingChordsing() {
        var chordsingStartDate = moment([2013, 10, 11]);

        var weeksSinceStartingChordsing = now.diff(chordsingStartDate, 'weeks');
        $weeksSinceStartingChordsing.html(weeksSinceStartingChordsing);
    }


    calculateDaysSinceGraduation();
    calculateWeeksSinceStartingChordsing();
});