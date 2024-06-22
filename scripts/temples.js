const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

document.getElementById("currentyear").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified)