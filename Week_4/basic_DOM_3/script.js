const input = document.getElementById ('typeHere')
const div = document.getElementById("displayText")
const button = document.getElementById("button")


input.oninput = showResult;
function showResult(){
  div.innerText = this.value
}

select.addEventListener('change', function(e) {
    const option = this.options[this.selectedIndex];
    const value = option.text.split('-')[1];
    input.value = value;
  })
