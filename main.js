  const searchInput = document.querySelector('.searchInput');
  const bookItems = document.querySelectorAll('.book-info');

  searchInput?.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    bookItems.forEach(book => {
      const title = book.querySelector('h2').textContent.toLowerCase();
      if (title.includes(filter)) {
        book.style.display = '';
      } else {
        book.style.display = 'none';
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
  const searchBox = document.querySelector('.searchBox');
  const searchButton = document.querySelector('.searchButton');
  const filters = document.querySelector('.filters');
  const extraFilters = document.querySelector('.extra-filters');
  const closeSearch = document.querySelector('.closeSearch');
  const searchInput = document.querySelector('.searchInput');

  searchButton.addEventListener('click', function (e) {
    e.preventDefault();

    searchBox.classList.remove('hidden');
    filters.classList.add('hidden');
    extraFilters.classList.add('hidden');
    searchInput.focus();
  });

  closeSearch.addEventListener('click', function () {
    searchBox.classList.add('hidden');
    filters.classList.remove('hidden');
    extraFilters.classList.remove('hidden');
  });
});


