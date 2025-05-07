document.addEventListener("DOMContentLoaded", function(){
    const productContainer = document.getElementById('productContainer')
    fetch('https://humorous-perpetual-pipe.glitch.me/products')
        .then(response => response.json())
        .then(products => {
            const filteredProducts = products.filter(product => product.category == "Collection");
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price">${product.price}</p>
                `;
                productContainer.appendChild(productCard);
            }); 
        })
        .catch(error => {
            console.error('Error No Carga api correctamente', error);
            productContainer.innerHTML = 'ERROR :No estan disponibles los productos';
        });
});
