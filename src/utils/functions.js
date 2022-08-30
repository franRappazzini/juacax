/*
1. Cartón de 3 row por 9 columns
2. El cartón debe tener 15 números y 12 espacios en blanco
3. Cada fila debe tener 5 números
4. Cada columna debe tener 1 o 2 números
5. Ningún número puede repetirse
6. La primer columna contiene los números del 1 al 9, la segunda del 10 al 19, la tercera del 20 al 29, así sucesivamente hasta la última columna la cual contiene del 80 al 90
*/

function randomNum(num) {
  return Math.floor(Math.random() * num);
}

export function completeCarton() {
  const carton = [[], [], [], [], [], [], [], [], []];

  // lleno el carton de numeros
  for (let i = 0; i < carton.length; i++) {
    const min = i * 9 + i || 1; // para que la primer vuelta sea 1 y no 0
    const max = min + 9;

    while (carton[i].length < 3) {
      const num = randomNum(max - min) + min;
      if (!carton[i].includes(num)) carton[i].push(num);
    }

    carton[i].sort((a, b) => a - b);
  }

  // TODO ver borrado de numeros (4 por fila tienen que borrarse)

  // saco 9 numeros aleatoriamente
  for (let i = 0; i < carton.length; i++) {
    const num = randomNum(3);
    console.log(num);
    carton[i][num] = " ";
  }

  // saco 3 numeros aleatoriamente mas
  let i = 0;
  while (i < 3) {
    const index = randomNum(8);
    const num = randomNum(3);

    if (carton[index][num] !== " ") {
      carton[index][num] = " ";
      i++;
    }
  }

  console.log(carton);
  return carton;
}