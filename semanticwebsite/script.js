// script.js

// Function to handle "Order Now" button clicks
function orderNow(item, price) {
  // Display a confirmation dialog with item details
  const userConfirmed = confirm(`Would you like to proceed with your order for ${item} priced at $${price}?`);

  if (userConfirmed) {
      // Show a loading animation while redirecting
      showLoadingMessage(item);

      // Simulate a delay before redirecting (to show loading animation)
      setTimeout(() => {
          // Navigate to a custom order page for the specific item
          window.location.href = `${item.toLowerCase().replace(" ", "_")}_order.html`;
      }, 2000);  // 2-second delay for loading animation
  } else {
      alert("Order canceled.");
  }
}

// Function to show loading animation or message
function showLoadingMessage(item) {
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'loading-message';
  loadingDiv.innerHTML = `<p>Processing your order for ${item}...</p><div class="loading-spinner"></div>`;
  document.body.appendChild(loadingDiv);
}

// Function to hide loading animation after redirect
function hideLoadingMessage() {
  const loadingDiv = document.getElementById('loading-message');
  if (loadingDiv) {
      loadingDiv.remove();
  }
}

// Function to add order details in the custom order page
function addOrderForm(item, price) {
  // Create an order form dynamically for users to fill out
  const orderForm = document.createElement('form');
  orderForm.id = 'order-form';

  // Item name and price
  orderForm.innerHTML = `
      <h3>Order Details for ${item}</h3>
      <label for="quantity">Quantity: </label>
      <input type="number" id="quantity" name="quantity" min="1" value="1" required>
      <br><br>
      <label for="special-requests">Special Requests: </label>
      <textarea id="special-requests" name="special-requests" placeholder="Enter any special requests..."></textarea>
      <br><br>
      <button type="submit">Submit Order</button>
  `;

  // Attach form to the body
  document.body.appendChild(orderForm);

  // Handle form submission
  orderForm.onsubmit = function(event) {
      event.preventDefault();

      const quantity = document.getElementById('quantity').value;
      const specialRequests = document.getElementById('special-requests').value;

      // Simulate order processing
      alert(`Order received for ${quantity} x ${item}. Special Requests: ${specialRequests}`);
      orderForm.reset();
  };
}

// CSS for loading spinner (Optional)
const style = document.createElement('style');
style.innerHTML = `
  .loading-spinner {
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top: 4px solid #3498db;
      width: 50px;
      height: 50px;
      animation: spin 2s linear infinite;
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }

  #loading-message {
      text-align: center;
      margin-top: 20px;
      font-size: 16px;
  }
`;
document.head.appendChild(style);
