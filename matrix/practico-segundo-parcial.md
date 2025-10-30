
# Práctico de Matrices en JavaScript con Clase `Matrix`

Este práctico contiene 25 ejercicios de nivel medio a avanzado para trabajar con la clase `Matrix`.  

---

## Ejercicio 1. Suma de todos los elementos
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Implementa un método que recorra toda la matriz y devuelva la suma de sus elementos.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Recorrer con bucles anidados y acumular la suma.  

**Resultado:**
```js
12    45    7    30    18
22    11    9    50    33
44    21    8    19    27
10    5     6    40    15

Suma total: 432
```

# Ejercicio 2. Máximo y mínimo

**Enunciado:**  
Genera una matriz con números aleatorios y encuentra el valor máximo y mínimo.

**Pasos sugeridos:**  
1. Crear la matriz con `fillRandom(min, max)`.  
2. Inicializar `max` y `min` con el primer valor de la matriz.  
3. Recorrer toda la matriz comparando y actualizando `max` y `min`.  
4. Mostrar la matriz junto con los valores encontrados.

**Resultado:**
```js
15    3    27
9     12   8
20    5    11

Máximo: 27  Mínimo: 3
```

# Ejercicio 3. Promedio de elementos

**Enunciado:**  
Genera una matriz con números aleatorios y calcula el promedio de todos sus elementos.

**Pasos sugeridos:**  
1. Crear la matriz con `fillRandom(min, max)`.  
2. Recorrer sumando todos los valores de la matriz.  
3. Dividir la suma entre `rows * cols` para obtener el promedio.  
4. Mostrar la matriz y el resultado.

**Resultado:**
```js
10    20    5    15
7     12    18   3
9     14    6    11
4     8     16   2

Promedio: 10.25
```

# Ejercicio 4. Contar ocurrencias

**Enunciado:**  
Genera una matriz de números aleatorios y cuenta cuántas veces aparece un número específico dentro de ella.

**Pasos sugeridos:**  
1. Crear la matriz con `fillRandom(min, max)`.  
2. Definir un número objetivo a buscar.  
3. Recorrer la matriz con bucles anidados y contar las coincidencias.  
4. Mostrar la matriz y el resultado.

**Resultado:**
```js
2    3    1    5    4
3    2    3    1    5
4    1    2    3    2
5    4    3    1    2
2    5    4    3    1

El número 3 aparece 6 veces
```
# Ejercicio 5. Invertir filas

**Enunciado:**  
Invierte el orden de los elementos en cada fila de la matriz.

**Pasos sugeridos:**  
1. Crear la matriz con `fillRandom(min, max)`.  
2. Para cada fila, recorrer hasta la mitad de las columnas.  
3. Intercambiar el elemento en la posición `j` con el de la posición `cols - 1 - j`.  
4. Mostrar la matriz resultante.

**Resultado:**
```js
Original (antes de invertir):
2    4    7    9
5    1    3    8
6    2    4    7

Resultado (después de invertir):
9    7    4    2
8    3    1    5
7    4    2    6
```
# Ejercicio 6. Rotar matriz 90 grados

**Enunciado:**  
Rota una matriz cuadrada 90 grados en sentido horario.

**Pasos sugeridos:**  
1. Crear una matriz cuadrada con `fillRandom(min, max)`.  
2. Crear una nueva matriz vacía del mismo tamaño.  
3. Asignar cada valor de la matriz original a su nueva posición:  
   - `rotada[j][n - 1 - i] = original[i][j]`.  
4. Mostrar la matriz original y la rotada.

**Resultado:**
```js
Original:
1    2    3
4    5    6
7    8    9

Rotada 90°:
7    4    1
8    5    2
9    6    3
```
# Ejercicio 7. Transpuesta de una matriz

**Enunciado:**  
Calcula la transpuesta de una matriz cuadrada. La transpuesta se obtiene intercambiando filas por columnas, es decir, el elemento en la posición `(i, j)` pasa a la posición `(j, i)`.

**Pasos sugeridos:**  
1. Crear una matriz cuadrada con `fillRandom(min, max)`.  
2. Crear una nueva matriz vacía del mismo tamaño.  
3. Recorrer la matriz original y asignar cada valor a su posición transpuesta.  
4. Mostrar la matriz original y la transpuesta.

**Resultado:**
```js
Original:
1    2    3
4    5    6
7    8    9

Transpuesta:
1    4    7
2    5    8
3    6    9
```
# Ejercicio 8. Multiplicación de matrices

