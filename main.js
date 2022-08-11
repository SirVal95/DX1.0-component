// three simple ways to work with javascript in our browser

// using the alert method

// alert('welcome to my first javascript note')

// using the console

console.log("it works. I can write on the console!")

// all we are doing is ES5
// Dom--- Document object module
// document --- keyword

console.log(document)

// selecting an html element by ID

document.getElementById('rightchild')

// variable ---- is just a name
var rightdiv = document.getElementById('rightchild')
console.log(rightdiv)

// outputing in our html elements
// rightdiv.innerHTML = "This works just cool"

// changing a html element background
// rightdiv.style.background = "blue"

// function --- holds blocks of javascript code - ES5
function Popsomething (){
    // write our desired block of codes
    alert ('i am poping something')
}

// how to call a function
// Popsomething()

function clickedorange (){
    alert('orange div is clicked')
}

// // our background changer code ---
// // function changebgtoorange(){
//     rightdiv.style.background = "#ffa800"
// }

// // function changebgtomato(){
//     rightdiv.style.background = "#ff6347"
// }

// // function changebgskyblue(){
//     rightdiv.style.background = " #2485acee"
// }

// creating a function with parameters
function agbado (something){
    console.log(something)
}

// how to call funtions and pass arguments to them
agbado('where is my agbado')

agbado('say my name')

// building our background changer app with 3 lines of code
function changebg (color){
    rightdiv.style.background = color
}

// mobile menu application
var menuholder = document.querySelector('.menubar-holder')
console.log(menuholder)

// adding a classname to our html element

// menuholder.classList.add('purplemenubar')
function menuhandler() {
    menuholder.classList.toggle('purplemenubar')
}
