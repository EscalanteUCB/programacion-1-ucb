# Práctico de Matrices en JavaScript con Clase `Matrix`

Este práctico contiene 42 ejercicios para su examen recuperatorio del segundo parcial donde deberán trabajar con la clase `Matrix`.  

---

# Ejercicio 26. Reflejo vertical de la matriz

**Enunciado:**  
Crea una matriz de tamaño n x m con valores aleatorios entre 1 y 100. Implementa un método que invierta la matriz verticalmente (de arriba hacia abajo).

**Pasos sugeridos:**  
1. Instanciar la clase Matrix.  
2. Llenar con fillRandom(1, 100).  
3. Intercambiar la fila `i` con la fila `n - 1 - i` hasta la mitad.

**Resultado:**

12   45   7   30   18  
22   41   50  33   44  
41   21   5   19   20  

Reflejo vertical:

41   21   5   19   20  
22   41   50  33   44  
12   45   7   30   18

---

# Ejercicio 27. Reflejo horizontal de la matriz

**Enunciado:**  
Crea una matriz de tamaño n x m con valores aleatorios entre 1 y 100. Implementa un método que invierta cada fila horizontalmente (de izquierda a derecha).

**Pasos sugeridos:**  
1. Instanciar la clase Matrix.  
2. Llenar con fillRandom(1, 100).  
3. Para cada fila, intercambiar columna `j` con `m - 1 - j`.

**Resultado:**

12   45   7   30   18  
22   41   50  33   44  
41   21   5   19   20  

Reflejo horizontal:

18   30   7   45   12  
44   33   50  41   22  
20   19   5   21   41

---

# Ejercicio 28. Rotación 90° a la derecha

**Enunciado:**  
Crea una matriz cuadrada de tamaño n x n con valores aleatorios entre 1 y 100. Implementa un método que genere una nueva matriz rotada 90° en sentido horario.

**Pasos sugeridos:**  
1. Instanciar la clase Matrix.  
2. Llenar con fillRandom(1, 100).  
3. Crear nueva matriz y asignar `rotada[j][n - 1 - i] = original[i][j]`.

**Resultado:**

12   45   7  
22   41   50  
41   21   5  

Rotada 90°:

41   22   12  
21   41   45  
5    50   7

---

# Ejercicio 29. Rotación 90° a la izquierda

**Enunciado:**  
Crea una matriz cuadrada de tamaño n x n con valores aleatorios entre 1 y 100. Implementa un método que genere una nueva matriz rotada 90° en sentido antihorario.

**Pasos sugeridos:**  
1. Instanciar la clase Matrix.  
2. Llenar con fillRandom(1, 100).  
3. Crear nueva matriz y asignar `rotada[n - 1 - j][i] = original[i][j]`.

**Resultado:**
```js
12   45   7  
22   41   50  
41   21   5  

Rotada 90° izquierda:

7    50   5  
45   41   21  
12   22   41
```

---

# Ejercicio 30. Rotación 180°

**Enunciado:**  
Crea una matriz de tamaño n x m con valores aleatorios entre 1 y 100. Implementa un método que genere una nueva matriz rotada 180°, como si se girara completamente.

**Pasos sugeridos:**  
1. Instanciar la clase Matrix.  
2. Llenar con fillRandom(1, 100).  
3. Crear nueva matriz y asignar `rotada[n - 1 - i][m - 1 - j] = original[i][j]`.

**Resultado:**

12   45   7   30   18  
22   41   50  33   44  
41   21   5   19   20  

Rotada 180°:

20   19   5   21   41  
44   33   50  41   22  
18   30   7   45   12

---



---



---



---



---



---



---



---
