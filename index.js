import UI from './modules/ui.js';
import Book from './modules/book.js';
import formatDate from './modules/date.js';

// Event listeners
document.getElementById('bookForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('titleInput').value;
  const author = document.getElementById('authorInput').value;
  const book = new Book(title, author);
  if (title === '' || author === '') {
    UI.showAlert('Please fill in all fields', 'error');
  } else {
    UI.addBookToList(book);
    UI.clearInputFields();
    UI.saveToLocalStorage(book);
    UI.showAlert('Book added', 'success');
  }
});
document.getElementById('bookList').addEventListener('click', (e) => {
  UI.deleteBookFromList(e.target);
});

// Load books from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
  UI.displayBooksFromLocalStorage();
});

const bookListI = document.getElementById('book-container');
const contactI = document.getElementById('contact');
const bookFormI = document.getElementById('bookForm');

window.showContent = (itemId) => {
  if (itemId === 'book-container') {
    bookListI.classList.remove('hidden');
    contactI.classList.add('hidden');
    bookFormI.classList.add('hidden');
  } else if (itemId === 'contact') {
    bookListI.classList.add('hidden');
    contactI.classList.remove('hidden');
    bookFormI.classList.add('hidden');
  } else if (itemId === 'bookForm') {
    bookListI.classList.add('hidden');
    contactI.classList.add('hidden');
    bookFormI.classList.remove('hidden');
  }
};

// Update the innerHTML of the dateDiv with the formatted date
document.addEventListener('DOMContentLoaded', () => {
  const dateDiv = document.getElementById('date');
  dateDiv.innerHTML = formatDate();
});

