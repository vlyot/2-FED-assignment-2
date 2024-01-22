  // Initialize an empty cart
  const cart = [];

  // Function to add a product to the cart
  function addToCart(productName, price) {
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
    const cartContainer = document.getElementById('cart');
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

  // ...

  // Modify the addToCart function to update the modal when items are added
  function addToCart(name, price) {
    cart.push({ name, price });
    updateCartContent();
    showCartModal(); // Show the modal when an item is added
  }

  // ...

  // Function to update the cart content in the modal
  function updateCartContent() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = '';

      // Display each item in the cart
      cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(cartItem);
      });
    }
  }