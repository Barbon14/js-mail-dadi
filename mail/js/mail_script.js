// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere(che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
// Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina.

// dichiarazione variabili (creo un array vuoto)
const invitati=[];
const element = document.getElementById("container");
let accessoConsentito;

// genero mail casuali da aggiungere come elementi all'array
for (i = 0; i <20; i++) {
    let mailCreata = `mail${i}@gmail.com`;
    console.log(mailCreata);
    invitati.push(mailCreata);
}

console.log(invitati);

// chiedo all'utente la sua mail
const mailUtente = prompt("Inserisci la tua mail");
console.log(mailUtente);

// confronto la mail dell'utente con gli elementi dell'array, uso un ciclo for
for (i = 0; i < invitati.length; i++) {

    // se trovo una corrispondenza ammetto l'utente, altrimenti gli nego l'accesso
    if (mailUtente === invitati[i]) {
        accessoConsentito = true;
        break;
    } 
    
    // contollo alternativo, in questo caso non mi servirebbe la successiva parte di codice per scrivere in pagina il risultato

    // if (mailUtente === invitati[i]) {
    //     console.log("accesso consentito");
    //     element.innerHTML = "Accesso consentito";
    //     break;
    // } else {
    //     console.log("accesso negato");
    //     element.innerHTML = "Accesso negato";
    // }
}

// scrivo in pagina se l'utente può avere l'accesso oppure no
if (accessoConsentito === true){
    console.log("accesso consentito");
    element.innerHTML = "Accesso consentito";
} else {
    console.log("accesso negato");
    element.innerHTML = "Accesso negato";
}