let placeHolder = "";
placeHolder += 0;
document.getElementById("output").innerHTML = placeHolder;

document.getElementById("clear").addEventListener("click", clearFunction);
let textArea = document.querySelector("#output");

function clearFunction() {
  if (textArea.textContent == placeHolder) {
    console.log("tsting");
  }
  //since clear is last button pressed is clear it displays word clear
  if (textArea.textContent[0] == "0" && textArea.textContent.length > 1) {
    let placeHolder = "";
    document.getElementById("output").innerHTML = placeHolder;
    textArea.textContent += this.textContent.trim();

    console.log("test2");
  }
}
function Output() {
  textArea.textContent += this.textContent.trim();
}

let buttons = document.querySelectorAll("button.number"),
  buttonArray = Array.from(buttons);

buttonArray.forEach((button) => button.addEventListener("click", Output));
