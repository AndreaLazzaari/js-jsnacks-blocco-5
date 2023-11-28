// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall'altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


const numeri = [1,2,3];
const lettere = ['a','b','c'];

function mistoNumeriLettere() {
    const nuovoArray = []
    nuovoArray.push(numeri[i] + lettere[i]);
    return nuovoArray
}

console.log(mistoNumeriLettere)



// NO ERRORE SBAGLIATO!!!!!