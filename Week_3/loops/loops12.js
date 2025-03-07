const buildGroceryList = () => {
    let list = []
    while (true) {
        let input = prompt("Input groceries please");

        
        if (input === 'done'){
            break

    }
    list.push(input)
}
    
console.log(list)
}

buildGroceryList()