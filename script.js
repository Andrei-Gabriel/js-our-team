// Creazione array di oggetti che rappresentano ciascun membro del team
const members = [
    {
        "name": "Wayne",
        "surname": "Barnett",
        "role": "CEO",
        "img": "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        "name": "Walter",
        "surname": "Gordon",
        "role": "Office Manager",
        "img": "img/walter-gordon-office-manager.jpg"
    },
    {
        "name": "Scott",
        "surname": "Estrada",
        "role": "Developer",
        "img": "img/scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara",
        "surname": "Ramos",
        "role": "Graphic Designer",
        "img": "img/barbara-ramos-graphic-designer.jpg"
    },
    {
        "name": "Angela",
        "surname": "Lopez",
        "role": "Social Media Manager",
        "img": "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Angela",
        "surname": "Caroll",
        "role": "Chief Editor",
        "img": "img/angela-caroll-chief-editor.jpg"
    },
];

// Stampa dell'intero oggetto
console.log(members);

// Inserisco dati dei membri nell'HTML sottoforma di card
let membersCard = "";
for(let i = 0; i < members.length; i++){
    // Errore
    // for(let key in members){
    //     membersCard += `
    //     <div class="team-card">
    //         <div class="card-image">
    //           <img
    //             src="${members["img"]}"
    //             alt="${members["surname"]} ${members["name"]}"
    //           />
    //         </div>
    //         <div class="card-text">
    //           <h3>${members["surname"]} ${members["name"]}</h3>
    //           <p>${members["role"]}</p>
    //         </div>
    //     </div>`
    // }

    // Errore
    // for(let key in members){
    //     membersCard += `
    //     <div class="team-card">
    //         <div class="card-image">
    //           <img
    //             src="${members[key]}"
    //             alt="${members[key]} ${members[key]}"
    //           />
    //         </div>
    //         <div class="card-text">
    //           <h3>${members[key]} ${members[key]}</h3>
    //           <p>${members[key]}</p>
    //         </div>
    //     </div>`
    // }

    // Errore
    // for(let key in members){
    //     membersCard += `
    //     <div class="team-card">
    //         <div class="card-image">
    //           <img
    //             src="${members[img]}"
    //             alt="${members[surname]} ${members[name]}"
    //           />
    //         </div>
    //         <div class="card-text">
    //           <h3>${members[surname]} ${members[name]}</h3>
    //           <p>${members[role]}</p>
    //         </div>
    //     </div>`
    // }
}
document.querySelector(".team-container").innerHTML = membersCard;