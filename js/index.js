$(document).ready(function () {
    var $monthsSinceGraduation = $('#monthsSinceGraduation');
    var $monthsSinceStartingChordsing = $('#monthsSinceStartingChordsing');
    var $yearsOfAge = $('#yearsOfAge');
    var now = moment();

    var calculateDiff = function (startDate, unitOfTime) {
        return now.diff(startDate, unitOfTime);
    };

    $monthsSinceGraduation.html(calculateDiff(moment([2013, 5, 15]), 'months'));
    $monthsSinceStartingChordsing.html(calculateDiff(moment([2013, 10, 11]), 'months'));
    $yearsOfAge.html(calculateDiff(moment([1990, 7, 25]), 'years'));
});