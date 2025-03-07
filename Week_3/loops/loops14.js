const createWordPyramid =  () => {
    let input = prompt("Please fill in a word")

function generatePyramid2 (input){
    let rows = input.length
    for (let i = 1; i <= rows; i++){
        let row = '';
        for ( let j = 0; j < i; j++)
            row += input[j]
      
        console.log(row);
}
    }
    

generatePyramid2(input)
}


createWordPyramid()



const createWordPyramid2 =  () => {
    let input = prompt("Please fill in a word")

    for (i= 1; i <= input.length; i++)

        console.log(input.slice(0,i))
}
createWordPyramid()


