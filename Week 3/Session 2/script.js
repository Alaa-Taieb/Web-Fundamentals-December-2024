const cart = document.querySelector("#cart_value");
const main_image = document.querySelector("#main_image");

const indicators = document.querySelectorAll(".indicator");

function buy(){
    cart.innerHTML++;
}
// Will tell us the path to the image.
let image_list = ["banner_1.png" , "banner_2.png" , "banner_3.png" , "banner_4.png"];
// Will tell us the image to choose.
let index = 1;

function move(direction){
    // Remove the highlighted class from the current indicator
    indicators[index].classList.remove("highlighted");
    // Get the new position
    index += direction;

    if (index < 0)
    {
        index = 3;
    }else if(index > 3){
        index = 0;
    }

    // Add the highlighted class to the new indicator
    indicators[index].classList.add("highlighted");

    // Get the new Path
    const path = `/assets/${image_list[index]}`;

    // Update the img with the new path.
    main_image.src = path;

}