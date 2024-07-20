document.getElementById("currentyear").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified)
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString();

const destinations = [
    {
        destination: "San Francisco",
        state: "California",
        region: "West",
        climate: "Mild, wet winters and warm, dry summers",
        sights: "Golden Gate Bridge, Alcatraz Island, PIER 39",
        image1: "images/golden-gate.webp",
        image2: "images/alcatraz.webp",
        image3: "images/pier-39.webp"
    },
    {
        destination: "Seattle",
        state: "Washington",
        region: "West",
        climate: "Summers are short, warm, dry, and partly cloudy and the winters are very cold, wet, and mostly cloudy",
        sights: "Space Needle, Pike Place Market, Museum of Pop Culture",
        image1: "images/space-needle.webp",
        image2: "images/public market.webp",
        image3: "images/pop-museum.webp"
    },
    {
        destination: "Portland",
        state: "Oregon",
        region: "West",
        climate: "Moderate, with dry, warm summers and cool, wet winters that bring rain but little snow",
        sights: "Oregon Zoo, Portland Japanese Garden, Pittock Mansion",
        image1: "images/oregon-zoo.webp",
        image2: "images/japanese-garden.webp",
        image3: "images/pittock.webp.webp"
    },
    {
        destination: "Miami",
        state: "Florida",
        region: "South",
        climate: "Tropical with hot and humid summers; short, warm winters",
        sights: "Wynwood Walls, Bayside Marketplace, Little Havana",
        image1: "images/wynwood.webp",
        image2: "images/bayside.webp",
        image3: "images/little-havana.webp"
    },
    {
        destination: "Chicago",
        state: "Illinois",
        region: "Mid-West",
        climate: "Summers are warm, humid, and wet; the winters are freezing, snowy, and windy; and it is partly cloudy year round",
        sights: "Millennium Park, The Art Institute of Chicago, Museum of Science and Industry",
        image1: "images/millennium.webp",
        image2: "images/art-institute.webp",
        image3: "images/museum-science.webp"
    },
    {
        destination: "New York City",
        state: "New York",
        region: "North-East",
        climate: "Summers are warm, humid, and wet; the winters are very cold, snowy, and windy; and it is partly cloudy year round",
        sights: "Central Park, Times Square, Statue of Liberty",
        image1: "images/central-park.webp",
        image2: "images/times-square.webp",
        image3: "images/statue-liberty.webp"
    }
];

createDestinationCard(destinations);

const wholeList = document.getElementById("all");
const west = document.querySelector("#west");
const south = document.querySelector("#south");
const midWest = document.querySelector("#midWest");
const northEast = document.querySelector("#northEast");
var heading = document.getElementById('heading');

wholeList.addEventListener("click", () => {
    event.preventDefault();
    heading.textContent = 'Nationwide';
    createDestinationCard(destinations);
})

west.addEventListener("click", () => {
    event.preventDefault();
    heading.textContent = 'West';
    createDestinationCard(destinations.filter(place => place.region == "West"));
})

south.addEventListener("click", () => {
    event.preventDefault();
    heading.textContent = 'South';
    createDestinationCard(destinations.filter(place => place.region == "South"));
})

midWest.addEventListener("click", () => {
    event.preventDefault();
    heading.textContent = 'Mid-West';
    createDestinationCard(destinations.filter(place => place.region == "Mid-West"));
})

northEast.addEventListener("click", () => {
    event.preventDefault();
    heading.textContent = 'North-East';
    createDestinationCard(destinations.filter(place => place.region == "North-East"));
})

function createDestinationCard(filteredDestinations) {
    document.getElementById("cards").innerHTML = "";
    filteredDestinations.forEach(place => {
        let card = document.createElement("section");
        let location = document.createElement("h2");
        let state = document.createElement("p");
        let region = document.createElement("p");
        let climate = document.createElement("p");
        let sights = document.createElement("p");
        let img = document.createElement("img");

        location.textContent = place.destination;
        state.innerHTML = `<span class="label">State:</span> ${place.state}`;
        region.innerHTML = `<span class="label">Region:</span> ${place.region}`;
        climate.innerHTML = `<span class="label">Climate:</span> ${place.climate}`;
        sights.innerHTML = `<span class="label">Must visit places:</span>${place.sights}`;
        img.setAttribute("src", place.image1);
        img.setAttribute("alt", `${place.destination}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(location);
        card.appendChild(state);
        card.appendChild(region);
        card.appendChild(climate);
        card.appendChild(sights);
        card.appendChild(img);

        document.getElementById("cards").appendChild(card);
    });
}