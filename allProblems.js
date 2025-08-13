// PROBLEM 1

function totalFine( fare ) {
    if(typeof fare !== 'number' || fare <= 0){
        return "Invalid";
    }else{
        let fine = fare + (fare * 0.2) + 30;
        // console.log(fine);
        return fine;
    }
}

// PROBLEM 2

function  onlyCharacter( str ) {
    if (typeof str !== 'string') {
        return "Invalid";
    }else{
        let noSpaceCap = str.replaceAll(" ", "").toUpperCase();
        // let noSpaceCapitalized = str.replace(/\s+/g, "").toUpperCase();
        return noSpaceCap;
    }
}

// PROBLEM 3

function  bestTeam( player1, player2 ) {

    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) {
        return "Invalid";
    }
    
    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;

    if(total1 < total2){
        return player1.name;
    }
    else if(total1 > total2){
        return player2.name;
    }
    else{
        return "Tie";
    }
}

// PROBLEM 4

function  isSame(arr1 , arr2 ) {
        if(!Array.isArray(arr1) || !Array.isArray(arr2)){
            return "Invalid";
        }
        if(arr1.length !== arr2.length){
            return false;
        }
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
}

// PROBLEM 5

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
