function partition(arr, low, high) {
    debugger
    var pivot = arr[high]
    var i = low - 1
    for (var j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;

            // swap arr[i] and arr[j] 
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    var temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

function sort(arr, low, high) {
    debugger
    if (low < high) {
        /* pi is partitioning index, arr[pi] is  
          now at right place */
        var pi = partition(arr, low, high);

        // Recursively sort elements before 
        // partition and after partition 
        sort(arr, low, pi - 1);
        sort(arr, pi + 1, high);
    }
}

var arr = [10, 7, 8, 9, 1, 5];
var n = arr.length;

sort(arr, 0, n - 1);