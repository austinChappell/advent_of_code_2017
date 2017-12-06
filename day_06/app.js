const input = [5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6];

const testInput = [0, 2, 7, 0];

function findLargest(arr) {
    let largest = arr[0];

    arr.forEach((num) => {
        if (num > largest) {
            largest = num;
        }
    })

    return largest;
}

function sortArr(arr, largest) {
    let index = arr.indexOf(largest) + 1;
    let initVal = largest;

    for (let i = 0; i < initVal; i++) {
        if (index > arr.length) {
            index = 0;
        }
        arr[index] += 1;
    }

    return arr;
}

function scanArrays(history, newArray) {

    let match = true;
    history.forEach((arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== newArray[i]) {
                match = false;
            }
        }
    })
    return match;

}

function distribMem(arr) {

    const history = [];
    const largest = findLargest(arr);
    const newArr = sortArr(arr, largest);
    let match = scanArrays(history, newArr);

    console.log(newArr);

    if (!match) {
        history.push(newArr);
        distribMem(newArr);
    } else {
        console.log(newArr);
        return newArr;
    }

}

distribMem(testInput);
