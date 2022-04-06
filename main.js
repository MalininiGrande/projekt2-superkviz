// Nejdříve si vytvoř objekt, který bude držet voje super otázky :-)
// Data pro kvíz jsou uložena v poli otazky. Každa otázka je objekt, který obsahuje otázku, obrázek k otázce, pole možných odpovědí a index správné odpovědi.


const otazky = [
    {otazka: "Kdo je nejhezčí pes na celém širém světě?", 
    obrazek: "obrazky/Hrabac.jpg", 
    odpoved: ["Pitbul Reda", "Výmar Hantík", "Proč se ptáte na psa, když je na fotce hrabáč?"],
    spravnaOdpoved: "Proč se ptáte na psa, když je na fotce hrabáč?",
},

{otazka: "Kdo se stane příštím prezidentem ČR?", 
obrazek: "obrazky/jirina.jpg", 
odpoved: ["Dana Drábová","Andrej Babiš", "Jiřina Bohdalová"],
spravnaOdpoved: "Jiřina Bohdalová",
},


{otazka: "Co jsem pochopila po sedmi lekcích javascriptu?", 
obrazek: "obrazky/js.png", 
odpoved: ["Pole, Cykly, Objekty", "Skoro nic", "Co je Javascript?"],
spravnaOdpoved: "Skoro nic",
},
];

// Dále budeš potřebovat další proměnné - jaké?
let kviz = document.querySelector('.kviz');
let poradi = document.querySelector('#poradi');
let otazka = document.querySelector('#otazka');
let obrazek = document.querySelector('#obrazek');
let odpovedi = document.querySelector('#odpovedi');
let vysledek = document.querySelector(".vysledek")
let odpovedJedna = document.querySelector('.moznostJedna');
let odpovedDve = document.querySelector('.moznostDva');
let odpovedTri = document.querySelector('.moznostTri');
let kolikataOtazka = 1;
let i = 0;
let a = 0;
let kliknuteOdpovedi = [];
let pocetOdpovedi = otazky[i].odpoved.length;
let pocetOtazek = otazky.length;



// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku() {
otazka.innerHTML = otazky[i].otazka;
poradi.innerHTML = "Otázka " + kolikataOtazka++ + "/3";
obrazek.src = otazky[i].obrazek;
odpovedJedna.innerHTML = otazky[i].odpoved[0];
odpovedDve.innerHTML = otazky[i].odpoved[1];
odpovedTri.innerHTML = otazky[i].odpoved[2];

for (a=0; a < pocetOdpovedi; a++) {
    let element = document.querySelector("li");
    element.dataset.odpoved = a;
    element.innerHTML = otazky[i].odpoved[a];
    odpovedi.appendChild(element);
    element.addEventListener("click", klikNaOdpoved);
}
}

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {
    console.log("klikNaOdpoved");
    kliknuteOdpovedi.push(element.dataset.odpoved);
    odpovedi.innerHTML = "";
    if (i < pocetOtazek) {
    dalsiOtazka();
}
else zobrazVyhodnoceni();
}



function dalsiOtazka() {
   if(i<otazky.length-1)
{ 
    i=i+1,
    zobrazOtazku();
}
    }

    let vyhodnoceni= document.querySelector(".vysledek")
    let otazkaJedna = document.querySelector(".otazkaJedna");
    let otazkaDve = document.querySelector(".otazkaDve");
    let otazkaTri = document.querySelector(".otazkaTri");
    let spravnaJedna = document.querySelector(".spravnaJedna");
    let spravnaDva = document.querySelector(".spravnaDva");
    let spravnaTri= document.querySelector(".spravnaTri");
    let tvojeOdpovedJedna= document.querySelector(".tvojeOdpovedJedna");
    let tvojeOdpovedDva= document.querySelector(".tvojeOdpovedJedna");
    let tvojeOdpovedTri= document.querySelector(".tvojeOdpovedJedna");



function zobrazVyhodnoceni () {
kviz.style.display = "none";
vysledek.style.display = "block";

    for (i=0, i < pocetOtazek; i++;) {
    otazkaJedna.innerHTML = otazky[0].otazka;
    otazkaDva.innerHTML = otazky[1].otazka;
    otazkaTri.innerHTML = otazky[2].otazka;
    spravnaJedna.innerHTML = otazky[0].spravnaOdpoved;
    spravnaDva.innerHTML = otazky[1].spravnaOdpoved;
    spravnaTri.innerHTML = otazky[2].spravnaOdpoved;
    tvojeOdpovedJedna.innerHTML = otazky[i].odpoved[kliknuteOdpovedi[i]];
    tvojeOdpovedDva.innerHTML = otazky[i].odpoved[kliknuteOdpovedi[i+1]];
    tvojeOdpovedTri.innerHTML = otazky[i].odpoved[kliknuteOdpovedi[i+2]];

}
}








// }

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
// function zobrazVyhodnoceni() {
// 
//     spravnaJedna.innerHTML = otazky[0].spravnaOdpoved;
//     spravnaDva.innerHTML = otazky[1].spravnaOdpoved;
//     spravnaTri.innerHTML = otazky[2].spravnaOdpoved;
//     for (let a=0;a<otazky.length;a++) {
//         let seznam = document.createElement("li");
//         seznam.innerHTML = otazky[a].odpoved;
//         vyhodnoceni.appendChild(seznam);
//         }
// }







