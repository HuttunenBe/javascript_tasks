const generateMultiplicationTable = () => {
    const input = Number(prompt("Please enter a number?")); 

    for(let i = 1; i <= 10; i++) {
        const result = i * input;
        console.log(input + "*" + i + "=" + result)
    }
}

generateMultiplicationTable()
