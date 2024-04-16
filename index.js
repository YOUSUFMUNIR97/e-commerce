
const demoData = [
    {
        name: "Watch",
        price: 1765,
        image: "images/product-8.jpg",
    },
    {
        name: "T-Shirt",
        price: 500,
        image: "images/product-1.jpg",
        // Add more details if needed
    },
    {
        name: "T-Shirt",
        price: 500,
        image: "images/product-6.jpg",
        // Add more details if needed
    },
    {
        name: "T-Shirt",
        price: 500,
        image: "images/product-4.jpg",
        // Add more details if needed
    },
    {
        name: "Shoes",
        price: 1780,
        image: "images/product-2.jpg",
        // Add more details if needed
    },
    {
        name: "Pent",
        price: 1600,
        image: "images/product-3.jpg",
        // Add more details if needed
    },
    // Add more products as needed
];









// Function to generate HTML for each product
function generateProductHTML(product) {
    return `
   
        <div class=" col-lg-3 col-md-6 col-sm-6 col-12" style="width: 10rem;">
        <div class="card">
            <img class="card-img-top" src="${product.image}" alt="${product.name}">
            <div class="card-body">
             <h2>${product.name}</h2>
            <p>Price: ${product.price}</p>
            <button id="addToCartBtn" class="btn btn-primary btn-block mt-3 productdetailpage">View Details</button>
            </div>
            </div>
        </div> 
    `;
}

// Function to render products using map
function renderProducts(products) {
    const productsContainer = document.getElementById('products-container');
    console.log(productsContainer); // Check if productsContainer is null or the correct element
    const productsHTML = products.map(product => generateProductHTML(product)).join('');
    if (productsContainer) {
        productsContainer.innerHTML = productsHTML;
    } else {
        console.error("Products container not found.");
    }
}

// Initial rendering
renderProducts(demoData);




// Function to store the product ID in localStorage and redirect to the product detail page
function redirectToProductDetails(productId) {
    localStorage.setItem('productId', productId);
    window.location.href = './productdetail.html'; // Change the URL to your product detail page
}



let carts = document.querySelectorAll('.add-cart');
let productpage = document.querySelectorAll('.productdetailpage')


console.log("im in carts wohoo");
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log("added to cart");
        console.log(i + 1);
        cartNumbers(demoData[i]);
        let cartData = JSON.parse(localStorage.getItem("cart")) || [];
        let cartProducts = {
            name: name,
            price: price,
            image: image

        };

        cartData.push(cartProducts);
        // alert(name + " Added to Cart")
        localStorage.setItem("cartData", JSON.stringify(cartData));

        redirectToProductDetails(i)
    })
}

for (let i = 0; i < productpage.length; i++) {
    productpage[i].addEventListener('click', () => {
        console.log("added to cart");
        console.log(i + 1);
        redirectToProductDetails(i)
    })
}


function cartNumbers(product) {
    let isLoggedIn = true; // Assuming this variable indicates whether the user is logged in or not

    if (isLoggedIn) {
        let productNumber = localStorage.getItem('cartNumber');
        productNumber = parseInt(productNumber);
        if (productNumber) {
            localStorage.setItem('cartNumber', productNumber + 1);
            document.querySelector('.aa-cart-notify').textContent = productNumber + 1;
        } else {
            localStorage.setItem('cartNumber', 1);
            document.querySelector('.aa-cart-notify').textContent = 1;
        }
    }

    setItems(product);
}


function setItems(product) {
    console.log("Inside cart item");
    console.log("product click is", product);
    localStorage.setItem("productDetail", JSON.stringify(product));
    //   product.inCart = 1;

}
function onLoadCartNumber() {
    let inCart = JSON.parse(localStorage.getItem("cartData")) || [];
    let productNumber = inCart.length; // Get the total number of items in the cart
    if (productNumber) {
        document.querySelector('.aa-cart-notify').textContent = productNumber; // Update the cart number element
    }
}

onLoadCartNumber();





// Function to generate HTML for each cart product
function generateCartHTML(cart, index) {
    return `


    
    <div class="row my-2" style="background-color:pink";>
    <div class="col" style="display: flex; justify-content: center; align-items: center;">
    <button class="btn btn-primary btn-block" onClick="removeItem(${index});">Delete</button>
    </div>
        
    
    <div class="col m-2">
            <img class="" style="width:30%; display: flex; justify-content: flex-start; align-items: center;"  src="${cart.image}" alt="${cart.name}">
        </div>
        
        <div class="col" style="display: flex; justify-content: flex-start; align-items: center;">
            <h5>${cart.name}</h2>
        </div>

        <div class="col" style="display: flex; justify-content: flex-end; align-items: center;">
            <h5>Price: ${cart.price}</h5>
        </div>

       
    </div>
    `;
}

// Function to remove item from cart
function removeItem(index) {
    let inCart = JSON.parse(localStorage.getItem("cartData")) || [];
    inCart.splice(index, 1); // Remove the item at the given index
    localStorage.setItem("cartData", JSON.stringify(inCart)); // Update localStorage
    renderCart(); // Render the updated cart
    onLoadCartNumber(); // Update the cart number
    window.location.reload(); // Refresh the page
}

function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    let inCart = JSON.parse(localStorage.getItem("cartData")) || [];
    if (cartContainer) {
        if (inCart.length === 0) {
            cartContainer.innerHTML = "Cart is empty";
        } else {
            // Generate HTML for each cart item
            const cartHTML = inCart.map((cart, index) => generateCartHTML(cart, index)).join('');

            // Calculate total price
            const total = calculateTotal(inCart);

            // Add total HTML
            const totalHTML = `
                <div class="row my-2">
                    <div class="col"><h4>Total Price:</h4></div>
                    <div class="col"></div>
                    <div class="col text-end">
                        <h4> Rs: ${total}</h4>
                    </div>
                </div>
            `;

            // Combine cart HTML with total HTML
            const finalHTML = cartHTML + totalHTML;

            // Set the content of cart container
            cartContainer.innerHTML = finalHTML;
        }
    } else {
        console.error("Cart container not found.");
    }
}

// Function to calculate total price of cart items
function calculateTotal(cart) {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total;
}




// Initial rendering of cart items
renderCart();



