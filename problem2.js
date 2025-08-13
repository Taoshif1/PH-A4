function  onlyCharacter( str ) {
    if (typeof str !== 'string') {
        return "Invalid";
    }else{
        let noSpaceCap = str.replaceAll(" ", "").toUpperCase();
        // let noSpaceCapitalized = str.replace(/\s+/g, "").toUpperCase();
        return noSpaceCap;
    }
}

str = onlyCharacter("h ac   k  m e");
console.log(str); 