**Enunciado:**  
Multiplica dos matrices cuadradas de igual tamaño. El resultado es otra matriz cuadrada donde cada elemento en la posición `(i, j)` se obtiene como la suma del producto de los elementos de la fila `i` de la primera matriz por los elementos de la columna `j` de la segunda matriz.

**Pasos sugeridos:**  
1. Crear dos matrices cuadradas con `fillRandom(min, max)`.  
2. Crear una tercera matriz vacía para almacenar el resultado.  
3. Usar tres bucles anidados:  
   - El primero recorre las filas de la primera matriz.  
   - El segundo recorre las columnas de la segunda matriz.  
   - El tercero recorre los elementos de la fila y columna para calcular el producto escalar.  
4. Asignar el resultado a la posición correspondiente en la matriz resultado.  
5. Mostrar las tres matrices.

**Resultado:**
```js
Matriz A:
1    2    3
4    5    6
7    8    9

Matriz B:
9    8    7
6    5    4
3    2    1

Resultado C = A * B:
30   24   18
84   69   54
138  114  90
```
# Ejercicio 9. Diagonal principal

**Enunciado:**  
Devuelve los elementos de la diagonal principal de una matriz cuadrada.  
La diagonal principal está formada por los elementos en las posiciones `(i, i)`.

**Pasos sugeridos:**  
1. Crear una matriz cuadrada con `fillRandom(min, max)`.  
2. Recorrer la matriz con un solo índice `i`.  
3. Extraer los valores en la posición `(i, i)`.  
4. Guardar los valores en un arreglo y mostrarlos junto con la matriz.

**Ejemplo de uso en JavaScript:**
```js
3    7    2    5
4    9    6    1
8    2    4    7
5    6    3    8

Diagonal principal: [3, 9, 4, 8]
```
# Ejercicio 10. Diagonal secundaria

**Enunciado:**  
Devuelve los elementos de la diagonal secundaria de una matriz cuadrada.  
La diagonal secundaria está formada por los elementos en las posiciones `(i, n - 1 - i)`.

**Pasos sugeridos:**  
1. Crear una matriz cuadrada con `fillRandom(min, max)`.  
2. Recorrer la matriz con un solo índice `i`.  
3. Extraer los valores en la posición `(i, n - 1 - i)`.  
4. Guardar los valores en un arreglo y mostrarlos junto con la matriz.

**Resultado:**
```js
3    7    2    5
4    9    6    1
8    2    4    7
5    6    3    8

Diagonal secundaria: [5, 6, 2, 5]
```
# Ejercicio 11. Suma de filas

**Enunciado:**  
Dada una matriz bidimensional, devuelve un arreglo con la suma de cada fila.

**Pasos sugeridos:**  
1. Crear una matriz con `fillRandom(min, max)`.  
2. Recorrer cada fila de la matriz.  
3. Para cada fila, sumar todos sus elementos.  
4. Guardar la suma en un arreglo de resultados.  
5. Mostrar la matriz y el arreglo de sumas.

**Resultado:**
```js
3    7    2    5    1
4    9    6    1    2
8    2    4    7    3
5    6    3    8    4

Suma de cada fila: [18, 22, 24, 26]
```
# Ejercicio 12. Suma de columnas

**Enunciado:**  
Dada una matriz bidimensional, devuelve un arreglo con la suma de cada columna.

**Pasos sugeridos:**  
1. Crear una matriz con `fillRandom(min, max)`.  
2. Inicializar un arreglo de sumas con tantos elementos como columnas tenga la matriz.  
3. Recorrer la matriz por filas y columnas, acumulando en la posición correspondiente del arreglo de sumas.  
4. Mostrar la matriz y el arreglo de sumas.

**Resultado:**
```js
3    7    2    5    1
4    9    6    1    2
8    2    4    7    3
5    6    3    8    4

Suma de cada columna: [20, 24, 15, 21, 10]
```
# Ejercicio 13. Transpuesta de una matriz (in-place)

**Enunciado:**  
Dada una matriz cuadrada, calcula su transpuesta **en la misma matriz** (sin crear una nueva).  
La transpuesta se obtiene intercambiando filas por columnas, es decir, el elemento en la posición `(i, j)` pasa a la posición `(j, i)`.

**Pasos sugeridos:**  
1. Crear una matriz cuadrada con `fillRandom(min, max)`.  
2. Recorrer solo la mitad superior de la matriz (para no intercambiar dos veces).  
3. Intercambiar `m[i][j]` con `m[j][i]` cuando `i < j`.  
4. Mostrar la matriz original y la transpuesta.

