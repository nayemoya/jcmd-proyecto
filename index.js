document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const modalItems = document.querySelectorAll('.modal-item');

    searchBar.addEventListener('input', function() {
        const searchTerm = searchBar.value.toLowerCase();
        modalItems.forEach(item => {
            const title = item.getAttribute('data-title').toLowerCase();
            if (title.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
