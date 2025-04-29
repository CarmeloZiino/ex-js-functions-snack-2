/* 🎯 Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
Esempio di utilizzo:
contoAllaRovescia(5)
Output atteso:
5
4
3
2
1
Tempo scaduto!*/

function countDown(n) {
  let count = n;
  let start = setInterval(() => {
    console.log(`Il Tempo residuo è di ${count} secondi`),
      count--,
      console.log(`Meno ${count} all'autodistruzione`);
    if (count === 0) {
      clearInterval(start), console.log("BOOOOOOOM!");
    }
  }, 1000);
}

countDown(20);
