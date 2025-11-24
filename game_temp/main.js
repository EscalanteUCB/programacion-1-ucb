// Constante con el mapa fijo (25x25)


// 0 = vacío
// 1 = muro sólido
// 2 = camino
// 3 = ladrillo destructible
// 4 = agua
// 5 = base/objetivo

const MAP_DATA = [
  [1,1,1,1,1,1,1,1,1,1], // fila superior: muro
  [1,2,2,2,2,2,2,2,2,1], // camino abierto
  [1,2,3,3,0,0,3,3,2,1], // ladrillos y huecos
  [1,2,0,4,4,4,4,0,2,1], // agua en el centro
  [1,2,3,0,5,5,0,3,2,1], // base protegida
  [1,2,0,4,4,4,4,0,2,1], // simétrico al de arriba
  [1,2,3,3,0,0,3,3,2,1], // ladrillos otra vez
  [1,2,2,2,2,2,2,2,2,1], // camino abierto
  [1,2,2,2,2,2,2,2,2,1], // camino abierto
  [1,1,1,1,100,1,1,1,1,1], // fila inferior: muro
];



/*

const MAP_DATA = [];
for (let i = 0; i < 25; i++) {
  const row = [];
  for (let j = 0; j < 25; j++) {
    row.push(Math.floor(Math.random() * 198)); // 0 a 197
  }
  MAP_DATA.push(row);
}
*/