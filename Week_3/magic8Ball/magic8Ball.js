const magic8Ball = () => {
  let question = prompt("Simple yes and no questions only");
  console.log(question);

  let randomAnswer = Math.floor(Math.random() * 8) + 1;

  let reply;
  switch (randomAnswer) {
    case 1:
      reply = "Are you sure you wanna ask this question?";
      break;
    case 2:
      reply = "I'm getting the shakes";
      break;
    case 3:
      reply = "Pay 5 euros for more answers";
      break;
    case 4:
      reply = "Next questions please!";
      break;
    case 5:
      reply = "Have you asked your mom?";
      break;
    case 6:
      reply = "Have you tried chatGPT";
      break;
    case 7:
      reply = "Help I'm stucked inside this ball!";
      break;
    case 8:
      reply = "Daiquiri is my favorite too!";
      break;
    default:
      console.log("...");
      break;
  }

  console.log("Magic8ball says:", reply);
  alert(reply);
};

magic8Ball();
