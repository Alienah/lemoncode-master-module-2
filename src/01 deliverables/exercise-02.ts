console.log("************** DELIVERABLE 02 *********************");

// ### 2. Concat

// Implementa una función `concat` (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const listA = [1, 2, 3, 4];
const listB = ["a", "b", "c", "d"];
const listC = [5, 6, 7, 8];

const concat = (a: Array<number>, b: Array<string>) => [...a, ...b]; 

console.log('concat', concat(listA, listB))


// #### Opcional

// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const multipleConcat = (...args: Array<any>) => {
  let concatenated = [];
  for (const newList of args) {
    concatenated = [...concatenated, ...newList]    
  }
  return concatenated;
}

console.log('multipleConcat', multipleConcat(listA, listB, listC))