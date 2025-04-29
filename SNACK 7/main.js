/*  🏆 Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.*/
console.log("SNACK 7");

function eseguiEferma(text, start, stop) {
  let interval = setInterval(() => {
    console.log(text);
  }, start);
  setTimeout(() => {
    console.log("Guarda che sono brava! Mi fermo da sola");
    clearInterval(interval);
  }, stop);
}

eseguiEferma("Ciao, sono la funzione Esegui e Ferma", 500, 3000);