**Resultado:**
```js
Original:
1    2    3    4
5    6    7    8
9    1    2    3
4    5    6    7

Transpuesta (in-place):
1    5    9    4
2    6    1    5
3    7    2    6
4    8    3    7

```
# Ejercicio 14. Matriz identidad

**Enunciado:**  
Genera una matriz identidad de tamaño `n x n`.  
La matriz identidad es aquella que tiene `1` en la diagonal principal y `0` en el resto de posiciones.

**Pasos sugeridos:**  
1. Crear una matriz cuadrada de tamaño `n`.  
2. Recorrer con dos índices `(i, j)`.  
3. Si `i === j`, asignar `1`; en caso contrario, asignar `0`.  
4. Mostrar la matriz resultante.

**Resultado:**
```js
1    0    0    0
0    1    0    0
0    0    1    0
0    0    0    1
```
# Ejercicio 15. Matriz simétrica

**Enunciado:**  
Verifica si una matriz cuadrada es simétrica.  
Una matriz es simétrica si se cumple que `m[i][j] === m[j][i]` para todos los índices.

**Pasos sugeridos:**  
1. Crear una matriz cuadrada con `fillRandom(min, max)` o manualmente.  
2. Recorrer la mitad superior de la matriz (cuando `j > i`).  
3. Comparar cada elemento con su simétrico.  
4. Si todos coinciden, la matriz es simétrica; de lo contrario, no lo es.  
5. Mostrar la matriz y el resultado.

**Resultado:**
```js
1    2    3
2    4    5
3    5    6

¿Es simétrica? true
```
# Ejercicio 16. Matriz triangular superior

**Enunciado:**  
Verifica si una matriz cuadrada es triangular superior.  
Una matriz es triangular superior si todos los elementos por debajo de la diagonal principal son iguales a `0`.

**Pasos sugeridos:**  
1. Crear una matriz cuadrada con `fillRandom(min, max)` o manualmente.  
2. Recorrer la matriz verificando las posiciones `(i, j)` donde `i > j`.  
3. Si alguno de esos valores es distinto de `0`, la matriz no es triangular superior.  
4. Mostrar la matriz y el resultado.

**Resultado:**
```js
1    2    3    4
0    5    6    7
0    0    8    9
0    0    0    10

¿Es triangular superior? true
```
# Ejercicio 17. Matriz triangular inferior

**Enunciado:**  
Verifica si una matriz cuadrada es triangular inferior.  
Una matriz es triangular inferior si todos los elementos por encima de la diagonal principal son iguales a `0`.

**Pasos sugeridos:**  
1. Crear una matriz cuadrada con `fillRandom(min, max)` o manualmente.  
2. Recorrer la matriz verificando las posiciones `(i, j)` donde `j > i`.  
3. Si alguno de esos valores es distinto de `0`, la matriz no es triangular inferior.  
4. Mostrar la matriz y el resultado.

**Resultado:**
```js
1    0    0    0
2    3    0    0
4    5    6    0
7    8    9    10

¿Es triangular inferior? true
```
# Ejercicio 18. Suma de diagonales

**Enunciado:**  
Calcula la suma de los elementos de la diagonal principal y de la diagonal secundaria de una matriz cuadrada.

**Pasos sugeridos:**  
1. Crear una matriz cuadrada con `fillRandom(min, max)`.  
2. Recorrer la matriz con un solo índice `i`.  
3. Acumular en una variable la suma de la diagonal principal `(i, i)`.  
4. Acumular en otra variable la suma de la diagonal secundaria `(i, n - 1 - i)`.  
5. Mostrar la matriz y ambas sumas.

**Resultado:**
```js
3    7    2    5
4    9    6    1
8    2    4    7
5    6    3    8

Suma diagonal principal: 24
Suma diagonal secundaria: 20
```
# Ejercicio 19. Suma de bordes

**Enunciado:**  
Calcula la suma de todos los elementos que se encuentran en el borde de una matriz (primera fila, última fila, primera columna y última columna).

**Pasos sugeridos:**  
1. Crear una matriz con `fillRandom(min, max)`.  
2. Recorrer todos los elementos de la matriz.  
3. Identificar si un elemento está en el borde:  
   - Fila `0` o fila `rows - 1`  
   - Columna `0` o columna `cols - 1`  
4. Acumular la suma de esos elementos.  
5. Mostrar la matriz y el resultado.

**Resultado:**
```js
3    7    2    5    1
4    9    6    1    2
8    2    4    7    3
5    6    3    8    4

Suma de los bordes: 57
```
# Ejercicio 20. Elemento máximo y mínimo

