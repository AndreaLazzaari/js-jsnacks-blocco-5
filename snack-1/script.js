// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.


const macchine = [
 {
    marca: 'gx225sw',
    modello: 'ford',
    alimentazione:'benzina'
 },

 {
    marca: 'fe231ds',
    modello: 'ferrari',
    alimentazione:'gpl'
 },

 {
    marca: 'gq112dq',
    modello: 'lamborghini',
    alimentazione:'diesel'
 },

 {
    marca: 'gx225sw',
    modello: 'ford',
    alimentazione:'gpl'
 },

 {
    marca: 'gx225sw',
    modello: 'ford',
    alimentazione:'benzina'
 },

 {
    marca: 'gx225sw',
    modello: 'ford',
    alimentazione:'benzina'
 },

 {
    marca: 'gx225sw',
    modello: 'ford',
    alimentazione:'diesel'
 },

 {
    marca: 'gx225sw',
    modello: 'ford',
    alimentazione:'metano'
 },

 {
    marca: 'gx225sw',
    modello: 'ford',
    alimentazione:'gpl'
 },

 {
    marca: 'gx225sw',
    modello: 'ford',
    alimentazione:'benzina'
 }

];

const macchineBenzina = macchine.filter ((macchina) => {
    if(macchina.alimentazione == 'benzina'){
        return true
    }
})

console.log(macchineBenzina)

const macchineDiesel = macchine.filter ((macchina) => {
    if(macchina.alimentazione == 'diesel'){
        return true
    }
})

console.log(macchineDiesel)

const altreMacchine =  macchine.filter ((macchina) => {
    if(macchina.alimentazione != 'diesel' && macchina.alimentazione != 'benzina'){
        return true
    }
})

console.log(altreMacchine)