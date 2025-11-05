# Práctico de Matrices en JavaScript con Clase `Matrix`

Este práctico contiene 42 ejercicios para su examen recuperatorio del segundo parcial donde deberán trabajar con la clase `Matrix`.  

---

## Ejercicio 26. Reflejo vertical de la matriz  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Implementa un método que invierta la matriz verticalmente, es decir, que intercambie las filas de arriba hacia abajo.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Intercambiar la fila `i` con la fila `n - 1 - i` hasta la mitad.  

**Resultado:**
```js
12    45    7    30    18
22    11    9    50    33
44    21    8    19    27
10    5     6    40    15

Reflejo vertical:
10    5     6    40    15
44    21    8    19    27
22    11    9    50    33
12    45    7    30    18
```

---

## Ejercicio 27. Reflejo horizontal de la matriz  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Implementa un método que invierta cada fila horizontalmente, es decir, que refleje los valores de izquierda a derecha.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Para cada fila, intercambiar columna `j` con `m - 1 - j`.  

**Resultado:**
```js
12    45    7    30    18
22    11    9    50    33
44    21    8    19    27
10    5     6    40    15

Reflejo horizontal:
18    30    7    45    12
33    50    9    11    22
27    19    8    21    44
15    40    6    5     10
```

---

## Ejercicio 28. Rotación 90° a la derecha  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores aleatorios entre 1 y 100. Implementa un método que genere una nueva matriz rotada 90° en sentido horario.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Crear nueva matriz y asignar `rotada[j][n - 1 - i] = original[i][j]`.  

**Resultado:**
```js
12    45    7
22    11    9
44    21    8

Rotada 90°:
44    22    12
21    11    45
8     9     7
```

---


## Ejercicio 29. Rotación 90° a la izquierda  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores aleatorios entre 1 y 100. Implementa un método que genere una nueva matriz rotada 90° en sentido antihorario.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Crear nueva matriz y asignar `rotada[n - 1 - j][i] = original[i][j]`.  

**Resultado:**
```js
12    45    7
22    11    9
44    21    8

Rotada 90° izquierda:
7     9     8
45    11    21
12    22    44
```

---


## Ejercicio 30. Rotación 180°  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Implementa un método que genere una nueva matriz rotada 180°, es decir, como si se girara completamente.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Crear nueva matriz y asignar `rotada[n - 1 - i][m - 1 - j] = original[i][j]`.  

**Resultado:**
```js
12    45    7    30    18
22    11    9    50    33
44    21    8    19    27
10    5     6    40    15

Rotada 180°:
15    40    6    5     10
27    19    8    21    44
33    50    9    11    22
18    30    7    45    12
```

---

## Ejercicio 31. Intercambiar filas pares por impares  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Implementa un método que intercambie cada fila par con la siguiente fila impar. Esta operación es útil para reorganizar datos en estructuras alternadas o simulaciones por turnos.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Recorrer las filas de dos en dos y aplicar el intercambio entre `i` y `i + 1`.  

**Resultado:**
```js
12    45    7    30    18
22    11    9    50    33
44    21    8    19    27
10    5     6    40    15

Intercambio de pares/impares:
22    11    9    50    33
12    45    7    30    18
10    5     6    40    15
44    21    8    19    27
```

---


## Ejercicio 32. Intercambiar columnas pares por impares  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Implementa un método que intercambie cada columna par con la siguiente columna impar. Esta transformación puede utilizarse para alterar el orden de variables en matrices de entrada.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Recorrer las columnas de dos en dos y aplicar el intercambio entre `j` y `j + 1`.  

**Resultado:**
```js
12    45    7    30    18
22    11    9    50    33
44    21    8    19    27
10    5     6    40    15

Intercambio de columnas pares/impares:
45    12    30    7    18
11    22    50    9    33
21    44    19    8    27
5     10    40    6    15
```

---


## Ejercicio 33. Intercambiar primera y última fila  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Implementa un método que intercambie la primera fila con la última. Esta operación es útil en algoritmos de inversión de datos o reorganización de encabezados y pies de tabla.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Intercambiar la fila `0` con la fila `n - 1`.  

**Resultado:**
```js
12    45    7    30    18
22    11    9    50    33
44    21    8    19    27
10    5     6    40    15

Intercambio de primera y última fila:
10    5     6    40    15
22    11    9    50    33
44    21    8    19    27
12    45    7    30    18
```

---


## Ejercicio 34. Intercambiar primera y última columna  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Implementa un método que intercambie la primera columna con la última. Esta transformación puede utilizarse para reorganizar extremos de datos o aplicar simetrías horizontales.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Para cada fila, intercambiar columna `0` con columna `m - 1`.  

**Resultado:**
```js
12    45    7    30    18
22    11    9    50    33
44    21    8    19    27
10    5     6    40    15

Intercambio de primera y última columna:
18    45    7    30    12
33    11    9    50    22
27    21    8    19    44
15    5     6    40    10
```

