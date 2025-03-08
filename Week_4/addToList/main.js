const textExample1 = document.querySelector('p');
const textExample2 = document.querySelector('.myclass');
const textExample3 = document.querySelector('#myId');
const textExample4 = document.querySelectorAll('.myclass')
const textExample5 = document.getElementsByClassName('myclass')

console.log(textExample1.textContent)
//console.log(textExample2.textContent)
//console.log(textExample3.textContent)
//console.log(textExample4[2].textContent)

textExample4.forEach((element) => {
  console.log(element.textContent); 
});



//selector
const button = document.getElementById("insertBtn");
const myinput = document.getElementById("myInput");
const text = document.getElementById("result");
// const text = document.querySelector("#insertBtn");
// const text = document.querySelector("header p .myclass");
// const text = document.querySelector("div");


button.addEventListener('click', () => {
  result.textContent = myInput.value;
})

//function
// const handleClick = () => {
  //alert('Button was clicked')
  //text.textContent = myInput.value;
//};

//const handleClick2 = () => {
  //document.getElementById("result").textContent =
    //document.getElementById("myInput").value;
//};

//function displayUsername (){
// const inputValue = document.getElementById("myInput").value;
//document.getElementById("result").textContent = "User entered: " + inputValue;
//}

//document.getElementById("myInput").addEventListener("Click", displayUsername)

//trigger
//button.addEventListener("click", handleClick);

//document.getElementById('insertBtn').addEventListener('click', handleClick)

/*function myFunction (){
    alert('Hello')
}

myFunction()

const circle = document.getElementById('alert');
console.log (circle)

function myFunction2 (){
    alert('No click!')
}

myFunction2()

const heading = document.getElementsByTagName ("H1")
console.log(heading.textContent)

const paragraph = document.getElementsByTagName
('p')
console.log(paragraph);*/
