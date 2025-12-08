// DOM Nodes
const textInput = document.getElementById("txtInput");
const preview = document.getElementById("preview");
const textInfo = document.getElementById("textInfo");
const popUp = document.getElementById("popUp");
const popUpText = document.getElementById("popUpText");

// Popup Function
function popupMsg(popupmsgtext) {
  popUpText.innerText = popupmsgtext;
  popUp.style.display = "flex";
}

// Buttons
const copyBtn = document.getElementById("copyBtn");
const upperCaseBtn = document.getElementById("upperCaseBtn");
const lowerCaseBtn = document.getElementById("lowerCaseBtn");

// Input functionality
textInput.addEventListener("input", () => {
  popUp.style.display = "none";
  let textVar = "";
  textVar = textInput.value;

  // Preview
  preview.innerText = textVar;

  // Text Info
  let textLenthCount = textVar.length;
  let wordArr = textVar.toString().split(" ");
  let wordCount = wordArr.length;
  textInfo.innerText = `${textLenthCount} Character And ${wordCount} Words`;

  // Buttons action
  copyBtn.addEventListener("click", copyBtnFunc);
  upperCaseBtn.addEventListener("click", upperCasingBtnFunc);
  lowerCaseBtn.addEventListener("click", lowerCasingBtnFunc);

  // Button Functionality
  // Coppy
  function copyBtnFunc() {
    navigator.clipboard.writeText(textVar);
    popupMsg("Copied!!");
  }
  // UpperCase
  function upperCasingBtnFunc() {
    textVar = textVar.toUpperCase();
    textInput.value = textVar;
    popupMsg("Upper Case!!");
  }

  // LowerCase
  function lowerCasingBtnFunc() {
    textVar = textVar.toLowerCase();
    textInput.value = textVar;
    popupMsg("Lower Case!!");
  }
});
