const artistArr = [
    {
        id: 1,
        artist: "Lars Winnerbäck",
        born: "Född: 1975",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est earum reiciendis quo omnis. Soluta sit minus blanditiis nihil repellendus, optio aliquid consectetur ea natus, impedit vel enim, velit quam?",
        img: "OIP.jpg"
    },
    {
        id: 2,
        artist: "Melissa Horn",
        born: "Född: 1987",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est earum reiciendis quo omnis. Soluta sit minus blanditiis nihil repellendus, optio aliquid consectetur ea natus, impedit vel enim, velit quam?",
        img: "melissa-horn1.jpg"
    },
    {
        id: 3,
        artist: "Miss Li",
        born: "Född: 1982",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est earum reiciendis quo omnis. Soluta sit minus blanditiis nihil repellendus, optio aliquid consectetur ea natus, impedit vel enim, velit quam?",
        img: "miss-li.jpg"
    },
    {
        id: 4,
        artist: "Miriam Bryant",
        born: "Född: 1991",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est earum reiciendis quo omnis. Soluta sit minus blanditiis nihil repellendus, optio aliquid consectetur ea natus, impedit vel enim, velit quam?",
        img: "miriam-bryant.jpg"
    },
    {
        id: 5,
        artist: "Thomas Stenström",
        born: "Född: 1988",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est earum reiciendis quo omnis. Soluta sit minus blanditiis nihil repellendus, optio aliquid consectetur ea natus, impedit vel enim, velit quam?",
        img: "thomas-stenstrom.jpg"
    }
]

const artistName = document.getElementById("artist_name");
const born = document.getElementById("artist_born");
const about = document.getElementById("artist_about");
const img = document.getElementById("artist_img");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const randomBtn = document.getElementById("randomBtn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    
    allItem(currentItem);
   
})

function allItem(person){
    const item = artistArr[person];
    img.src = item.img;
    artistName.textContent = item.artist;
    born.textContent = item.born; 
    about.textContent = item.about;
}

nextBtn.addEventListener ("click", function(){
    if (currentItem < artistArr.length -1) {
        currentItem++;
    } else {
        currentItem = 0;   
    }
    allItem(currentItem);
})

prevBtn.addEventListener ("click", function(){
    if (currentItem > 0) {
        currentItem--
    }else {
        currentItem = artistArr.length -1;
    }
    allItem(currentItem);
})

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * artistArr.length);
    allItem(currentItem);
})


