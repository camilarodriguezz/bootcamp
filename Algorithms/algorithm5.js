// 1.
function negativeToZero(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}


// 2.
function moveValuesForward(arr) {
    arr.push(0);
    arr.shift();
    return arr;
}


// 3.
function reverseValues(arr) {
    var x = arr.length;
    for(var i = 0; i < (x/2); i++){
        var temp = arr[x-i-1];
        arr[x-i-1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


// 4.
function duplicateIndex(arr) {
    for(var i = 0; i<arr.length; i++) {
        arr.splice(i, 0, arr[i]);
        i++;
    }
    return arr;
}