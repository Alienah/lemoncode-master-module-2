console.log("************** DELIVERABLE 03 *********************");

type SourcePerson = {
  name: string;
  surname: string,
  country: string,
};

type TargetPerson = {
  name: string;
  age: number,
  married: boolean,
};

const sourcePerson = {
  name: "Maria",
  surname: "Ibañez",
  country: "SPA",
}

const targetPerson = { 
  name: "Luisa", 
  age: 31, 
  married: true 
};

// ### 3. Clone Merge

// #### Clone

// Implementa una función `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`:

const clone = (source: SourcePerson) => ({...source});

console.log('clone', clone(sourcePerson));

// #### Merge

// Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.

// Por ejemplo, dados estos 2 objetos:

// ```js
// const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
// const b = { name: "Luisa", age: 31, married: true };
// ```

// el resultado de mezclar `a` sobre `b` sería:

// ```js
// merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// ```

// TIP: Puedes usar la función "clone" del apartado A.

const merge =(source: SourcePerson, target: TargetPerson) => ({...target, ...source});

console.log('merge', merge(sourcePerson, targetPerson));
