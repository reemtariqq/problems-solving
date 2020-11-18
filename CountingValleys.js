var trip = 'UDDDUDUU'
console.log(countingValleys(trip.length, trip))
function countingValleys(n, s) {
    var steps = s.split('')
    var v = 0;     // # of valleys
    var lvl = 0;
    for (var i = 0; i < steps.length; i++) {
        if (steps[i] == 'U')++lvl;
        if (steps[i] == 'D')--lvl;
        if (lvl == 0 && steps[i] == 'U')
            ++v;
    }
    return v

}


