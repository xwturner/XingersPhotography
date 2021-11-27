// Empty array to store cart items
var cart = [];

// variable to get cart items from localStorage 
var storedCartItems = JSON.parse(localStorage.getItem("cart"));

if (storedCartItems !== null) {
    cart = storedCartItems;
}

// Using for loop to disable add to cart button if item exists in cart array
for(var i = 0; i < cart.length; i++){
    if(cart[i].name === "Hatcher Pass"){
        $("#btn-print1").attr("disabled", true);
        $("#btn-print1").text("Item Added");
    }
    else if(cart[i].name === "Sunrise Over Twin Falls"){
        $("#btn-print2").attr("disabled", true);
        $("#btn-print2").text("Item Added");
    }
    else if(cart[i].name === "Full Moon Over Yosemite"){
        $("#btn-print3").attr("disabled", true);
        $("#btn-print3").text("Item Added");
    }
    else if(cart[i].name === "AK Northern Lights"){
        $("#btn-print4").attr("disabled", true);
        $("#btn-print4").text("Item Added");
    }
    else if(cart[i].name === "Swiss Bells"){
        $("#btn-print5").attr("disabled", true);
        $("#btn-print5").text("Item Added");
    }
    else if(cart[i].name === "High in the Mountains"){
        $("#btn-print6").attr("disabled", true);
        $("#btn-print6").text("Item Added");
    }
}

$("#btn-print1").click(function () {

    // Using printPrice variable to store price based on size of print
    var printPrice = 0;

    // If statement that changes the price based on the drop-down selection 
    if($("#print-size1").val() === "4x6"){
        printPrice = 10;
    }
    else if ($("#print-size1").val() === "8x12"){
        printPrice = 18;
    }
    else if ($("#print-size1").val() === "16x20"){
        printPrice = 40;
    }
    else if ($("#print-size1").val() === "20x30"){
        printPrice = 65;
    }

    // print object that will be stored in localStorage
    var printObj = {
        name: "Hatcher Pass",
        quantity: $("#quantity1").val(),
        printSize: $("#print-size1").val(),
        price: printPrice * parseFloat($("#quantity1").val()),
        img: "assets/portfolio/AKHatcherPass.jpg"
    }

    cart.push(printObj);

    // Using localStorage to store cart items 
    localStorage.setItem("cart", JSON.stringify(cart));

    // Disable button after adding to cart
    $("#btn-print1").attr("disabled", true);
    $("#btn-print1").text("Item Added");
})

$("#btn-print2").click(function () {

      var printPrice = 0;

      if($("#print-size2").val() === "4x6"){
          printPrice = 10;
      }
      else if ($("#print-size2").val() === "8x12"){
          printPrice = 18;
      }
      else if ($("#print-size2").val() === "16x20"){
          printPrice = 40;
      }
      else if ($("#print-size2").val() === "20x30"){
          printPrice = 65;
      }

    var printObj = {
        name: "Sunrise Over Twin Falls",
        quantity: $("#quantity2").val(),
        printSize: $("#print-size2").val(),
        price: printPrice * parseFloat($("#quantity2").val()),
        img: "assets/portfolio/TravelShoshoneFalls.jpg"
    }

    cart.push(printObj);

    localStorage.setItem("cart", JSON.stringify(cart));

    $("#btn-print2").attr("disabled", true);
    $("#btn-print2").text("Item Added");
})

$("#btn-print3").click(function () {

    var printPrice = 0;

      if($("#print-size3").val() === "4x6"){
          printPrice = 10;
      }
      else if ($("#print-size3").val() === "8x12"){
          printPrice = 18;
      }
      else if ($("#print-size3").val() === "16x20"){
          printPrice = 40;
      }
      else if ($("#print-size3").val() === "20x30"){
          printPrice = 65;
      }

    var printObj = {
        name: "Full Moon Over Yosemite",
        quantity: $("#quantity3").val(),
        printSize: $("#print-size3").val(),
        price: printPrice * parseFloat($("#quantity3").val()),
        img: "assets/portfolio/TravelYosemite1.jpg"
    }

    cart.push(printObj);

    localStorage.setItem("cart", JSON.stringify(cart));

    $("#btn-print3").attr("disabled", true);
    $("#btn-print3").text("Item Added");
})

$("#btn-print4").click(function () {

    var printPrice = 0;

      if($("#print-size4").val() === "4x6"){
          printPrice = 10;
      }
      else if ($("#print-size4").val() === "8x12"){
          printPrice = 18;
      }
      else if ($("#print-size4").val() === "16x20"){
          printPrice = 40;
      }
      else if ($("#print-size4").val() === "20x30"){
          printPrice = 65;
      }

    var printObj = {
        name: "AK Northern Lights",
        quantity: $("#quantity4").val(),
        printSize: $("#print-size4").val(),
        price: printPrice * parseFloat($("#quantity4").val()),
        img: "assets/portfolio/NorthernLights.jpg"
    }

    cart.push(printObj);

    localStorage.setItem("cart", JSON.stringify(cart));

    $("#btn-print4").attr("disabled", true);
    $("#btn-print4").text("Item Added");
})

$("#btn-print5").click(function () {

    var printPrice = 0;

      if($("#print-size5").val() === "4x6"){
          printPrice = 10;
      }
      else if ($("#print-size5").val() === "8x12"){
          printPrice = 18;
      }
      else if ($("#print-size5").val() === "16x20"){
          printPrice = 40;
      }
      else if ($("#print-size5").val() === "20x30"){
          printPrice = 65;
      }

    var printObj = {
        name: "Swiss Bells",
        quantity: $("#quantity5").val(),
        printSize: $("#print-size5").val(),
        price: printPrice * parseFloat($("#quantity5").val()),
        img: "assets/portfolio/TravelSwissBells.jpg"
    }

    cart.push(printObj);

    localStorage.setItem("cart", JSON.stringify(cart));

    $("#btn-print5").attr("disabled", true);
    $("#btn-print5").text("Item Added");
})

$("#btn-print6").click(function () {

    var printPrice = 0;

      if($("#print-size6").val() === "4x6"){
          printPrice = 10;
      }
      else if ($("#print-size6").val() === "8x12"){
          printPrice = 18;
      }
      else if ($("#print-size6").val() === "16x20"){
          printPrice = 40;
      }
      else if ($("#print-size6").val() === "20x30"){
          printPrice = 65;
      }

    var printObj = {
        name: "High in the Mountains",
        quantity: $("#quantity6").val(),
        printSize: $("#print-size6").val(),
        price: printPrice * parseFloat($("#quantity6").val()),
        img: "assets/portfolio/AKKennicottGoPro.jpg"
    }

    cart.push(printObj);

    localStorage.setItem("cart", JSON.stringify(cart));

    $("#btn-print6").attr("disabled", true);
    $("#btn-print6").text("Item Added");
})