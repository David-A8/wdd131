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

const destinations = [
    {
        destination: "San Francisco",
        state: "California",
        region: "West",
        climate: "Mild, wet winters and warm, dry summers",
        sights: "Golden Gate Bridge, Alcatraz Island, PIER 39",
        image1: "",
        image2: "",
        image3: ""
    },
    {
        destination: "Seattle",
        state: "Washington",
        region: "West",
        climate: "Summers are short, warm, dry, and partly cloudy and the winters are very cold, wet, and mostly cloudy",
        sights: "Space Needle, Pike Place Market, Museum of Pop Culture",
        image1: "",
        image2: "",
        image3: ""
    },
    {
        destination: "Portland",
        state: "Oregon",
        region: "West",
        climate: "Moderate, with dry, warm summers and cool, wet winters that bring rain but little snow",
        sights: "Oregon Zoo, Portland Japanese Garden, Pittock Mansion",
        image1: "",
        image2: "",
        image3: ""
    },
    {
        destination: "Miami",
        state: "Florida",
        region: "South",
        climate: "Tropical with hot and humid summers; short, warm winters",
        sights: "Wynwood Walls, Bayside Marketplace, Little Havana",
        image1: "",
        image2: "",
        image3: ""
    },
    {
        destination: "Chicago",
        state: "Illinois",
        region: "Mid-West",
        climate: "Summers are warm, humid, and wet; the winters are freezing, snowy, and windy; and it is partly cloudy year round",
        sights: "Millennium Park, The Art Institute of Chicago, Museum of Science and Industry",
        image1: "",
        image2: "",
        image3: ""
    },
    {
        destination: "New York City",
        state: "New York",
        region: "North-East",
        climate: "Summers are warm, humid, and wet; the winters are very cold, snowy, and windy; and it is partly cloudy year round",
        sights: "Central Park, Times Square, Statue of Liberty",
        image1: "",
        image2: "",
        image3: ""
    }
]