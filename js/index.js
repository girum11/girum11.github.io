$(document).ready(function () {
    var $daysSinceGraduation = $('#daysSinceGraduation');
    var $weeksSinceStartingChordsing = $('#weeksSinceStartingChordsing');
    var $yearsOfAge = $('#yearsOfAge');
    var now = moment();

    var calculateDiff = function (startDate, unitOfTime) {
        return now.diff(startDate, unitOfTime);
    }

    $daysSinceGraduation.html(calculateDiff(moment([2013, 5, 15]), 'days'));
    $weeksSinceStartingChordsing.html(calculateDiff(moment([2013, 10, 11]), 'weeks'));
    $yearsOfAge.html(calculateDiff(moment([1990, 7, 25]), 'years'));
});