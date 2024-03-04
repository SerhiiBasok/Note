// import './js/active-page-link.js';
// import './js/buttom-switch.js';
// import './js/active-page-menu.js';
// import './js/mobile-menu.js';
// import './js/storage.js';

// const STORAGE_KEY = 'storage-of-books';
// const shoppingListUl = document.querySelector('.shopping-list');

// //====================

// //====================
// //повідомлення про відсутність книг
// const emptyMessageContainer = document.createElement('div');
// emptyMessageContainer.classList.add('empty-message');
// emptyMessageContainer.innerHTML = `
//   <p>This page is empty, add some books and proceed to order.</p>
//   <img src="images/books-stack-mobile.png" alt="Empty Book Stack" />
// `;

// // отримання збережених книг з localStorage
// async function getStoredBooks() {
//   try {
//     const storedBooks = await new Promise((resolve, reject) => {
//       const data = localStorage.getItem(STORAGE_KEY);
//       if (data) {
//         resolve(JSON.parse(data));
//       } else {
//         resolve([]);
//       }
//     });
//     return storedBooks;
//   } catch (error) {
//     console.error('Error getting stored books:', error);
//     throw error;
//   }
// }

// //функція для відображення списку книг
// async function renderBooks() {
//   try {
//     const storedBooks = await getStoredBooks();
//     shoppingListUl.innerHTML = '';
//     if (storedBooks.length > 0) {
//       storedBooks.forEach(book => {
//         const li = document.createElement('li');
//         li.appendChild(createBookCard(book));
//         shoppingListUl.appendChild(li);
//       });
//     } else {
//       // Якщо немає збережених книг, вивести повідомлення про відсутність
//       shoppingListUl.appendChild(emptyMessageContainer);
//     }
//   } catch (error) {
//     console.error('Error rendering books:', error);
//   }
// }

// // Функція для створення карти книги
// function createBookCard(book) {
//   const card = document.createElement('div');
//   card.classList.add('book-card');
//   card.innerHTML = `
//     <img class="book-cover" src="${book.image}" alt="${book.title} />
//     <div class="book-details">
//       <h2 class="book-title">${book.title}</h2>
//       <p class="book-category">${book.bookCategory}</p>
//       <p class="book-description">${book.title}</p>
//       <p class="book-author">${book.author}</p>
//       <div class="book-links">
//         ${createMarketplaceLinks(book.marketplaces)}
//       </div>
//       <button class="remove-book-btn" onclick="removeBook('${
//         book._id
//       }')">R</button>
//     </div>
//   `;
//   return card;
// }

// // Функція для створення посилань на торгові майданчики
// function createMarketplaceLinks(marketplaces) {
//   return marketplaces && Array.isArray(marketplaces) && marketplaces.length
//     ? marketplaces
//         .map(link => `<a href="${link}" target="_blank">${link}</a>`)
//         .join('')
//     : '';
// }

// async function removeBook(bookId) {
//   try {
//     const storedBooks = await getStoredBooks();
//     const updatedBooks = storedBooks.filter(book => book._id !== bookId);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));

//     // Оновлення відображення списку книг
//     await renderBooks();
//   } catch (error) {
//     console.error('Error removing book:', error);
//   }
// }
// renderBooks();
