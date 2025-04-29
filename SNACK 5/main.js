
/*  🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.*/

console.log("SNACK 5");

function ogniSecondo(text) {
  return setInterval(() => {
    console.log(text);
  }, 1000);
}
let timerID = ogniSecondo("Che dura la vita! ");

setTimeout(() => {
  clearInterval(timerID);
  console.log("Mi sono stancato di stampare. Mo' basta.");
}, 10000);
