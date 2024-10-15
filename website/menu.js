const itemsPerPage = 8;
    let currentPage = 1;

    function filterProducts() {
        const filterValue = document.getElementById('fishFilter').value.toLowerCase();
        const searchQuery = document.getElementById('fishSearch').value.toLowerCase();
        const products = document.querySelectorAll('.product');

        let filteredProducts = [];
        products.forEach(product => {
            const fishType = product.getAttribute('data-fish-type').toLowerCase();
            const productName = product.querySelector('.card-title').textContent.toLowerCase();
            if ((filterValue === 'filter by type' || fishType === filterValue) &&
                (searchQuery === '' || productName.includes(searchQuery))) {
                filteredProducts.push(product);
            }
        });

        paginate(filteredProducts, currentPage);
    }

    function paginate(products, page) {
        const productList = document.getElementById('productList');
        const totalItems = products.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        currentPage = page;

        document.querySelectorAll('.product').forEach(product => product.style.display = 'none');

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        for (let i = start; i < end && i < totalItems; i++) {
            products[i].style.display = 'block';
        }

        updatePaginationControls(totalPages);
    }

    function updatePaginationControls(totalPages) {
        const paginationControls = document.getElementById('paginationControls');
        paginationControls.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.classList.add('page-item');
            if (i === currentPage) li.classList.add('active');

            const a = document.createElement('a');
            a.classList.add('page-link');
            a.href = '#';
            a.setAttribute('aria-label', `Page ${i}`); // This is for accessibility
            a.addEventListener('click', function(e) {
                e.preventDefault();
                paginate(document.querySelectorAll('.product'), i);
            });

            li.appendChild(a);
            paginationControls.appendChild(li);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        filterProducts();
    });

    function buyNow(name, price, imageUrl) {
        const productData = {
            name: name,
            price: price,
            imageUrl: imageUrl
        };
    
        sessionStorage.setItem('selectedProduct', JSON.stringify(productData));
    
        window.location.href = 'index.html';
    }