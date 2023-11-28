// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti


const team = [
    {
        nome: 'Virtus',
        punti: 100,
        falli: 15
    },

    {
        nome: 'Lecce',
        punti: 59,
        falli: 45
    },

    {
        nome: 'Milano',
        punti: 140,
        falli: 17
    },

    {
        nome: 'Lecco',
        punti: 89,
        falli: 5
    },

    {
        nome: 'Algarve',
        punti: 179,
        falli: 37
    },
]

const nuovoArray = team.map((punti, falli) => {
    punti = Math.floor(Math.random() * 150)
    falli = Math.floor(Math.random * 100)

})

console.log(nuovoArray)