function planAdventure(isWeekend,isSunny, likesFoxes){
    if (isWeekend && isSunny && likesFoxes){
    console.log ("Perfect day for a fox adventure!");
    } else if (isWeekend || isSunny || likesFoxes)
    console.log ("Good day, but not perfect.");
     else {
    console.log("Not a fox fan, but that’s okay!");
    }
    }

    planAdventure(false, false, false);
    planAdventure(false, true, false);
    planAdventure(true, true, true);