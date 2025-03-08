const canEat = (isHungry, hasFood) => {
  if (isHungry && hasFood == true) {
    return "Time to eat";
  } else return "You need to find food";
};

console.log(canEat(false, false));
