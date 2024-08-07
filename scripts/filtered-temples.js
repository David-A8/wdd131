const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

document.getElementById("currentyear").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified)

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg"
    },
    {
        templeName: "Provo City Center Utah",
        location: "Provo, Utah",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg"
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho",
        dedicated: "2008, February, 10",
        area: 57504,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-775365-wallpaper.jpg"
    }
];

createTempleCard(temples);

const homepage = document.querySelector("#home");
const oldtemples = document.querySelector("#old");
const newtemples = document.querySelector("#new");
const largetemples = document.querySelector("#large");
const smalltemples = document.querySelector("#small");
var heading = document.getElementById('heading');

homepage.addEventListener("click", () => {
    heading.textContent = 'Home';
    createTempleCard(temples);
})

oldtemples.addEventListener("click", () => {
    event.preventDefault();
    const yearTemple = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0].trim(), 10);
        return year < 1900;
    })
    heading.textContent = 'Old';
    createTempleCard(yearTemple);
})

newtemples.addEventListener("click", () => {
    event.preventDefault();
    const yearTemple = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0].trim(), 10);
        return year > 2000;
    })
    heading.textContent = 'New';
    createTempleCard(yearTemple);
})

largetemples.addEventListener("click", () => {
    event.preventDefault();
    heading.textContent = 'Large';
    createTempleCard(temples.filter(temple => temple.area > 90000))
})

smalltemples.addEventListener("click", () => {
    event.preventDefault();
    heading.textContent = 'Small';
    createTempleCard(temples.filter(temple => temple.area < 100000))
})

function createTempleCard(filteredTemples) {
    document.querySelector("#photos").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("#photos").appendChild(card);
    });
}