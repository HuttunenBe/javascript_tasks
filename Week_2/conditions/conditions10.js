function findFox(hasFox, foxName){
    if (hasFox === true && foxName === 'Fiona'){
        console.log ("Fiona the fox is here!");
    } else {
        console.log("No foxes found.");
    }
    }

findFox(true, 'Fiona');
findFox (true, 'Amelia');
console.log(findFox(true, 'Fiona'));
console.log(findFox (true, 'Amelia'));