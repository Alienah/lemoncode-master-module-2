console.log("************** DELIVERABLE 04 *********************");

// ### 4. Read Books

// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con `title` como string y `isRead` como booleano. En caso de no existir el libro devolver `false`
// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

interface Book {
  title: string,
  isRead: boolean,
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

// Versión corta, pero menos clara a mi juicio
function isBookReadShorter(books: Array<Book>, titleToSearch: string) {
  return !!books.find((book) => book.title === titleToSearch)?.isRead;
}

function isBookRead(books: Array<Book>, titleToSearch: string) {
  const bookFound = books.find((book) => book.title === titleToSearch);
  return bookFound?.isRead || false;
}

console.log("isBookRead: Harry Potter y la piedra filosofal", isBookRead(books, "Harry Potter y la piedra filosofal"));
console.log("isBookRead: Canción de hielo y fuego", isBookRead(books, "Canción de hielo y fuego"));
console.log("isBookRead: Los Pilares de la Tierra", isBookRead(books, "Los Pilares de la Tierra"));

// #### Ejemplo

// ```js
// const books = [
//   { title: "Harry Potter y la piedra filosofal", isRead: true },
//   { title: "Canción de hielo y fuego", isRead: false },
//   { title: "Devastación", isRead: true },
// ];

// console.log(isBookRead(books, "Devastación")); // true
// console.log(isBookRead(books, "Canción de hielo y fuego")); // false
// console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
// ```

// #### Opcional

// Utiliza Typescript para añadir los tipos adecuados.