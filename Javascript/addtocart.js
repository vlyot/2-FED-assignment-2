// Initialize an empty cart
const cart = [];

// Function to add a product to the cart
function addToCart(product) {
  let productName, price;

  // Set product details based on the product number
  switch (product) {
    case 1:
      productName = 'COVID-19 Test Kit - 5 Pcs';
      price = 24.99;
      break;
    case 2:
      productName = '100 Pcs - Face Mask';
      price = 20.00;
      break;
    case 3:
      productName = '3-PLY Face Mask - Black';
      price = 20.00;
      break;
    case 4:
      productName = 'Surgical Face Mask';
      price = 24.99;
      break;
    case 5:
      productName = 'Panadol';
      price = 14.99;
      break;
    case 6:
      productName = 'Zyrtec R';
      price = 29.99;
      break;
    default:
      // Handle unknown product
      return;
  }

  cart.push({ name: productName, price: price });

  // Update the cart icon with the number of items
  updateCartCounter();

  // Update the cart content
  updateCartContent();
}

// Function to update the cart icon with the number of items
function updateCartCounter() {
  const cartCounter = document.getElementById('cart-counter');
  if (cartCounter) {
    cartCounter.textContent = cart.length;
  }
}

// Function to update the cart content
function updateCartContent() {
  const cartContainer = document.getElementById('cartItems');
  if (cartContainer) {
    cartContainer.innerHTML = '';

    // Display each item in the cart
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartContainer.appendChild(cartItem);
    });
  }
}
// Function to show the cart modal
function showCartModal() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'block';
    updateCartContent();
}

// Function to close the cart modal
function closeCartModal() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'none';
}
// Function to clear the cart
function clearCart() {
    // Clear the cart array
    cart.length = 0;
  
    // Update the cart icon with the number of items
    updateCartCounter();
  
    // Update the cart content
    updateCartContent();
  
    // Close the cart modal
    closeCartModal();
  }
// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
    let total = 0;
    cart.forEach(item => {
      total += item.price;
    });
    return total.toFixed(2);
  }
// Function to update the cart content
function updateCartContent() {
    const cartContainer = document.getElementById('cartItems');
    const totalContainer = document.getElementById('cartTotal');
  
    if (cartContainer && totalContainer) {
      cartContainer.innerHTML = '';
  
      // Display each item in the cart
      cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartContainer.appendChild(cartItem);
      });
  
      // Display the total price
      const totalItem = document.createElement('div');
      totalItem.textContent = `Total: $${calculateTotalPrice()}`;
      totalContainer.innerHTML = '';
      totalContainer.appendChild(totalItem);
    }
  }
  
    