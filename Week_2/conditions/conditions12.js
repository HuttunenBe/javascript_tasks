function checkFoxLover(age,likesFoxes){
    if (age >= 18 && likesFoxes == true){
    console.log ("You are an adult who likes foxes!");
    } else {
    console.log("Not a fox fan, but that’s okay!");
    }
    }

checkFoxLover(18, false);
checkFoxLover(20, true);
checkFoxLover(11, true);