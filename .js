let cart = [];
let totalPrice = 0;
// Función para agregar productos al carrito
function addToCart(productName, price) {
    // Crear un objeto para el producto
    const product = {
        name: productName,
        price: price
    };
    
    // Agregar el producto al carrito
    cart.push(product);
    
    // Actualizar el precio total
    totalPrice += price;
    
    // Actualizar la interfaz del carrito
    updateCart();
}
// Función para actualizar la vista del carrito
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total-price');
    
    // Limpiar la lista de productos en el carrito
    cartItems.innerHTML = '';
    
    // Mostrar los productos en el carrito
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    
    // Actualizar el precio total
    total.textContent = totalPrice.toFixed(2);
    
    // Mostrar el carrito si tiene productos
    const cartSection = document.getElementById('cart');
    cartSection.style.display = cart.length > 0 ? 'block' : 'none';
}
// Función para proceder al pago (simulación)
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Añade productos antes de proceder.');
        return;
    }
    
    alert(`Gracias por tu compra! El total es de $${totalPrice.toFixed(2)}.`);
    
    // Limpiar el carrito después de la compra
    cart = [];
    totalPrice = 0;
    updateCart();
}
// Opcional: Agregar funcionalidad de eliminar productos
function removeFromCart(productName) {
    const index = cart.findIndex(item => item.name === productName);
    if (index !== -1) {
        totalPrice -= cart[index].price;
        cart.splice(index, 1);  // Eliminar el producto del carrito
        updateCart();
    }
}