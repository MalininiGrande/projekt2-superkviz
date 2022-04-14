// Nejdříve si vytvoř objekt, který bude držet voje super otázky :-)
// Data pro kvíz jsou uložena v poli otazky. Každa otázka je objekt, který obsahuje otázku, obrázek k otázce, pole možných odpovědí a index správné odpovědi.


const otazky = [
    {otazka: "Kdo je nejhezčí pes na celém širém světě?", 
    obrazek: "obrazky/Hrabac.jpg", 
    odpoved: ["Pitbul Reda", "Výmar Hantík", "Proč se ptáte na psa, když je na fotce hrabáč?"],
    spravnaOdpoved: "2",
},

{otazka: "Kdo se stane příštím prezidentem ČR?", 
obrazek: "obrazky/jirina.jpg", 
odpoved: ["Dana Drábová","Andrej Babiš", "Jiřina Bohdalová"],
spravnaOdpoved: "2",
},


{otazka: "Co jsem pochopila po sedmi lekcích javascriptu?", 
obrazek: "obrazky/js.png", 
odpoved: ["Pole, Cykly, Objekty", "Skoro nic", "Co je Javascript?"],
spravnaOdpoved: "1",
},
];

// Dále budeš potřebovat další proměnné - jaké?
let kviz = document.querySelector('.kviz');
let poradi = document.querySelector('#poradi');
let otazka = document.querySelector('#otazka');
let obrazek = document.querySelector('#obrazek');
let odpovedi = document.querySelector('#odpovedi');
let vysledek = document.querySelector(".vysledek");


let vybraneOdpovedi = [];
let vybraneOdpovediIndex = 0;
let pocetOtazek = otazky.length;
let indexOtazky = 0;
let indexOdpovedi = 0;


// // Tato funkce se postará o vygenerování otázky
// // Zavoláme ji jednou na začátku a poté vždy po odpovězení

function zobrazOtazku() {
    let pocetOdpovedi = otazky[indexOtazky].odpoved.length;
    poradi.innerHTML = "Otázka " + (indexOtazky + 1) + "/" + otazky.length;
    otazka.innerHTML = otazky[indexOtazky].otazka;
    obrazek.src = otazky[indexOtazky].obrazek;
    console.log("Zobraz index, otazku a obrazek");

    for (i = 0; i < pocetOdpovedi; i++) {

        console.log("Zobraz odpovedi");
        let item = document.createElement("li");
        item.dataset.odpoved = i;
        item.innerHTML = otazky[indexOtazky].odpoved[indexOdpovedi];
        odpovedi.appendChild(item);
        item.addEventListener("click", priKliknuti);
        indexOdpovedi += 1;
    }

    indexOtazky += 1;

}

function priKliknuti() {
    vybraneOdpovedi.push(this.dataset.odpoved);
    odpovedi.innerHTML = "";
    if (indexOtazky < pocetOtazek) {
        zobrazOtazku()
    } else {
        vypisVysledky()
    }
}

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML


function vypisVysledky() {
kviz.style.display = "none";
vysledek.style.display = "block";

    for (i = 0; i < pocetOtazek; i++) {
           console.log("Vytvor vysledky")
        let item = document.createElement("div");
        let itemOtazka = document.createElement("h3")
        itemOtazka.innerHTML = (i + 1) + ". " + otazky[i].otazka;
        let vybranaOdpoved = document.createElement("p");
        vybranaOdpoved.innerHTML = "Tvoje odpověď: " + otazky[i].odpoved[vybraneOdpovedi[i]]
        let spravna = document.createElement("p");
        spravna.innerHTML = "Správná odpověď: " + otazky[i].odpoved[otazky[i].spravnaOdpoved];
    
        vysledek.appendChild(item);
        item.appendChild(itemOtazka);
        item.appendChild(vybranaOdpoved);
        item.appendChild(spravna);
    }

    
// proc se nepocita? Jak dat vysledky na konec?

    let uspesnost = document.createElement("h2");
    let procentoUspechu = ((vybraneOdpovediIndex * 100) / pocetOtazek);
    hodnoceni.innerHTML = "Správně " + vybraneOdpovediIndex + " ze " + pocetOtazek + " otázek. Úspěšnost " + Math.floor(procentoUspechu) + "%."
    vysledek.appendChild(uspesnost);

}








