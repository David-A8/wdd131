document.getElementById("currentyear").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified)
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString();


const products = [
  {
    id: "fc - 1888",
    name: "Flux Capacitor",
    avgragerating: 4.5
  },
  {
    id: "fc - 2050",
    name: "Power Laces",
    averagerating: 4.7
  },
  {
    id: "fs - 1987",
    name: "Time Circuits",
    averagerating: 3.5
  },
  {
    id: "ac - 2000",
    name: "Low Voltage Reactor",
    averagerating: 3.9
  },
  {
    id: "jj - 1969",
    name: "Warp Equalizer",
    averagerating: 5.0
  }
];

populateProducts();

function populateProducts() {
  document.querySelector("#productsList");
  products.forEach(product => {
    let item = document.createElement("option");

    item.textContent = product.name;
    item.value = product.id;
    document.querySelector("#productsList").appendChild(item);
  });
}