---


## Ejercicio 35. Transponer solo la mitad superior  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores aleatorios entre 1 y 100. Implementa un método que transcriba únicamente los valores por encima de la diagonal principal, dejando el resto intacto. Esta operación es útil en análisis de correlaciones parciales o estructuras simétricas parciales.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Para cada par `(i, j)` donde `j > i`, intercambiar `m[i][j]` con `m[j][i]`.  

**Resultado:**
```js
12    45    7
22    11    9
44    21    8

Transposición parcial:
12    22    44
45    11    21
7     9     8
```

---

## Ejercicio 36. Contar ceros en la matriz  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 0 y 9. Implementa un método que recorra toda la matriz y cuente cuántos ceros contiene.  
Este tipo de conteo es útil en análisis de datos faltantes, matrices de dispersión, codificación binaria y detección de valores nulos en estructuras tabulares.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(0, 9)`.  
3. Recorrer con bucles anidados y contar cada vez que el valor sea igual a `0`.  

**Resultado:**
```js
0    4    7    0    2
3    0    1    5    6
0    8    0    9    0
2    0    3    0    1

Cantidad de ceros: 8
```

---


## Ejercicio 37. Contar valores mayores que el promedio  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Calcula el promedio de todos los elementos y cuenta cuántos valores son mayores que ese promedio.  
Este ejercicio permite practicar el análisis estadístico básico sobre estructuras matriciales, útil en minería de datos, segmentación y evaluación de distribuciones.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Calcular la suma total y el promedio.  
4. Recorrer la matriz y contar los valores mayores al promedio.  

**Resultado:**
```js
12    45    7    30    18
22    11    9    50    33
44    21    8    19    27
10    5     6    40    15

Promedio: 22.8  
Valores mayores que el promedio: 9
```

---


## Ejercicio 38. Contar valores únicos  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 20. Implementa un método que determine cuántos valores distintos hay en la matriz.  
Este tipo de análisis es útil en compresión de datos, detección de redundancia, codificación categórica y evaluación de diversidad en conjuntos de datos.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 20)`.  
3. Recorrer la matriz y almacenar los valores en un conjunto (`Set`).  
4. Mostrar la cantidad de elementos únicos.  

**Resultado:**
```js
12    4    7    4    2
3     4    1    5    6
12    8    4    9    2
2     4    3    4    1

Valores únicos: 10
```

---


## Ejercicio 39. Frecuencia de cada número  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 9. Implementa un método que calcule cuántas veces aparece cada número en la matriz.  
Este ejercicio permite construir histogramas de frecuencia, útiles en análisis estadístico, visualización de datos y compresión por conteo.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 9)`.  
3. Crear un objeto o arreglo de frecuencias.  
4. Recorrer la matriz y actualizar el conteo por cada valor.  

**Resultado:**
```js
1    4    7    4    2
3    4    1    5    6
1    8    4    9    2
2    4    3    4    1

Frecuencia:
1 → 4 veces  
2 → 3 veces  
3 → 2 veces  
4 → 6 veces  
5 → 1 vez  
6 → 1 vez  
7 → 1 vez  
8 → 1 vez  
9 → 1 vez
```

---


## Ejercicio 40. Detectar filas duplicadas  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 9. Implementa un método que detecte si hay filas idénticas dentro de la matriz.  
Este tipo de verificación es útil en limpieza de datos, detección de redundancia, validación de registros y optimización de estructuras repetitivas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 9)` o definir manualmente.  
3. Convertir cada fila en una cadena o arreglo.  
4. Comparar todas las filas entre sí y marcar las duplicadas.  

**Resultado:**
```js
1    4    7    4    2
3    4    1    5    6
1    4    7    4    2
2    4    3    4    1

Filas duplicadas:
Fila 0 y Fila 2 son idénticas
```

---

## Ejercicio 41. Detectar columnas duplicadas  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 9. Implementa un método que detecte si hay columnas idénticas dentro de la matriz.  
Este tipo de verificación es útil en limpieza de datos, detección de redundancia estructural, validación de variables repetidas y optimización de modelos tabulares.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 9)` o definir manualmente.  
3. Convertir cada columna en una cadena o arreglo.  
4. Comparar todas las columnas entre sí y marcar las duplicadas.  

**Resultado:**
```js
1    4    7    4    2
3    4    1    4    6
1    4    7    4    2
2    4    3    4    1

Columnas duplicadas:
Columna 1 y Columna 3 son idénticas
```

---


## Ejercicio 42. Detectar simetría vertical  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 9. Implementa un método que verifique si la matriz es simétrica respecto al eje vertical.  
Este tipo de análisis es útil en procesamiento de imágenes, diseño de patrones, validación de estructuras reflejadas y simulaciones físicas con simetría axial.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 9)` o definir manualmente.  
3. Para cada fila, comparar columna `j` con columna `m - 1 - j`.  
4. Si todas las filas cumplen, la matriz es simétrica verticalmente.  

