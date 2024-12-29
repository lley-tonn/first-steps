const images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg',];
let currentIndex=0;
const sliderimg = document.getElementById('sliderimg');
const prevbtn = document.getElementById('prevbtn');
const nextbtn = document.getElementById('nextbtn');

function updateImage(){
    sliderimg.src = images[currentIndex];
}

prevbtn.addEventListener('click',()=>{
    currentIndex = (currentIndex-1+images.length)%images.length;
    updateImage();
});

nextbtn.addEventListener('click',()=>{
    currentIndex = (currentIndex+1)%images.length;
    updateImage();
});

setInterval(()=>{
    currentIndex = (currentIndex+1)%images.length;
    updateImage();
},3000)