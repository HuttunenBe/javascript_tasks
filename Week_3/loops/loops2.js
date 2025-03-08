const logEvenNumberstry = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
logEvenNumberstry();

const evenNumber2 = () => {
  let i = 2;
  while (i <= 100) {
    if (i % 2 === 0) {
      console.log(i, 100 - i);
    }
    i++;
  }
};
evenNumber2();

const logEvenNumberstryfix = () => {
  let y = 75;
  for (let i = 2; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
logEvenNumberstryfix();
