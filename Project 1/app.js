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

  clearTimeout();
  setTimeout(() => {
    popUp.style.display = "none";
  }, 5000);
}

// Buttons Nodes
const copyBtn = document.getElementById("copyBtn");
const upperCaseBtn = document.getElementById("upperCaseBtn");
const lowerCaseBtn = document.getElementById("lowerCaseBtn");
const tittleCaseBtn = document.getElementById("tittleCaseBtn");
const SentenceCaseBtn = document.getElementById("SentenceCaseBtn");
const ReverseTextbtn = document.getElementById("ReverseTextbtn");

// Buttons action
copyBtn.addEventListener("click", copyBtnFunc);
upperCaseBtn.addEventListener("click", upperCasingBtnFunc);
lowerCaseBtn.addEventListener("click", lowerCasingBtnFunc);
tittleCaseBtn.addEventListener("click", tittleCaseBtnFunc);
SentenceCaseBtn.addEventListener("click", SentenceCaseBtnFunc);
ReverseTextbtn.addEventListener("click", ReverseTextbtnFunc);

// Global Variable
let textVar = "";

// Input functionality
textInput.addEventListener("input", () => {
  popUp.style.display = "none";
  textVar = textInput.value;
  // Preview
  preview.innerText = textVar;

  // Text Info
  let textLenthCount = textVar.length;
  let wordArr = textVar.toString().split(" ");
  let wordCount = wordArr.length;
  textInfo.innerText = `${textLenthCount} Character And ${wordCount} Words`;
});

// Button Functionality
// --Coppy
function copyBtnFunc() {
  navigator.clipboard.writeText(textVar);
  popupMsg("Copied!!");
}

// --UpperCase
function upperCasingBtnFunc() {
  textVar = textVar.toUpperCase();
  textInput.value = textVar;
  preview.innerText = textVar;
  popupMsg("Upper Case!!");
}

// --LowerCase
function lowerCasingBtnFunc() {
  textVar = textVar.toLowerCase();
  textInput.value = textVar;
  preview.innerText = textVar;
  popupMsg("Lower Case!!");
}

// --Tittlecase
function tittleCaseBtnFunc() {
  let strArr = textVar.split(" ");
  const capitalizedWords = strArr.map((word) => {
    if (word.length === 0) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  let finalText = capitalizedWords.join(" ");
  textVar = finalText;
  textInput.value = textVar;
  preview.innerText = textVar;
  popupMsg("Tittle Cased!!");
}

// --Sentence Case
function SentenceCaseBtnFunc() {
  textVar = textVar.toLowerCase();
  let strArr = textVar.split(".");
  const capitalizedWords = strArr.map((word) => {
    if (word.length === 0) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  let finalText = capitalizedWords.join(".");
  textVar = finalText;
  textInput.value = textVar;
  preview.innerText = textVar;
  popupMsg("Sentence Cased!!");
}

// --Reverse Text
function ReverseTextbtnFunc() {
  reverseTextVar = StrReverse(textVar);
  function StrReverse(str) {
    let strArr = str.split("");
    let revArr = strArr.reverse();
    let revStr = revArr.join("");
    textVar = revStr;
    textInput.value = textVar;
  }
  popupMsg("Text Reversed!");
}

//