**Resultado:**
```js
1    2    3    2    1
4    5    6    5    4
7    8    9    8    7

¿Es simétrica verticalmente?: true
```

---


## Ejercicio 43. Detectar simetría horizontal  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 9. Implementa un método que verifique si la matriz es simétrica respecto al eje horizontal.  
Este tipo de verificación es útil en análisis de estructuras reflejadas, simulaciones físicas, diseño de interfaces y validación de patrones visuales.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 9)` o definir manualmente.  
3. Para cada columna, comparar fila `i` con fila `n - 1 - i`.  
4. Si todas las columnas cumplen, la matriz es simétrica horizontalmente.  

**Resultado:**
```js
1    2    3    4    5
6    7    8    9    0
6    7    8    9    0
1    2    3    4    5

¿Es simétrica horizontalmente?: true
```

---


## Ejercicio 44. Detectar simetría diagonal secundaria  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores aleatorios entre 1 y 9. Implementa un método que verifique si la matriz es simétrica respecto a la diagonal secundaria.  
Este tipo de simetría aparece en estructuras matemáticas, matrices de adyacencia, diseño de algoritmos y análisis de patrones cruzados.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 9)` o definir manualmente.  
3. Para cada par `(i, j)`, comparar `m[i][j]` con `m[n - 1 - j][n - 1 - i]`.  
4. Si todos los pares coinciden, la matriz es simétrica respecto a la diagonal secundaria.  

**Resultado:**
```js
1    2    3
4    5    6
3    2    1

¿Es simétrica diagonal secundaria?: true
```

---


## Ejercicio 45. Detectar patrón escalonado  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 9. Implementa un método que verifique si cada fila contiene un valor más que la anterior, formando un patrón escalonado.  
Este tipo de patrón es útil en simulaciones progresivas, estructuras jerárquicas, diseño de ejercicios secuenciales y análisis de crecimiento.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar manualmente o con lógica progresiva.  
3. Verificar que la longitud de la fila `i` sea igual a `i + 1`.  
4. Validar que los valores sigan un orden creciente o definido.  

**Resultado:**
```js
1
2    3
4    5    6
7    8    9    10

¿Tiene patrón escalonado?: true
```

---

## Ejercicio 46. Generar matriz escalonada  
**Enunciado:**  
Crea una matriz de tamaño `n x m` donde cada fila contenga un valor más que la anterior, formando un patrón escalonado.  
Este tipo de matriz es útil en simulaciones de crecimiento, estructuras jerárquicas, progresiones numéricas y diseño de ejercicios secuenciales.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar manualmente o con lógica progresiva.  
3. Para cada fila `i`, asignar valores desde `i * m + 1` hasta `(i + 1) * m`.  

**Resultado:**
```js
1    2    3    4    5
6    7    8    9    10
11   12   13   14   15
16   17   18   19   20
```

---


## Ejercicio 47. Generar matriz tipo tablero de ajedrez  
**Enunciado:**  
Crea una matriz de tamaño `n x m` que alterne valores `0` y `1` en forma de tablero de ajedrez.  
Este patrón es útil en diseño de interfaces, simulaciones de casillas, codificación binaria y visualización de alternancia.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada posición `(i, j)`, asignar `1` si `(i + j) % 2 === 0`, y `0` en caso contrario.  

**Resultado:**
```js
1    0    1    0    1
0    1    0    1    0
1    0    1    0    1
0    1    0    1    0
```

---


## Ejercicio 48. Generar matriz con diagonales en 1  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con `1` en la diagonal principal y secundaria, y `0` en el resto.  
Este tipo de matriz es útil en visualización de simetrías, estructuras cruzadas, y diseño de máscaras para algoritmos matriciales.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada posición `(i, j)`, asignar `1` si `i === j` o `i + j === n - 1`, y `0` en caso contrario.  

**Resultado:**
```js
1    0    0    0    1
0    1    0    1    0
0    0    1    0    0
0    1    0    1    0
1    0    0    0    1
```

---


## Ejercicio 49. Generar matriz con borde en 1  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con `1` en el borde y `0` en el interior.  
Este patrón es útil en simulaciones de contornos, diseño de marcos, estructuras de aislamiento y visualización de límites.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada posición `(i, j)`, asignar `1` si `i === 0`, `i === n - 1`, `j === 0` o `j === m - 1`; de lo contrario, asignar `0`.  

**Resultado:**
```js
1    1    1    1    1
1    0    0    0    1
1    0    0    0    1
1    0    0    0    1
1    1    1    1    1
```

---


## Ejercicio 50. Generar matriz con patrón triangular  
**Enunciado:**  
Crea una matriz de tamaño `n x n` donde los valores formen un triángulo creciente desde la esquina superior izquierda.  
Este tipo de patrón es útil en simulaciones de acumulación, estructuras jerárquicas, y diseño de ejercicios de progresión.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada posición `(i, j)`, asignar `i + j + 1` si `j <= i`, y `0` en caso contrario.  

