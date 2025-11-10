const textInput = document.getElementById('txtInput');
// let textVar = textInput.value;

let preview = document.getElementById('preview');
let textDetails = document.getElementById('textLengt');

// Buttons
const copyBtn = document.getElementById('copyBtn')
const upperCaseBtn = document.getElementById('upperCaseBtn');
const LowerCaseBtn = document.getElementById('lowerCaseBtn');

textInput.addEventListener('input',()=>{
    let textVar = '';
    textVar = textInput.value;
    console.log(textVar)
    
    // Preview
    preview.innerText = textVar;
    // console.log(preview)

    // Text Details
    let textLenth = textVar.length;
    let word = textVar.toString().slice(" ");
    // console.log(word)

    textDetails.innerText = `${textLenth} Character`
    // console.log(textLenth)

// Buttons 
    // Coppy
    copyBtn.addEventListener('click',()=>{
        navigator.clipboard.writeText(textVar);
    })
    // UpperCase
    upperCaseBtn.addEventListener('click',()=>{
        textVar = textVar.toUpperCase();
        textInput.value= textVar;
    })

    // LowerCase
    LowerCaseBtn.addEventListener('click',()=>{
        textVar = textVar.toLowerCase();
        textInput.value= textVar;
    }) 

});