document.getElementById("currentyear").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified)
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString();

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const imagePaths = [
    {
        largePhoto: "images/san-francisco.webp",
        smallPhoto: "images/san-francisco-small.webp"
    },
    {
        largePhoto: "images/seattle.webp",
        smallPhoto: "images/seattle-small.webp"
    },
    {
        largePhoto: "images/portland.webp",
        smallPhoto: "images/portland-small.webp"
    },
    {
        largePhoto: "images/miami.webp",
        smallPhoto: "images/miami-small.webp"
    }
];

let slideIndex = 0;
showSlides();

function showSlides() {
    var imgSource = document.getElementById("hero-source");
    var img = document.getElementById("hero-img")
    img.src = imagePaths[slideIndex].smallPhoto;
    imgSource.srcset = imagePaths[slideIndex].largePhoto;
    slideIndex++;
    if (slideIndex >= imagePaths.length) {
        slideIndex = 0; // Reset slideIndex to loop through images
    }
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}