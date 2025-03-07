const generatedRandomNumber = (min, max) => {
    return Math.floor(Math.random()* (max - min) + min)}//makes sure it doesn't go less than a minimum


console.log(generatedRandomNumber(1, 10))

//floor rounds it down