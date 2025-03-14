let basket = [];

// Afficher / masquer le panier
function toggleBasket() {
    const basketBox = document.getElementById('basket-box');
    basketBox.style.display = basketBox.style.display === 'block' ? 'none' : 'block';
}

// Ajouter un élément au panier
function addToBasket(item) {
    basket.push(item);
    updateBasketDisplay();
}

// Mettre à jour l'affichage du panier
function updateBasketDisplay() {
    const basketItems = document.getElementById('basket-items');
    basketItems.innerHTML = ''; // Vider les éléments précédents

    basket.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        basketItems.appendChild(listItem);
    });
}
function addToBasket(item) {
    basket.push(item);
    updateBasketDisplay();
    updateBasketCount(); // Mise à jour du compteur de panier
}

function updateBasketCount() {
    const basketCount = document.getElementById('basket-count');
    basketCount.textContent = basket.length; // Affiche le nombre d'éléments dans le panier
}



