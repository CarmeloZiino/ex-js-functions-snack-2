/* 🎯 Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
Esempio di utilizzo:
sequenzaOperazioni([
  () => console.log("Operazione 1"),
  () => console.log("Operazione 2"),
  () => console.log("Operazione 3")
], 2000);
Output atteso:
Operazione 1
Operazione 2
Operazione 3*/

let operazioni = [
  (a, b) => {
    let results = a + b;
    console.log(
      `L'operazione è la somma, i numeri sono ${a} e ${b} e il risultato è ${results}`
    );
  },
  (a, b) => {
    let results = a - b;
    console.log(
      `L'operazione è la sottrazione, i numeri sono ${a} e ${b} e il risultato è ${results}`
    );
  },
  (a, b) => {
    let results = a * b;
    console.log(
      `L'operazione è la moltiplicazione, i numeri sono ${a} e ${b} e il risultato è ${results}`
    );
  },
  (a, b) => {
    let results = a / b;
    console.log(
      `L'operazione è la divisione, i numeri sono ${a} e ${b} e il risultato è ${results}`
    );
  },
];

//PRIMO MODO - CON SetIntervale
// function sequenzaOperazione(array, tempo) {
//   let i = 0;

//   let start = setInterval(() => {
//     array[i](5, 6), i++;

//     if (i >= array.length) {
//       clearInterval(start);
//       console.log("Non ho più operazioni da eseguire. Fattene una ragione.");
//     }
//   }, tempo);
// }

// sequenzaOperazione(operazioni, 2000);

//SECONDO MODO - SENZA SetInterval

function sequenzaOperazione(array, tempo) {
  array.forEach((array, index) => {
    setTimeout(() => {
      array(8, 23);
      if (index > array.length) {
        setTimeout(() => {
          console.log(
            "Non ho più operazioni da eseguire. Fattene una ragione."
          );
        }, 1000);
      }
    }, tempo * index);
  });
}

sequenzaOperazione(operazioni, 1000);
