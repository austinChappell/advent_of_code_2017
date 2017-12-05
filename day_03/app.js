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

function spiralAdd(num) {

    const spiral = [];

    let x = 1;
    let side = 1;
    let layer = 1;
    let edgeDist = 1;
    let position = 0;
    let wholePosition = 0;

    while (x <= num) {

        position++;
        wholePosition++;
        edgeDist = layer - 1;

        const o = {};

        o.val = x;
        o.side = side;
        o.layer = layer;
        o.edgeDist = edgeDist;
        o.position = position;
        // o.wholePosition = wholePosition;



        const filtered = [];

        spiral.forEach((item) => {
            if (layer === 3 && item.layer === 1) {
                filtered.push(item);
            } else {
                if (layer - 2 === item.layer) {
                    if (side === item.side) {
                        if (position === item.position) {
                            filtered.push(item);
                        } else if (position === item.positon - 1) {
                            filtered.push(item);
                        } else if (position === item.position + 1) {
                            filtered.push(item);
                        } else if (position === item.position + 2) {
                            filtered.push(item);
                        // } else if (position === item.position - 2) {
                        //     filtered.push(item);
                        }
                        // TODO: This might need to change
                    } else if (position === 2) {
                        if (item.side === 4 && item.position === edgeDist - 2) {
                            filtered.push(item);
                        } else if (item.side === side - 1 && item.position === 1) {
                            filtered.push(item);
                        }
                    } else {
                        if (position === edgeDist && item.position === 1 && side === 4) {
                            filtered.push(item);
                        }
                    }
                } else if (layer === item.layer) {
                    if (side === 4) {
                        if (position === edgeDist - 1 || position === edgeDist) {
                            if (item.side === 1 && item.position === 1) {
                                filtered.push(item);
                            }
                        }
                    }
                    if (position === 1) {
                        if (item.side === side - 1) {
                            if (item.position === edgeDist - 1) {
                                filtered.push(item);
                            }
                        }
                    }
                }
            }
        })

        const lastItem = spiral[spiral.length - 1];

        if (!filtered.includes(lastItem)) {
            filtered.push(lastItem);
        }

        const reduced = filtered.reduce((a, b) => {
            return {val: a.val + b.val};
        })

        if (typeof reduced !== 'undefined') {
            o.val = reduced.val;
        };





        spiral.push(o);

        console.log(spiral);

        const numOfLayer = spiral.filter((item) => {
            return item.layer === layer;
        })

        if (numOfLayer.length >= (layer - 1) * 4) {
            layer += 2;
            side = 1;
            position= 0;
            wholePosition = 0;
        } else {
            if (position === edgeDist) {
                position = 0;
                side++;
            }
        }



        x++;

    }

    // console.log(spiral);

}

spiralAdd(15);
