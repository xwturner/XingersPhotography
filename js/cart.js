// Empty array variable for items in cart
var cart = [];

// variable to calculate total price
var totalPrice = 0;
// variable to add shipping to total price
var shipping = 7;

// variable to get cart items from localStorage 
var storedCartItems = JSON.parse(localStorage.getItem("cart"));

if (storedCartItems !== null) {
    cart = storedCartItems;
}

renderCart()

function renderCart(){
  $("#cart-items").empty();
  // Using for loop to retrieve cart items from localStorage
for(var i = 0; i < cart.length; i++){
  $("#cart-items").append(`
  <div class="card mb-3" id="cart-item${i}" data-print="${i}">
               <div class="row g-0">
                 <div class="col-md-4">
                   <img src="${cart[i].img}" class="img-fluid rounded-start" style="height: 100%;">
                 </div>
                 <div class="col-md-8">
                   <div class="card-body">
                     <h5 class="card-title">Item: ${cart[i].name}</h5>
                     <p class="card-text">Quantity: ${cart[i].quantity}</p>
                     <p class="card-text">Price: $${cart[i].price}</p>
                   </div>
                 </div>
               </div>
             </div>
             <br>
  `)

  totalPrice += parseFloat(cart[i].price);

 //  Adding shipping to totalPrice 
  totalPrice += shipping;

}
}




// Display total price in span element
$("#total-price").text(totalPrice)