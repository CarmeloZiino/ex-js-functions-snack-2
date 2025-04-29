/* 🏆 Snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. */
console.log("SNACK 1");

function somma(primoNumero, secondoNumero) {
  //Crea una funzione dichiarativa chiamata somma che accetta due numeri

  return primoNumero + secondoNumero; //e restituisce la loro somma.
}

console.log("il risultato della funzione dichiarativa somma è:", somma(5, 9)); //Output 14

let variabileSomma = function (numerouno, numerodue) {
  //Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
  return numerouno + numerodue;
};
console.log(
  "il risultato della funzione anonima somma è:",
  variabileSomma(23, 2)
); //Output 25

let arrowSomma = (first, second) => {
  //Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
  return first + second;
};
console.log("il risultato della Arrow function somma è:", arrowSomma(37, 13)); //Output 25

/*  🏆 Snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.*/
console.log("SNACK 2");

let alQuadrato = (numero) =>
  console.log(
    `Ho scelto il numero ${numero} e il suo quadrato è: ${numero * numero}`
  ); //Output: 25
alQuadrato(5);
alQuadrato(3);
alQuadrato(54);

/*  🏆 Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). 
La funzione deve eseguire l'operazione fornita sui due numeri.

Esempio d’uso:
const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;
​
const eseguiOperazione = (a, b, operazione) => operazione(a, b);
​
console.log(eseguiOperazione(3, 4, somma)); // 7
console.log(eseguiOperazione(3, 4, moltiplica)); // 12*/

console.log("SNACK 3");

const sottrazione = (a, b) => a - b;
const divisione = (a, b) => a / b;
const eseguiOperazione = (numeroUno, numeroDue, operazione) =>
  operazione(numeroUno, numeroDue); //Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).

console.log(eseguiOperazione(10, 3, sottrazione));
console.log(eseguiOperazione(15, 3, divisione));

/*  🏆 Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) 
e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".*/

console.log("SNACK 4");

function creaTimer(tempo) {
  return function () {
    console.log(`Il timer di ${tempo} è iniziato...`);
    setTimeout(() => {
      console.log("TEMPO SCADUTO (Snack 4)");
    }, tempo);
  };
}

const fiveSecond = creaTimer(5000);
fiveSecond();
