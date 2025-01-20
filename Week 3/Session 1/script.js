// let p = document.querySelector("#paragraph");

// let age = 45;

// if (age < 18)
// {
//     p.innerHTML = "Hello, Sorry you can't get in. You are not old enough."
// }
// else
// {
//     p.innerHTML = "Hello, welcome in. please have a good time."
// }

// function changeColor(element){
//     p.style = "background-color: " + element.innerHTML + ";"
//     console.log(element);
// }


// ! ---------------------------------------------------------------------

let box = document.getElementById("box"); // ? document.querySelector("#box");
let input = document.querySelector("#input");

function changeColor(){
    // Get the value of the input
    let color = input.value;
    // Change background-color of the box
    box.style = `background-color: ${color};`;
}

function x()
{
    box.style = "background-color: red;";
}

function y(){
    box.style = "";
}

function changeImage()
{
    // Get the value of the input
    let url = input.value;
    // Change src of the img
    box.src = url;
}
