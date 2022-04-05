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
let poradi = document.querySelector('#poradi');
let otazka = document.querySelector('#otazka');
let obrazek = document.querySelector('#obrazek');
let odpovedJedna = document.querySelector('.moznostJedna');
let odpovedDve = document.querySelector('.moznostDva');
let odpovedTri = document.querySelector('.moznostTri');
let kolikataOtazka = 1;
let i = 0;




// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku() {
console.log("zobrazOtazku");
otazka.innerHTML = otazky[i].otazka;
poradi.textContent = "Otázka " + kolikataOtazka++ + "/3";
obrazek.src = otazky[i].obrazek;
odpovedJedna.innerHTML = otazky[i].odpoved[0];
odpovedDve.innerHTML = otazky[i].odpoved[1];
odpovedTri.innerHTML = otazky[i].odpoved[2];
}



// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {
    console.log("klikNaOdpoved")
    dalsiOtazka();
}


function dalsiOtazka() {
   if(i<otazky.length-1)
{ 
    i=i+1,
    console.log("dalsiOtazka")
    zobrazOtazku();
}
    }







// }

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {}







