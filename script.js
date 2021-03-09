const colors = [ 'green', 'red','yellow','rgba(57, 214, 154)'];
const btn = document.getElementById('btn');
const color = document.querySelector('.colorCode');

btn.addEventListener("click", function() {
    // get random number between 0 - 3 colors []
const randomNumber = getRandomNumber(); // pussing our Random number in this variable 

document.body.style.backgroundColor = colors[randomNumber]; // it's  change our document body in colors data. this data is come by randomly colors length yet 
color.textContent = colors[randomNumber] // show the data from colors
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length); // createing random ordaring by colors length if colors lenth is = 4 the random is genarat between 4 with floor value 
}