
/*  🏆 Snack 6
Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.*/
console.log("SNACK 6");

function creaContatoreAutomatico(tempo) {
  let count = 0;

  return setInterval(() => {
    count++;
    console.log(`Ogni 5 secondi conto un numero. Siamo a: ${count}`);
  }, tempo);
}

let counter = creaContatoreAutomatico(5000);

