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

function sortArr(array, largest) {
    const arr = array.slice();
    let index = arr.indexOf(largest) + 1;
    let initVal = largest;
    arr[index - 1] = 0;

    for (let i = 0; i < initVal; i++) {
        if (index > arr.length - 1) {
            index = 0;
        }
        arr[index] = arr[index] + 1
        index++;
    }

    return arr;
}

let cycle = 0;
const history = [];

function distribMem(arr) {


    const largest = findLargest(arr);
    const newArr = sortArr(arr, largest);
    cycle++;
    let match = false;

    history.forEach((arr) => {
        let matchCount = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === newArr[i]) {
                matchCount++;
            }
        }
        if (matchCount === arr.length) {
            match = true;
        }
    })

    if (!match) {
        history.push(newArr);
        distribMem(newArr);
    } else {
        console.log('cycle', cycle);
        return newArr;
    }


}

// distribMem(testInput);
distribMem(input);
