// DOM Nodes
const textInput = document.getElementById("txtInput");
const preview = document.getElementById("preview");
const textLength = document.getElementById("textLength");
const popUp = document.getElementById("popUp")
const popUpText = document.getElementById("popUpText")
console.log(popUpText)

// Popup Function
function popupMsg(popupmsgtext){
    popUpText.innerText = popupmsgtext;
    popUp.style.display="flex";
}

// Buttons
const copyBtn = document.getElementById("copyBtn");
const upperCaseBtn = document.getElementById("upperCaseBtn");
const lowerCaseBtn = document.getElementById("lowerCaseBtn");

// Input functionality
textInput.addEventListener("input", () => {
  console.log("ev");
  popUp.style.display="none";
  let textVar = '';
  textVar = textInput.value;
  // console.log(textVar)

  // Preview
  preview.innerText = textVar;

  // Text Length
  let textLenthCount = textVar.length;
  textLength.innerText = `${textLenthCount} Character`;
  // console.log(textLenth)

  // Buttons action
  copyBtn.addEventListener("click", copyBtnFunc);
  upperCaseBtn.addEventListener("click", upperCasingBtnFunc);
  lowerCaseBtn.addEventListener("click", lowerCasingBtnFunc);

  // Button Functionality
  // Coppy
  function copyBtnFunc() {
    navigator.clipboard.writeText(textVar);
    popupMsg("Topied!!");
    console.log("Hit copy");
  }
  // UpperCase
  function upperCasingBtnFunc() {
    textVar = textVar.toUpperCase();
    textInput.value = textVar;
     popupMsg("Upper Case!!");
    console.log("Hit UpperCAse")
  }

  // LowerCase
  function lowerCasingBtnFunc() {
    textVar = textVar.toLowerCase();
    textInput.value = textVar;
     popupMsg("Lower Case!!");
    console.log("Hit lowerCase")
  }
});