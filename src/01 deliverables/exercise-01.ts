console.log("************** DELIVERABLE 01 *********************");

type Person = {
  name: string;
  address: string;
};

const persons = [
  {name: "Aida", address: "Madrid"},
  {name: "Daniela", address: "Madrid"},
  {name: "Roberto", address: "Madrid"},
]

// #### Head

// Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([first]: Array<Person>) => first;

console.log("HEAD", head(persons))

// #### Tail

// Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.


const tail = ([, ...rest]: Array<Person>) => rest;

console.log("TAIL", tail(persons))

// #### Init

// Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.


const init = (list: Array<Person>) => list.slice(0, -1);

console.log("INIT", init(persons))

// #### Last

// Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.


const last = (list) => {
  const {[list.length - 1]: last} = list;
  return last;
};

console.log("LAST", last(persons))