**Resultado:**
```js
1    0    0    0    0
2    3    0    0    0
3    4    5    0    0
4    5    6    7    0
5    6    7    8    9
```

---

## Ejercicio 51. Generar matriz en espiral  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` que se llene en orden espiral desde la esquina superior izquierda.  
Este tipo de patrón es útil en visualización de datos, algoritmos de recorrido, simulaciones de expansión y diseño de estructuras envolventes.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Definir variables para los límites superior, inferior, izquierdo y derecho.  
3. Llenar la matriz en orden espiral usando bucles controlados por los límites.  

**Resultado:**
```js
1    2    3    4
12   13   14   5
11   16   15   6
10   9    8    7
```

---


## Ejercicio 52. Generar matriz en zigzag horizontal  
**Enunciado:**  
Crea una matriz de tamaño `n x m` que se llene en zigzag horizontal, alternando el sentido de llenado por fila.  
Este patrón es útil en codificación de imágenes, simulaciones de barrido, y recorridos alternados en estructuras tabulares.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada fila `i`, llenar de izquierda a derecha si `i` es par, y de derecha a izquierda si `i` es impar.  

**Resultado:**
```js
1    2    3    4
8    7    6    5
9    10   11   12
16   15   14   13
```

---


## Ejercicio 53. Generar matriz en zigzag vertical  
**Enunciado:**  
Crea una matriz de tamaño `n x m` que se llene en zigzag vertical, alternando el sentido de llenado por columna.  
Este patrón se utiliza en algoritmos de compresión, recorridos de columnas alternadas y simulaciones de flujo vertical.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada columna `j`, llenar de arriba hacia abajo si `j` es par, y de abajo hacia arriba si `j` es impar.  

**Resultado:**
```js
1    8    9    16
2    7    10   15
3    6    11   14
4    5    12   13
```

---


## Ejercicio 54. Generar matriz con múltiplos de 3  
**Enunciado:**  
Crea una matriz de tamaño `n x m` que se llene con múltiplos de 3 en orden creciente.  
Este tipo de matriz es útil en ejercicios de divisibilidad, simulaciones numéricas, y generación de secuencias controladas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Usar un contador que comience en 3 y se incremente de 3 en 3.  
3. Asignar el valor del contador a cada celda.  

**Resultado:**
```js
3    6    9    12
15   18   21   24
27   30   33   36
39   42   45   48
```

---


## Ejercicio 55. Generar matriz con números primos  
**Enunciado:**  
Crea una matriz de tamaño `n x m` que se llene con los primeros `n * m` números primos.  
Este tipo de matriz es útil en criptografía, teoría de números, simulaciones de filtrado y diseño de patrones no repetitivos.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Crear una función que detecte si un número es primo.  
3. Llenar la matriz con los primeros `n * m` primos encontrados.  

**Resultado:**
```js
2    3    5    7
11   13   17   19
23   29   31   37
41   43   47   53
```

---


## Ejercicio 56. Multiplicar matriz por escalar  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 10. Implementa un método que multiplique todos los elementos de la matriz por un escalar dado.  
Esta operación es fundamental en álgebra lineal, transformación de datos, ajustes de escala en simulaciones y normalización de estructuras numéricas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 10)`.  
3. Definir un escalar `k`.  
4. Multiplicar cada elemento de la matriz por `k`.  

**Resultado:**
```js
Matriz original:
2    4    1    3
5    6    2    7
8    1    3    4

Escalar: 3

Matriz resultante:
6    12   3    9
15   18   6    21
24   3    9    12
```

---


## Ejercicio 57. Sumar dos matrices  
**Enunciado:**  
Crea dos matrices de tamaño `n x m` con valores aleatorios entre 1 y 50. Implementa un método que sume ambas matrices elemento a elemento.  
Este tipo de operación es esencial en procesamiento de señales, combinación de capas de datos, y simulaciones de acumulación.

**Pasos sugeridos:**  
1. Instanciar dos matrices del mismo tamaño.  
2. Llenar ambas con `fillRandom(1, 50)`.  
3. Crear una tercera matriz para almacenar la suma.  
4. Para cada posición `(i, j)`, sumar los valores de ambas matrices.  

**Resultado:**
```js
Matriz A:
10   20   30
5    15   25

Matriz B:
1    2    3
4    5    6

