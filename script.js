let images= ["IMG_6270.jpg",
    "IMG_2986.jpg",
    "IMG_6269.jpg",
    "IMG_2971.jpg",
]
let index= 0;
document.getElementById("prev").addEventListener("click", function(){
    index=(index -1 + images.length)% images.length;
    document.getElementById("pic").src= images[index];
});
document.getElementById("forward").addEventListener("click", function(){
    index=(index +1)% images.length;
    document.getElementById("pic").src= images[index];
});

setInterval(function(){
    index=(index +1)% images.length;
    document.getElementById("pic").src= images[index]
}, 3000);



