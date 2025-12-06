const searchBar = document.getElementById('search');
const cards = document.querySelectorAll('.card');

searchBar.addEventListener('keyup', () => {
  const searchText = searchBar.value.toLowerCase();

  cards.forEach(card => {
    const title = card.getAttribute('data-title');

    if (title.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});