Matriz suma:
11   22   33
9    20   31
```

---


## Ejercicio 58. Multiplicar dos matrices  
**Enunciado:**  
Crea dos matrices compatibles para multiplicación matricial: una de tamaño `n x p` y otra de tamaño `p x m`. Implementa el producto clásico de matrices.  
Este ejercicio es clave en álgebra lineal, redes neuronales, transformaciones geométricas y simulaciones multidimensionales.

**Pasos sugeridos:**  
1. Instanciar matriz A de tamaño `n x p` y matriz B de tamaño `p x m`.  
2. Llenar ambas con `fillRandom(1, 10)`.  
3. Crear matriz C de tamaño `n x m`.  
4. Para cada posición `(i, j)` en C, calcular la suma de productos `A[i][k] * B[k][j]`.  

**Resultado:**
```js
Matriz A (2x3):
1    2    3
4    5    6

Matriz B (3x2):
7    8
9    10
11   12

Matriz producto (2x2):
58   64
139  154
```

---


## Ejercicio 59. Verificar si una matriz es identidad  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n`. Implementa un método que verifique si la matriz es identidad, es decir, tiene `1` en la diagonal principal y `0` en el resto.  
Este tipo de matriz es fundamental en transformaciones lineales, sistemas de ecuaciones, y como base en operaciones matriciales.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar manualmente o con lógica condicional.  
3. Para cada posición `(i, j)`, verificar que `m[i][j] === 1` si `i === j`, y `m[i][j] === 0` en caso contrario.  

**Resultado:**
```js
1    0    0
0    1    0
0    0    1

¿Es matriz identidad?: true
```

---


## Ejercicio 60. Verificar si una matriz es diagonal  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n`. Implementa un método que verifique si la matriz es diagonal, es decir, todos los elementos fuera de la diagonal principal son cero.  
Este tipo de matriz aparece en simplificaciones de sistemas, análisis espectral, y estructuras de covarianza en estadística.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar manualmente o con lógica condicional.  
3. Para cada posición `(i, j)`, verificar que `m[i][j] === 0` si `i !== j`.  

**Resultado:**
```js
5    0    0
0    3    0
0    0    7

¿Es matriz diagonal?: true
```

---


## Ejercicio 61. Verificar si una matriz es nula  
**Enunciado:**  
Crea una matriz de tamaño `n x m`. Implementa un método que verifique si todos los elementos son cero, es decir, si la matriz es nula.  
Este tipo de verificación es útil en inicialización de estructuras, detección de ausencia de datos, y validación de condiciones en algoritmos matriciales.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar manualmente o con `fillRandom(0, 0)` para pruebas.  
3. Recorrer todos los elementos y verificar que todos sean cero.  

**Resultado:**
```js
0    0    0
0    0    0
0    0    0

¿Es matriz nula?: true
```

---


## Ejercicio 62. Verificar si una matriz es ortogonal  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n`. Implementa un método que verifique si la matriz es ortogonal, es decir, si su transpuesta es igual a su inversa.  
Este tipo de matriz aparece en transformaciones geométricas, rotaciones, álgebra lineal avanzada y optimización numérica.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar manualmente con valores conocidos o usar matrices de rotación.  
3. Calcular la transpuesta y la inversa.  
4. Verificar si ambas son iguales.  

**Resultado:**
```js
0    1
1    0

¿Es matriz ortogonal?: true
```

---


## Ejercicio 63. Normalizar matriz  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Implementa un método que normalice todos los valores al rango `[0, 1]`.  
Este tipo de transformación es útil en preprocesamiento de datos, aprendizaje automático, visualización proporcional y análisis comparativo.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Encontrar el valor mínimo y máximo.  
4. Aplicar la fórmula: `(valor - min) / (max - min)` a cada elemento.  

**Resultado:**
```js
12    45    7    30
22    11    9    50

Matriz normalizada:
0.11  0.84  0.00  0.51
0.26  0.10  0.03  1.00
```

---


## Ejercicio 64. Aplicar umbral binario  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 0 y 255. Implementa un método que convierta todos los valores mayores a un umbral en `1`, y el resto en `0`.  
Este tipo de operación es común en procesamiento de imágenes, segmentación binaria, y detección de regiones activas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(0, 255)`.  
3. Definir un umbral `t`.  
4. Para cada elemento, asignar `1` si `valor >= t`, y `0` en caso contrario.  

**Resultado:**
```js
120   45    200   30
255   100   90    10

Umbral: 100

Matriz binaria:
1     0     1     0
1     1     0     0
```

---


## Ejercicio 65. Aplicar máscara booleana  
**Enunciado:**  
Crea dos matrices de tamaño `n x m`: una con valores numéricos y otra con valores `0` y `1` como máscara. Implementa un método que conserve los valores donde la máscara tiene `1` y coloque `0` donde tiene `0`.  
Este tipo de técnica se usa en filtrado de datos, procesamiento de imágenes, y selección condicional en estructuras matriciales.

**Pasos sugeridos:**  
1. Instanciar dos matrices del mismo tamaño.  
2. Llenar la matriz de datos con `fillRandom(1, 100)`.  
3. Llenar la máscara con `fillRandom(0, 1)`.  
4. Aplicar la máscara: `resultado[i][j] = datos[i][j] * mascara[i][j]`.  

**Resultado:**
```js
Matriz original:
12    45    7    30
22    11    9    50

