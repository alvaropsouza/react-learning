const { books } = require('./books');

function getBooks() {
    return books;
}

function getBook(id) {
    return books.find((d) => d.id === id);
}

const book = getBook(2);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
    book;

const [firstGenre, secondGenre, ...otherGenres] = genres;

const newGenres = [...genres, 'epicFantasy'];

const updatedBook = { ...book, moviePublicationDate: '2001-12-19', pages: 500 };

const getYear = (str) => str.split('-')[0];

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
    publicationDate
)}`;

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';

const getTotalReviewCount = (book) => {
    const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
    const libraryThing = book.reviews?.libraryThing?.reviewsCount ?? 0;

    return goodreads + libraryThing;
};

const allBooks = getBooks();

const titles = allBooks.map((book) => book.title);

const essentialData = allBooks.map((book) => ({
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
}));

// Filtering arrays
const longBooks = allBooks.filter(
    (book) => book.pages > 500 && book.hasMovieAdaptation
);

// Filtering and mapping
const adventureBooks = books
    .filter((books) => books.genres.includes('adventure'))
    .map((book) => book.title);

const pagesAllBooks = books.reduce(
    (accumulator, book) => accumulator + book.pages,
    0
);

// Slice to prevent js from mutating array x
const sortedPages = allBooks.slice().sort((a, b) => b.pages - a.pages);

const newBook = {
    id: 6,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling',
};

const booksAfterAdd = [...allBooks, newBook];

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

const booksAfterUpdate = booksAfterDelete.map((book) =>
    book.id === 1
        ? {
              ...book,
              pages: 1210,
          }
        : book
);
