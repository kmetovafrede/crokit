document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menu-btn");
    var menuContent = document.querySelector(".menu-content");
    var menuItems = document.querySelectorAll(".menu-content a");

    menuBtn.addEventListener("click", function() {
        menuContent.classList.toggle("active"); // Toggle the active class
    });

    // Add event listener to each menu item
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener("click", function() {
            menuContent.classList.remove("active"); // Remove the active class
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.addToCartButton');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        showNotification();
      });
    });
  
    function showNotification() {
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.textContent = 'Produkt pridaný do kitu!';
  
      document.body.appendChild(notification);
  
      setTimeout(function () {
        notification.style.opacity = '0';
        setTimeout(function () {
          document.body.removeChild(notification);
        }, 1000); // Remove notification after fading out
      }, 3000); // Display notification for 3 seconds
    }
  });
  

  // Get the signup modal
var signupModal = document.getElementById("signupModal");

// Get the button that opens the signup modal
var signupButton = document.querySelector(".signup-button");

// Get the <span> element that closes the signup modal
var closeSignupModal = document.querySelector("#signupModal .close");

// When the user clicks on the signup button, open the modal
signupButton.onclick = function() {
  signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the signup modal
closeSignupModal.onclick = function() {
  signupModal.style.display = "none";
}

// When the user clicks anywhere outside of the signup modal, close it
window.onclick = function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
}

// Handle signup form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Here you can add code to handle form submission, e.g., send data to a server
  alert("Signup form submitted!");
  // Clear form fields
  document.getElementById("signupForm").reset();
  // Close modal
  signupModal.style.display = "none";
});
// script.js

// script.js

document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.addToCartButton');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productName = button.parentElement.querySelector('h2').textContent;
      
      // Send HTTP POST request to server to add product to cart
      fetch('/api/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productName })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.message); // Log response from server
        showNotification();
        updateCartItems(); // Update cart items after adding a product
      })
      .catch(error => console.error('Error:', error));
    });
  });

  // Function to display notification
  function showNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Product added to cart!';

    document.body.appendChild(notification);

    setTimeout(function () {
      notification.style.opacity = '0';
      setTimeout(function () {
        document.body.removeChild(notification);
      }, 1000); // Remove notification after fading out
    }, 3000); // Display notification for 3 seconds
  }

  // Function to update cart items
  function updateCartItems() {
    // Fetch cart items from server and update HTML
    fetch('/api/get-cart-items')
    .then(response => response.json())
    .then(data => {
      const cartItems = data.cartItems;
      const cartList = document.getElementById('cartList');
      cartList.innerHTML = ''; // Clear previous cart items

      cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.classList.add('cart-item'); // Add a class for styling
        cartList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error:', error));
  }
});


function toggleImageSize(event) {
  event.currentTarget.classList.toggle('enlarge');
}