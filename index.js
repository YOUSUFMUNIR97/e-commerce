function signup(e) {
    console.log('working');
    const form = document.getElementById('form').value;
    const username = document.getElementById('username').value;
    const city = document.getElementById('city').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    var user = {
        email: email,
        username: username,
        password: password
    };

    var json = JSON.stringify(user);
    localStorage.setItem("username", json)
    alert("Welcom" + username + "you are succefully registered");
}

function login(e) {
    const form = document.getElementById('form').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    var user = localStorage.getItem('username')
    var data = JSON.parse(user);
    console.log(data);

    if(username !== data.username){
        alert('Please Signup')
    }

    else if(username == data.username && password == data.password){
        alert('Welcome')
    }

    else if(password == null){
        alert("Plese Enter Password")
    }

    else {
        alert ('Wrong Password')
    }
}

// Function to store the product ID in localStorage and redirect to the product detail page
function redirectToProductDetails(productId) {
    localStorage.setItem('productId', productId);
    window.location.href = 'productdetail.html'; // Change the URL to your product detail page
}



let carts = document.querySelectorAll('.add-cart');


console.log("im in carts wohoo");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    console.log("added to cart");
    console.log(i);
    cartNumbers(products[i]);

  })
}


function cartNumbers(product) {
  let productNumber = localStorage.getItem('cartNumber')
  productNumber = parseInt(productNumber);  
  if (productNumber) {
    localStorage.setItem('cartNumber', productNumber + 1);
    document.querySelector('.aa-cart-notify').textContent = productNumber + 1;
  }
  else {
    localStorage.setItem('cartNumber', 1);
    document.querySelector('.aa-cart-notify').textContent = 1;
  }

  setItems(product);

}

function setItems(product){
  console.log("Inside cart item");
  console.log("product click is", product);
  product.inCart = 1;

}

function onLoadCartNumber() {
  productNumber = localStorage.getItem('cartNumber');
  if (productNumber) {
    document.querySelector('.aa-cart-notify').textContent = productNumber;
  }


}

onLoadCartNumber()
