function manhattanDist(num) {
    let squareRoot = Math.ceil(Math.sqrt(num));
    squareRoot = squareRoot % 2 === 1 ? squareRoot : squareRoot + 1;

    // Get the max corner
    const cornerNum = squareRoot * squareRoot;

    // Get halfway from corner to middle of side
    const halfWay = Math.floor(squareRoot / 2);

    // Get the difference from one corner to the next
    const edgeDiff = halfWay * 2;

    // Just the corners
    const cornerArr = [cornerNum, cornerNum - edgeDiff, cornerNum - edgeDiff * 2, cornerNum - edgeDiff * 3];

    // Just the middle of each side
    const mids = [cornerArr[0] - halfWay, cornerArr[1] - halfWay, cornerArr[2] - halfWay, cornerArr[3] - halfWay];

    let notInMiddle = true;
    let steps = 0;

    while (notInMiddle) {

        for (let i = 0; i < 4; i++) {
            if (num < cornerArr[i] && num > mids[i]) {
                num--;
                steps++;
            } else if (num > cornerArr[i] && num < mids[i]) {
                num++;
                steps++;
            } else if (num === cornerArr[i]) {
                num--;
                steps++;
            } else if (num === mids[i]) {
                notInMiddle = false;
            }
        }

    }

    return steps + halfWay;

}

manhattanDist(265149);