**Enunciado:**  
Encuentra el valor máximo y el valor mínimo dentro de una matriz, junto con sus posiciones.

**Pasos sugeridos:**  
1. Crear una matriz con `fillRandom(min, max)`.  
2. Inicializar variables para `max`, `min` y sus posiciones.  
3. Recorrer todos los elementos de la matriz.  
4. Actualizar `max` y `min` cuando corresponda, guardando también las coordenadas `(i, j)`.  
5. Mostrar la matriz y los resultados.

**Resultado:**
```js
12   45   67   23   9
34   56   78   11   5
89   21   33   44   66
10   8    99   7    15

Máximo: 99 en posición (3, 2)
Mínimo: 5 en posición (1, 4)
```
# Ejercicio 21. Promedio de la matriz

**Enunciado:**  
Calcula el promedio (media aritmética) de todos los elementos de una matriz.

**Pasos sugeridos:**  
1. Crear una matriz con `fillRandom(min, max)`.  
2. Recorrer todos los elementos de la matriz.  
3. Acumular la suma total de los valores.  
4. Dividir la suma entre el número total de elementos (`rows * cols`).  
5. Mostrar la matriz y el promedio.

**Resultado:**
```js
3    7    2    5    1
4    9    6    1    2
8    2    4    7    3
5    6    3    8    4

Promedio de la matriz: 4.55
```
# Ejercicio 22. Contar números pares e impares

**Enunciado:**  
Cuenta cuántos números pares e impares hay en una matriz.

**Pasos sugeridos:**  
1. Crear una matriz con `fillRandom(min, max)`.  
2. Inicializar dos contadores: `pares` e `impares`.  
3. Recorrer todos los elementos de la matriz.  
4. Si el valor es divisible entre 2, incrementar `pares`; en caso contrario, incrementar `impares`.  
5. Mostrar la matriz y los resultados.

**Resultado:**
```js
3    7    2    5    1
4    8    6    1    2
8    2    4    7    3
5    6    3    8    4

Cantidad de pares: 11
Cantidad de impares: 9
```
# Ejercicio 23. Buscar un valor en la matriz

**Enunciado:**  
Dada una matriz, determina si un número específico se encuentra en ella y devuelve todas sus posiciones.

**Pasos sugeridos:**  
1. Crear una matriz con `fillRandom(min, max)`.  
2. Definir un número objetivo a buscar.  
3. Recorrer todos los elementos de la matriz.  
4. Si el valor coincide con el objetivo, guardar su posición `(i, j)` en un arreglo de resultados.  
5. Mostrar la matriz, el número buscado y las posiciones encontradas.

**Resultado:**
```js
3    7    2    5    1
4    9    6    1    2
8    2    5    7    3
5    6    3    8    4

Número buscado: 5
Posiciones encontradas: [ [0, 3], [2, 2], [3, 0] ]
```
# Ejercicio 24. Suma de elementos por encima y por debajo de la diagonal principal

**Enunciado:**  
Dada una matriz cuadrada, calcula la suma de los elementos que están **por encima** de la diagonal principal y la suma de los que están **por debajo**.

**Pasos sugeridos:**  
1. Crear una matriz cuadrada con `fillRandom(min, max)`.  
2. Inicializar dos acumuladores: `sumaArriba` y `sumaAbajo`.  
3. Recorrer la matriz con dos índices `(i, j)`.  
   - Si `j > i`, el elemento está arriba de la diagonal → sumar en `sumaArriba`.  
   - Si `i > j`, el elemento está abajo de la diagonal → sumar en `sumaAbajo`.  
4. Mostrar la matriz y los resultados.

**Resultado:**
```js
3    7    2    5
4    9    6    1
8    2    4    7
5    6    3    8

Suma arriba de la diagonal: 21
Suma abajo de la diagonal: 25
```
# Ejercicio 25. Matriz espejo (reflejo horizontal)

**Enunciado:**  
Genera una nueva matriz que sea el reflejo horizontal de la original.  
Es decir, cada fila se invierte de izquierda a derecha.

**Pasos sugeridos:**  
1. Crear una matriz con `fillRandom(min, max)`.  
2. Crear una nueva matriz vacía del mismo tamaño.  
3. Para cada fila, copiar los elementos en orden inverso.  
4. Mostrar la matriz original y la reflejada.

**Resultado:**
```js
Original:
1    2    3    4
5    6    7    8
9    1    2    3

Espejo horizontal:
4    3    2    1
8    7    6    5
3    2    1    9
```