Máscara:
1     0     1    0
0     1     0    1

Matriz filtrada:
12    0     7    0
0     11    0    50
```

---

## Ejercicio 66. Extraer submatriz central  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Implementa un método que extraiga una submatriz de tamaño `p x q` ubicada en el centro de la matriz original.  
Esta operación es útil en procesamiento de imágenes, análisis de regiones de interés, y extracción de núcleos para filtrado o comparación.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Calcular las coordenadas de inicio para extraer la submatriz central.  
4. Copiar los valores correspondientes a una nueva matriz.  

**Resultado:**
```js
Matriz original (5x5):
12   45   7    30   18
22   11   9    50   33
44   21   8    19   27
10   5    6    40   15
99   88   77   66   55

Submatriz central (3x3):
11   9    50
21   8    19
5    6    40
```

---


## Ejercicio 67. Extraer borde como arreglo  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores aleatorios entre 1 y 100. Implementa un método que extraiga todos los valores del borde (primera y última fila, primera y última columna) en un arreglo plano.  
Este tipo de extracción es útil en análisis de contornos, simulaciones de límites, y visualización de marcos externos.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Recorrer la primera y última fila, y las columnas extremas de las filas intermedias.  
4. Almacenar los valores en un arreglo.  

**Resultado:**
```js
Matriz:
12   45   7    30   18
22   11   9    50   33
44   21   8    19   27
10   5    6    40   15

Borde extraído:
[12, 45, 7, 30, 18, 22, 33, 44, 27, 10, 5, 6, 40, 15]
```

---


## Ejercicio 68. Extraer diagonales como arreglos  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores aleatorios entre 1 y 100. Implementa un método que extraiga la diagonal principal y la diagonal secundaria como dos arreglos separados.  
Este tipo de operación es útil en análisis de simetrías, estructuras cruzadas, y evaluación de trayectorias diagonales en matrices.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Recorrer la diagonal principal (`i === j`) y secundaria (`i + j === n - 1`).  
4. Almacenar los valores en dos arreglos distintos.  

**Resultado:**
```js
Matriz:
12   45   7
22   11   9
44   21   8

Diagonal principal: [12, 11, 8]  
Diagonal secundaria: [7, 11, 44]
```

---


## Ejercicio 69. Detectar si una matriz es simétrica  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n`. Implementa un método que verifique si la matriz es simétrica respecto a su diagonal principal, es decir, si `m[i][j] === m[j][i]` para todos los elementos.  
Este tipo de matriz es común en álgebra lineal, matrices de adyacencia, estructuras de correlación y análisis de simetrías.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar manualmente o con `fillRandom(1, 100)`.  
3. Para cada par `(i, j)`, verificar que `m[i][j] === m[j][i]`.  

**Resultado:**
```js
12   22   44
22   11   21
44   21   8

¿Es matriz simétrica?: true
```

---


## Ejercicio 70. Generar matriz triangular superior  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores aleatorios entre 1 y 100. Implementa un método que conserve los valores por encima de la diagonal principal y coloque ceros en el resto.  
Este tipo de matriz se utiliza en factorizaciones LU, resolución de sistemas escalonados, y estructuras jerárquicas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Para cada posición `(i, j)`, conservar el valor si `j >= i`, y colocar `0` en caso contrario.  

**Resultado:**
```js
12   45   7
22   11   9
44   21   8

Triangular superior:
12   45   7
0    11   9
0    0    8
```

---

## Ejercicio 71. Generar matriz triangular inferior  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores aleatorios entre 1 y 100. Implementa un método que conserve los valores por debajo de la diagonal principal y coloque ceros en el resto.  
Este tipo de matriz se utiliza en factorizaciones LU, resolución de sistemas escalonados inversos, y estructuras jerárquicas descendentes.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 100)`.  
3. Para cada posición `(i, j)`, conservar el valor si `i >= j`, y colocar `0` en caso contrario.  

**Resultado:**
```js
12   45   7
22   11   9
44   21   8

