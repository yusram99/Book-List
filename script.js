const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');
const deleteListBtn = document.getElementById('del-list-btn');
const searchInput = document.getElementById('myInput');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const publisherInput = document.getElementById('publisher');
  addBookToList(titleInput.value, authorInput.value, publisherInput.value);
  titleInput.value = '';
  authorInput.value = '';
  publisherInput.value = '';
});

function addBookToList(title, author, publisher) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${publisher}</td>
    <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
  `;
  bookList.appendChild(row);
}

bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.parentElement.remove();
  }
});

deleteListBtn.addEventListener('click', () => {
  bookList.innerHTML = '';
});

function searchBook() {
  const searchText = searchInput.value.toLowerCase();
  const books = Array.from(bookList.getElementsByTagName('tr'));
  books.forEach((book) => {
    const title = book.getElementsByTagName('td')[0].innerText.toLowerCase();
    const author = book.getElementsByTagName('td')[1].innerText.toLowerCase();
    const publisher = book.getElementsByTagName('td')[2].innerText.toLowerCase();
    if (title.includes(searchText) || author.includes(searchText) || publisher.includes(searchText)) {
      book.style.display = '';
    } else {
      book.style.display = 'none';
    }
  });
}
