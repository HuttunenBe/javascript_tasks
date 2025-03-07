const calculateAverageSpeed = () =>{
    let distance; 
    let time;
    let speed;
    while (distance !== 0){ //run forever until distance is 0
        distance = Number (prompt('Enter distance'))
        if (distance === 0){
            break
        }
        time = Number(prompt('Enter a time in hours: '));
        speed = distance/time; 
        console.log('The average speed is: ', speed)
    } 

}

calculateAverageSpeed()


