const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B","C","D","E","F"] // 
const btn  = document.getElementById("btn");
const color = document.querySelector(".colorCode");
btn.addEventListener("click", function(){
    let hexColor = "#"; // this variable is change that's why we are useing let 
    // 
    for(let i = 0; i < 6; i++){ // i value is not getterthen 6 because the hexa color value is between 6
        hexColor += hex[getRandomNumber()] // exm: # + random value  = #999956 
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length) /// createing a random number by length of hex it's give us the floor value 
}

// random number A2563B, 