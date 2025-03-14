const logOddNumbers = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      //checks if number is odd. Divided by two. If 0 = even,l if 1 = not even
      console.log(i); //logs odd numbers from 100
    }
  }
};

logOddNumbers();

const logOddNumbers2 = () => {
  for (let i = 1; i < 100; i += 2) {
    console.log(i);
  }
};

logOddNumbers2();
