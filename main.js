














var MenuItems = document.getElementById("MenuItems")

if(MenuItems) {
  MenuItems.style.maxHeight = "0px";
}

function menutoggle(){
 if(MenuItems && MenuItems.style.maxHeight == "0px")
  {
   MenuItems.style.maxHeight = "200px"
  }
  else if(MenuItems)
  {
   MenuItems.style.maxHeight = "0px"
  }
}

// Cart functionality
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.length;
  
  // Update all cart badges
  const cartBadges = document.querySelectorAll('#cartBadge, .cart-badge');
  cartBadges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'block' : 'none';
  });
  
  // Update cart count in navigation if element exists
  const cartCountElements = document.querySelectorAll('.cart-count');
  cartCountElements.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline' : 'none';
  });
}

// Initialize cart count on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateCartCount);
      } else {
  updateCartCount();
}











