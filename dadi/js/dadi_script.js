// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero 2 numeri casuali interi tra 1 e 6 e li 
// uno sarà assegnato all'utente e l'altro al computer
const risultati = document.getElementById("container");

const userNum = Math.floor(Math.random() * 6) + 1;
console.log("il numero dell'utente è ", userNum);
risultati.innerHTML += `Il tuo numero è ${userNum} <br>`;

const pcNum = Math.floor(Math.random() * 6) + 1;
console.log("il numero del computer è ", pcNum);
risultati.innerHTML += `Il numero del computer è ${pcNum} <br>`;

// confronto i due numeri
// il più alto sarà il vincitore
// stampo il nome di chi ha vinto o se è un pareggio
if (userNum === pcNum) {
    console.log("È un pareggio");
    risultati.innerHTML += `È un pareggio.`;
} else if (userNum > pcNum) {
    console.log("L'utente ha vinto");
    risultati.innerHTML += `Hai vinto!`;
} else {
    console.log("Il computer ha vinto");
    risultati.innerHTML += `Il computer ha vinto. Ritenta aggiornando la pagina.`;
}
