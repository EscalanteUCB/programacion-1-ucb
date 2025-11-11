# Práctico de Matrices en JavaScript con Clase `Matrix`

Este práctico contiene 10 ejercicios para su examen recuperatorio del segundo parcial donde deberán trabajar con la clase `Matrix`.  

---

## Ejercicio 89. Generar matriz con patrón de tablero de ajedrez  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores alternados `1` y `0` en patrón de tablero (tipo damero).  
Este patrón es útil en diseño de máscaras binarias, simulaciones de alternancia, y estructuras de paridad.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada posición `(i, j)`, asignar `1` si `(i + j) % 2 === 0`, y `0` en caso contrario.  

**Resultado:**
```js
1   0   1   0
0   1   0   1
1   0   1   0
0   1   0   1
```

---

## Ejercicio 90. Rotar matriz 90° en sentido horario  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` y rota sus valores 90 grados en sentido horario.  
Este tipo de transformación es útil en rotación de imágenes, manipulación de layouts, y simulaciones de orientación.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 9)`.  
3. Crear una nueva matriz y asignar `rotada[j][n - 1 - i] = original[i][j]`.  

**Resultado:**
```js
1   2   3
4   5   6
7   8   9

Rotada 90°:
7   4   1
8   5   2
9   6   3
```

---

## Ejercicio 91. Generar matriz con patrón de espiral doble  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` donde dos espirales se llenan simultáneamente desde esquinas opuestas.  
Este patrón es útil en simulaciones de colisión, visualización de trayectorias, y estructuras simétricas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Definir dos contadores y dos puntos de inicio.  
3. Llenar en espiral desde esquina superior izquierda y desde inferior derecha.  

**Resultado:**
```js
1   2   3   4
12  13 14 5
11  16 15 6
10  9   8  7
```

---

## Ejercicio 92. Contar cuántas filas son palíndromas  
**Enunciado:**  
Crea una matriz de tamaño `n x m` con valores entre 1 y 9. Implementa un método que cuente cuántas filas son palíndromas.  
Este tipo de análisis es útil en detección de simetrías, validación de secuencias, y estructuras reflejadas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 9)` o manualmente.  
3. Para cada fila, verificar si es igual a su reverso.  

**Resultado:**
```js
1   2   3   2   1   → Palíndroma
4   5   6   5   4   → Palíndroma
7   8   9   1   2   → No

Total de filas palíndromas: 2
```

---

## Ejercicio 93. Generar matriz con patrón de anillos alternados  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` donde cada anillo concéntrico alterna entre `1` y `0`.  
Este patrón es útil en diseño de filtros radiales, simulaciones de expansión binaria, y estructuras de capas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Calcular el número de capas como `Math.ceil(n / 2)`.  
3. Para cada capa, asignar `1` si el índice de capa es par, `0` si es impar.  

**Resultado:**
```js
1   1   1   1   1
1   0   0   0   1
1   0   1   0   1
1   0   0   0   1
1   1   1   1   1
```

---

## Ejercicio 94. Sumar diagonales y comparar  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` y calcula la suma de la diagonal principal y la secundaria. Indica cuál es mayor.  
Este tipo de operación es útil en análisis de equilibrio, detección de sesgos diagonales, y evaluación de simetrías.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar con `fillRandom(1, 9)`.  
3. Calcular ambas sumas y compararlas.  

**Resultado:**
```js
1   2   3
4   5   6
7   8   9

Suma diagonal principal: 15  
Suma diagonal secundaria: 15  
¿Son iguales?: true
```

---

## Ejercicio 95. Generar matriz con patrón de serpiente diagonal  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` que se llene en zigzag diagonal, alternando dirección en cada diagonal ascendente.  
Este patrón es útil en codificación de imágenes, simulaciones de flujo, y recorridos no lineales.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Usar lógica de diagonales ascendentes.  
3. Alternar el sentido de llenado en cada diagonal.  

**Resultado:**
```js
1   2   6   7
3   5   8   13
4   9   12  14
10  11  15  16
```

---


## Ejercicio 96. Detectar si una matriz es mágica  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n`. Verifica si todas las filas, columnas y diagonales suman lo mismo.  
Este tipo de matriz es útil en teoría de números, diseño de juegos, y estructuras de equilibrio perfecto.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Llenar manualmente con valores conocidos.  
3. Calcular la suma de cada fila, columna y diagonal.  
4. Verificar que todas sean iguales.  

**Resultado:**
```js
8   1   6
3   5   7
4   9   2

¿Es matriz mágica?: true
```

## Ejercicio 97. Generar matriz con patrón de triángulo superior izquierdo  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` donde los valores formen un triángulo en la esquina superior izquierda, colocando `1` en posiciones donde `i + j < n`.  
Este patrón es útil en diseño de máscaras angulares, simulaciones de cobertura parcial, y estructuras jerárquicas ascendentes.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Para cada posición `(i, j)`, asignar `1` si `i + j < n`, y `0` en caso contrario.  

**Resultado:**
```js
1   1   1   1
1   1   1   0
1   1   0   0
1   0   0   0
```

---

## Ejercicio 98. Generar matriz con patrón de flecha doble  
**Enunciado:**  
Crea una matriz cuadrada de tamaño `n x n` con valores `1` formando dos flechas: una apuntando hacia abajo y otra hacia arriba, cruzándose en el centro.  
Este patrón es útil en visualización de dirección opuesta, simulaciones de flujo cruzado, y diseño de estructuras simétricas.

**Pasos sugeridos:**  
1. Instanciar la clase `Matrix`.  
2. Calcular el centro `c = Math.floor(n / 2)`.  
3. Para cada posición `(i, j)`, asignar `1` si `j === c` o `i === j` o `i + j === n - 1`.  

**Resultado:**
```js
0   0   1   0   0
0   1   1   1   0
1   1   1   1   1
0   1   1   1   0
0   0   1   0   0
```
