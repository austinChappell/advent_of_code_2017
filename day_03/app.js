function manhattanDist(num) {
    let squareRoot = Math.ceil(Math.sqrt(num));
    squareRoot = squareRoot % 2 === 1 ? squareRoot : squareRoot + 1;
    console.log('SQUARE ROOT', squareRoot);

    const cornerNum = squareRoot * squareRoot;
    console.log('CORNER NUMBER', cornerNum);
    const halfWay = Math.floor(squareRoot / 2);
    const edgeDiff = squareRoot - 1;
    console.log('EDGE DIFF', edgeDiff);
    console.log('HALFWAY', halfWay);

    const cornerArr = [cornerNum, cornerNum - edgeDiff, cornerNum - edgeDiff * 2, cornerNum - edgeDiff * 3];
    const mids = [cornerArr[0] - halfWay, cornerArr[1] - halfWay, cornerArr[2] - halfWay, cornerArr[3] - halfWay];
    console.log('CORNER ARRAY', cornerArr);
    console.log('MIDS', mids);

    // cornerArr.forEach((item) => {
    //     const diffToCorner = Math.abs(item - num);
    //     const diffToHalfway = Math.abs(item - halfWay - num);
    //     console.log('DIFF TO CORNER', diffToCorner);
    //     console.log('DIFF TO HALFWAY', diffToHalfway);
    //     if (diffToCorner < halfWay) {
    //         console.log('CLOSE TO HALFWAY');
    //     } else if (diffToHalfway < halfWay) {
    //         console.log('CLOSE TO CORNER');
    //     } else if (diffToHalfway === halfWay) {
    //         console.log('MATCH');
    //     }
    // })

    let notInMiddle = true;

    let steps = 0;

    while (notInMiddle) {


        for (let i = 0; i < 4; i++) {
            if (num < cornerArr[i] && num > mids[i]) {
                console.log('FIRST HALF');
                num--;
                steps++;
            } else if (num > cornerArr[i] && num < mids[i]) {
                console.log('SECOND HALF');
                num++;
                steps++;
            } else if (num === cornerArr[i]) {
                console.log('CORNER');
                num--;
                steps++;
            } else if (num === mids[i]) {
                console.log('MIDDLE');
                notInMiddle = false;
            }
        }
        console.log(num);

    }

    console.log(steps);

    console.log('TOTAL', steps + halfWay);

}

manhattanDist(265149);