Triangular inferior:
12   0    0
22   11   0
44   21   8
```

---


## Ejercicio 72. Generar matriz con patrón de cruz  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores `1` en la fila y columna central, y `0` en el resto.  
Este patrón es útil en diseño de máscaras, simulaciones de intersección, y visualización de ejes centrales.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Calcular el índice central `c = Math.floor(n / 2)`.  
3. Para cada posición `(i, j)`, asignar `1` si `i === c` o `j === c`, y `0` en caso contrario.  

**Resultado:**
```js
0   0   1   0   0
0   0   1   0   0
1   1   1   1   1
0   0   1   0   0
0   0   1   0   0
```

---


## Ejercicio 73. Generar matriz con patrón de X  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores `1` en ambas diagonales, y `0` en el resto.  
Este patrón es útil en visualización de simetrías cruzadas, diseño de filtros diagonales, y estructuras de intersección.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada posición `(i, j)`, asignar `1` si `i === j` o `i + j === n - 1`, y `0` en caso contrario.  

**Resultado:**
```js
1   0   0   0   1
0   1   0   1   0
0   0   1   0   0
0   1   0   1   0
1   0   0   0   1
```

---


## Ejercicio 74. Generar matriz con patrón de borde alternado  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores alternados `1` y `0` en el borde, comenzando por `1` en la esquina superior izquierda. El interior debe ser `0`.  
Este patrón es útil en diseño de marcos decorativos, simulaciones de pulsos, y estructuras de borde dinámico.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada posición `(i, j)` en el borde, alternar entre `1` y `0` según la posición.  
3. Para el interior, asignar `0`.  

**Resultado:**
```js
1   0   1   0   1
0   0   0   0   0
1   0   0   0   1
0   0   0   0   0
1   0   1   0   1
```

---


## Ejercicio 75. Generar matriz con patrón de espina de pescado  
**Enunciado:**  
Crea una matriz de tamaño `n x m` que se llene en zigzag diagonal, simulando el patrón de una espina de pescado.  
Este tipo de patrón es útil en visualización de flujo, diseño de recorridos alternados, y simulaciones de dispersión.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Usar una lógica diagonal alternada para llenar los valores.  
3. Alternar la dirección de llenado en cada diagonal.  

**Resultado:**
```js
1   2   6   7
3   5   8   13
4   9   12  14
10  11  15  16
```

---

## Ejercicio 76. Generar matriz con patrón de serpiente  
**Enunciado:**  
Crea una matriz de tamaño `n x m` que se llene en forma de serpiente: de izquierda a derecha en la primera fila, derecha a izquierda en la segunda, y así sucesivamente.  
Este patrón es útil en recorridos alternados, simulaciones de movimiento, codificación de imágenes y estructuras de lectura secuencial.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Usar un contador para llenar los valores.  
3. Alternar el sentido de llenado por fila: izquierda a derecha si `i` es par, derecha a izquierda si `i` es impar.  

**Resultado:**
```js
1    2    3    4
8    7    6    5
9    10   11   12
16   15   14   13
```

---


## Ejercicio 77. Generar matriz con patrón de columnas alternadas  
**Enunciado:**  
Crea una matriz de tamaño `n x m` que se llene por columnas, alternando el sentido de llenado: de arriba hacia abajo en columnas pares, y de abajo hacia arriba en columnas impares.  
Este patrón es útil en simulaciones de flujo vertical, codificación de columnas, y recorridos alternados en estructuras tabulares.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Usar un contador para llenar los valores.  
3. Para cada columna `j`, llenar de arriba hacia abajo si `j` es par, y de abajo hacia arriba si `j` es impar.  

**Resultado:**
```js
1    8    9    16
2    7    10   15
3    6    11   14
4    5    12   13
```

---


## Ejercicio 78. Generar matriz con patrón de espiral inversa  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` que se llene en orden espiral desde la esquina inferior derecha hacia el centro.  
Este patrón es útil en simulaciones de contracción, recorridos envolventes inversos, y diseño de estructuras centrípetas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Definir límites y dirección de recorrido.  
3. Llenar la matriz en espiral inversa usando bucles controlados.  

**Resultado:**
```js
16   15   14   13
5    4    3    12
6    1    2    11
7    8    9    10
```

---


## Ejercicio 79. Generar matriz con patrón de zigzag diagonal  
**Enunciado:**  
Crea una matriz de tamaño `n x m` que se llene en zigzag diagonal, alternando el sentido de llenado en cada diagonal.  
Este patrón es útil en codificación de imágenes, simulaciones de dispersión, y recorridos diagonales alternados.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Usar una lógica de diagonales para recorrer la matriz.  
3. Alternar el sentido de llenado en cada diagonal.  

**Resultado:**
```js
1    2    6    7
3    5    8    13
4    9    12   14
10   11   15   16
```

---


## Ejercicio 80. Generar matriz con patrón de capas concéntricas  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` que se llene por capas concéntricas, asignando un número distinto a cada capa desde el borde hacia el centro.  
Este patrón es útil en simulaciones de expansión, visualización de niveles, y diseño de estructuras jerárquicas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Definir el número de capas como `Math.ceil(n / 2)`.  
3. Para cada capa, asignar un número único y recorrer sus bordes.  

**Resultado:**
```js
1   1   1   1   1
1   2   2   2   1
1   2   3   2   1
1   2   2   2   1
1   1   1   1   1
```

---


## Ejercicio 81. Generar matriz con patrón de pirámide numérica  
**Enunciado:**  
Crea una matriz de tamaño `n x n` donde los valores formen una pirámide numérica centrada, con números crecientes desde la parte superior hasta la base.  
Este patrón es útil en visualización de jerarquías, simulaciones de acumulación, y diseño de estructuras simétricas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada fila `i`, calcular el número de elementos activos centrados.  
3. Asignar valores crecientes en la zona activa y ceros en el resto.  

