let planetArray = ["Mercure", "Vénus", "Terre", "Mars", "Jupiter", "Saturne", "Uranus", "Neptune", "Pluton"]
let planetColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'brown', 'aqua'];

const planetDiv = planetArray.map(() => {

    let eltPlanet = document.createElement('div');
    eltPlanet.classList.add('planet');
    console.log(eltPlanet);
    return eltPlanet;
})

for (let i = 0; i < planetArray.length; i++) {
    planetDiv[i].textContent = planetArray[i];
    planetDiv[i].classList.add(planetArray[i]);

}

//Ajoutez une classe de couleur de fond différente à chaque div de planète :
for (let index = 0; index < planetColors.length; index++) {
    planetDiv[index].style.background = planetColors[index];
}


//Ajoutez chaque div de planète au <section> dans le HTML :

const listPlanets = document.querySelector('.listPlanets');
planetDiv.forEach((div) => {
    listPlanets.appendChild(div);
});