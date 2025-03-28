let basket = [];

// Afficher / masquer le panier
function toggleBasket() {
    const basketBox = document.getElementById('basket-box');
    basketBox.style.display = basketBox.style.display === 'block' ? 'none' : 'block';
}

// Ajouter un élément au panier
// function addToBasket(item) {
//     basket.push(item);
//     updateBasketDisplay();
// }

// Mettre à jour l'affichage du panier
function updateBasketDisplay() {
    const basketItems = document.getElementById('basket-items');
    basketItems.innerHTML = ''; // Vider les éléments précédents
    const basketTotal = document.getElementById('basket-total');
    let total = 0;
    basket.forEach(item => {
        const listItem = document.createElement('li');
        const listItemPrice = document.createElement('span');
        listItemPrice.style.float = 'right';
        listItemPrice.style.color = 'green';
        listItemPrice.style.fontWeight = 'bold';
        listItem.textContent = item.label;
        listItemPrice.textContent = item.price;
        basketItems.appendChild(listItem);
        listItem.appendChild(listItemPrice);
        total += item.price;
        basketTotal.textContent = total;
    });
}
function addToBasket(item) {
    basket.push({ label: Object.keys(item)[0], price: Object.values(item)[0] }); 
    updateBasketDisplay();
    updateBasketCount(); // Mise à jour du compteur de panier
}

function updateBasketCount() {
    const basketCount = document.getElementById('basket-count');
    basketCount.textContent = basket.length; // Affiche le nombre d'éléments dans le panier
}






const menuItems = document.querySelector(".menu-items");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let index = 0;
const itemsPerView = 3; // Nombre d'éléments visibles à la fois
const totalItems = document.querySelectorAll(".menu-item").length;
const totalPages = Math.ceil(totalItems / itemsPerView);

function goToSlide(slideIndex) {
    menuItems.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalPages; // Revenir à 0 après le dernier slide
    goToSlide(index);
}

function prevSlide() {
    index = (index - 1) % totalPages; // Corrigé pour éviter un index négatif
    goToSlide(index);
}

// Ajouter les événements pour les boutons
leftBtn.addEventListener("click", prevSlide);
rightBtn.addEventListener("click", nextSlide);