**Resultado:**
```js
0   0   1   0   0
0   2   3   4   0
5   6   7   8   9
```

---


## Ejercicio 82. Generar matriz con patrón de diamante  
**Enunciado:**  
Crea una matriz cuadrada de tamaño impar `n x n` con valores `1` formando un diamante centrado, y `0` en el resto.  
Este patrón es útil en diseño de máscaras, simulaciones de expansión radial, y visualización de zonas de influencia.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Calcular el centro `c = Math.floor(n / 2)`.  
3. Para cada posición `(i, j)`, asignar `1` si `Math.abs(i - c) + Math.abs(j - c) <= c`.  

**Resultado:**
```js
0   0   1   0   0
0   1   1   1   0
1   1   1   1   1
0   1   1   1   0
0   0   1   0   0
```

---


## Ejercicio 83. Generar matriz con patrón de escalera  
**Enunciado:**  
Crea una matriz de tamaño `n x m` donde los valores formen una escalera diagonal ascendente, colocando `1` en posiciones `(i, i)` y ceros en el resto.  
Este patrón es útil en simulaciones de progresión, diseño de estructuras diagonales, y visualización de trayectorias.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada posición `(i, j)`, asignar `1` si `i === j`, y `0` en caso contrario.  

**Resultado:**
```js
1   0   0   0
0   1   0   0
0   0   1   0
0   0   0   1
```

---


## Ejercicio 84. Generar matriz con patrón de flecha  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores `1` formando una flecha apuntando hacia abajo: una columna central y una línea diagonal descendente desde la parte superior.  
Este patrón es útil en visualización de dirección, simulaciones de flujo, y diseño de indicadores gráficos.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Calcular el centro `c = Math.floor(n / 2)`.  
3. Para cada posición `(i, j)`, asignar `1` si `j === c` o `i === j && i <= c`.  

**Resultado:**
```js
1   0   1   0   0
0   1   1   0   0
0   0   1   0   0
0   0   1   0   0
0   0   1   0   0
```

---


## Ejercicio 85. Generar matriz con patrón de reloj de arena  
**Enunciado:**  
Crea una matriz cuadrada de tamaño impar `n x n` con valores `1` formando un reloj de arena: triángulo invertido sobre triángulo normal.  
Este patrón es útil en simulaciones de flujo descendente, estructuras simétricas, y diseño de filtros visuales.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Calcular el centro `c = Math.floor(n / 2)`.  
3. Para cada posición `(i, j)`, asignar `1` si `Math.abs(i - c) <= j && j < n - Math.abs(i - c)`.  

**Resultado:**
```js
1   1   1   1   1
0   1   1   1   0
0   0   1   0   0
0   1   1   1   0
1   1   1   1   1
```

---

## Ejercicio 86. Generar matriz con patrón de espejo diagonal  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores aleatorios entre 1 y 9. Implementa un método que refleje la matriz respecto a la diagonal principal, como si fuera un espejo.  
Este tipo de transformación es útil en simulaciones de simetría, procesamiento de imágenes, y análisis de estructuras reflejadas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 9)`.  
3. Para cada par `(i, j)` donde `j > i`, intercambiar `m[i][j]` con `m[j][i]`.  

**Resultado:**
```js
1   2   3
4   5   6
7   8   9

Reflejo diagonal:
1   4   7
2   5   8
3   6   9
```

---


## Ejercicio 87. Generar matriz con patrón de serpiente vertical  
**Enunciado:**  
Crea una matriz de tamaño `n x m` que se llene en forma de serpiente vertical: de arriba hacia abajo en la primera columna, abajo hacia arriba en la segunda, y así sucesivamente.  
Este patrón es útil en recorridos alternados por columnas, simulaciones de flujo vertical, y codificación de estructuras tabulares.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Usar un contador para llenar los valores.  
3. Alternar el sentido de llenado por columna: arriba hacia abajo si `j` es par, abajo hacia arriba si `j` es impar.  

**Resultado:**
```js
1    8    9    16
2    7    10   15
3    6    11   14
4    5    12   13
```

---

## Ejercicio 88. Generar matriz con patrón de columnas espejo  
**Enunciado:**  
Crea una matriz de tamaño `n x m` donde las columnas se reflejen respecto al centro vertical: la primera columna es igual a la última, la segunda igual a la penúltima, y así sucesivamente.  
Este patrón es útil en simulaciones de simetría horizontal, diseño de estructuras reflejadas, y codificación de datos con redundancia controlada.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar la mitad izquierda con valores aleatorios entre 1 y 9.  
3. Copiar cada columna `j` en la columna `m - 1 - j`.  

**Resultado:**
```js
1   2   3   2   1
4   5   6   5   4
7   8   9   8   7
```

---
