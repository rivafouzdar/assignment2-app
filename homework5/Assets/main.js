// global arrays for inputted values of quantity and glaze
var quantities = [];
var glazes = [];

function addToCart() {
    // obtain inputted quantity and glaze
    var itemQuantity = $(".quantity :selected").text();
    var itemGlaze = $(".glaze :selected").text();
    quantities.push(itemQuantity);
    glazes.push(itemGlaze);

    // store values in local storage
    localStorage.setItem("storedQuantities", JSON.stringify(quantities));
    localStorage.setItem("storedGlazess", JSON.stringify(glazes));

    // update number next to cart
    $(".shoppingcarttext").text(quantities.length);

}

function displayCart() {
    // retrieve values from storage
    var retrievedQuantities = localStorage.getItem("storedQuantities");
    var retrievedGlazes = localStorage.getItem("storedGlazess");

    var quantities2 = JSON.parse(retrievedQuantities);
    var glazes2 = JSON.parse(retrievedGlazes);

    //initialize variables
    var cartdata = '<table><tr><th>Product Name</th><th>Glaze</th><th>Quantity</th><th>Price($)</th><th>Total</th></tr>';
    var total = 0;

    // display all items in cart
    for (i=0; i<quantities2.length; i++){
        total += quantities2[i] * 12;
        cartdata += "<tr><td>" + "Blackberry Bun" + "</td><td>" + glazes2[i] +
        "</td><td>" + quantities2[i] + "</td><td>" + "12" + "</td><td>" +
        "</td><td><button onclick='removeItem(" + i + ")'>Delete</button></td></tr>";
    }

    // display table
    cartdata += '<tr><td></td><td></td><td></td><td></td><td>' + total + '</td></tr></table>';

    // set innerHTML to table data
    document.getElementById('cart').innerHTML = cartdata;

    // update number next to cart
    $(".shoppingcarttext").text(quantities2.length);
}

function removeItem(a) {
    // retrieve arrays from storage so that we can modify them
    var retrievedQuantities = localStorage.getItem("storedQuantities");
    var retrievedGlazes = localStorage.getItem("storedGlazess");

    var quantities2 = JSON.parse(retrievedQuantities);
    var glazes2 = JSON.parse(retrievedGlazes);

    // remove item from array
    quantities2.splice(a, 1);
    glazes2.splice(a, 1);

    // push modified arrays to storage
    localStorage.setItem("storedQuantities", JSON.stringify(quantities2));
    localStorage.setItem("storedGlazess", JSON.stringify(glazes2));

    displayCart()

    // update number next to cart
    $(".shoppingcarttext").text(quantities2.length);
}

// Document Load
$(document).ready(function() {
    // pull variables from storage
    var retrievedQuantities = localStorage.getItem("storedQuantities");
    var retrievedGlazes = localStorage.getItem("storedGlazess");

    var quantities2 = JSON.parse(retrievedQuantities);
    var glazes2 = JSON.parse(retrievedGlazes);

    // add to cart
    $("#dropbtnaddtocart").click( function() {
        addToCart();
    });

    // if we're on the cart page, then refresh the text and display the cart
    if (location.href == "file:///Users/Riva/Desktop/rvf_PUI_2018/homework5/shoppingcart.html" ) {
        // update number next to cart
        $(".shoppingcarttext").text(quantities2.length);

        displayCart();
    }
});
































