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



// PROBLEM 4




// PROBLEM 5