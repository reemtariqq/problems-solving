function minimumSwaps(arr) {
    let swap = 0;
    for (let i = 0; i < arr.length; i++) {
        while (i + 1 !== arr[i]) {
            let temp = arr[arr[i] - 1];
            arr[arr[i] - 1] = arr[i]
            arr[i] = temp;
            swap += 1;
        }
    }
    return swap;
}