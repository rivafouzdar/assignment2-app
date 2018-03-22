/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 5.00;
var fadeTime = 300;

/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;

  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });

  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = 5;
  var total = subtotal + tax + shipping;

  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    } else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  // var quantity = (productRow.children('product-quantity').val());
  var linePrice = price * quantity;

  // console.log(productRow);
  // console.log(price);
  // console.log(quantity);
  // console.log(linePrice);

  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
        $(this).text(linePrice.toFixed(2));
        recalculateCart();
        $(this).fadeIn(fadeTime);
    });
  });
}


/* Remove item from cart */
function removeItem(removeButton)
{
    /* Remove row from DOM and recalc cart total */
    var productRow = $(removeButton).parent().parent();
    console.log(productRow);
    productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
    });
}

function addItem(addToCart) {

}

function item(quantity, glaze) {
    this.quantity = quantity;
    this.glaze = glaze;
}

function addToCart() {
    var existingItems = JSON.parse(sessionStorage.getItem("allItems"));
    if (existingItems == null) existingItems = [];
    var quantity = $(".quantity :selected").text();
    var glaze = $(".glaze :selected").text();
    var item = {
        "quantity": quantity,
        "glaze": glaze
    };
    sessionStorage.setItem("item", JSON.stringify(item));
    existingItems.push(item);
    sessionStorage.setItem("allItems", JSON.stringify(existingItems));

    //update the cart number
    var retrievedData = sessionStorage.getItem("allItems");
    var items = JSON.parse(retrievedData);
    $(".shoppingcarttext").text(items.length);
    $(".shoppingcarttext").css("font-family", "Muli");

}

function updateCart() {
    var retrievedData = sessionStorage.getItem("allItems");
    var items = JSON.parse(retrievedData);
    for (var i=0; i<items.length; i++) {
        $(".product-quantity").text(items[i].quantity);
        $(".product-glaze").text(items[i].glaze);
    }
}

// Document Load
$(document).ready(function() {
    var retrievedData = sessionStorage.getItem("allItems");
    var items = JSON.parse(retrievedData);

    //cart empty
    if (items == null) {
        // update number next to cart
        $(".shoppingcarttext").text("0");
        $(".shoppingcarttext").css("font-family", "Muli");
        // Say cart empty
        $(".shopping-cart").text("Cart Empty");
        $(".shopping-cart").css("font-family", "Muli");
    }
    else //cart not empty
    {
        // update number next to cart
        $(".shoppingcarttext").text(items.length);
        $(".shoppingcarttext").css("font-family", "Muli");
    }

    $("#dropbtnaddtocart").click(function() {
        addToCart();
        updateCart();

        // console.log(existingItems);
    });

    //remove item from cart
    $('.remove-product').click( function() {
        removeItem(this);
        updateQuantity(this);
    });
});































