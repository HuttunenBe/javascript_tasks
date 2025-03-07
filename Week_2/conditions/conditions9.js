function canEnterEvent(age, hasId){
    if (age >= 18 && hasId){
        console.log ("You can enter the event.");
    } else {
        console.log("You cannot enter.");
    }
    }

    canEnterEvent(18, true);