function  resultReport( marks ) {
        if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let total = 0;
    let pass = 0;
    let fail = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] >= 40) {
            pass++;
        } else {
            fail++;
        }
    }

    // let avg = marks.length === 0 ? 0 : total / marks.length;
    let avg;

    if (marks.length === 0) {
        avg = 0;
    } 
    else {
        avg = total / marks.length;
    }

    let finalScore = Math.round(avg);

    return { finalScore: finalScore, pass: pass, fail: fail };
}

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));  // { finalScore: 79, pass: 6, fail: 1 }