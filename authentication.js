// check(); 
window.onload = check;

// // Attach event listener for form submission
// document.getElementById('form').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent form submission
//     signup(); // Call the signup function
// });

// Signup function
function signup(e) {
    console.log('working');
    const form = document.getElementById('form').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    let registerUser = JSON.parse(localStorage.getItem("registerUsers")) || [];
    var user = {
        email: email,
        username: username,
        password: password
    };

    registerUser.push(user);
    alert("Welcome " + username + "you are succefully registered");
    localStorage.setItem("registerUsers", JSON.stringify(registerUser));

    // var json = JSON.stringify(user);
    // localStorage.setItem("username", json)
}







// // const form = document.getElementById('form').value;
// document.getElementById('form').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent form submission

//     // Retrieve username and password from form fields
//     const form = document.getElementById('form').value;
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Retrieve registered users' data from localStorage
//     const registerUsers = JSON.parse(localStorage.getItem('registerUsers')) || [];

//     // Find user in registerUsers array
//     const user = registerUsers.find(user => user.username === username);

//     if (!user) {
//         alert('Please Signup First');
//     } else if (user.password === password) {
//         // Redirect to productdetail.html upon successful login
//         window.location.href = './index.html';
//         alert(`Welcome, ${user.username} you are successfully logged in`);
//         // Optionally, you can store the active user in localStorage
//         localStorage.setItem("activeUser", JSON.stringify(user));
//     } else {
//         alert('Wrong Password');
//     }


// });



function login(e) {

    document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
        // Retrieve username and password from form fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
   
    // Retrieve registered users' data from localStorage
    const registerUsers = JSON.parse(localStorage.getItem('registerUsers')) || [];

    // Find user in registerUsers array
    const user = registerUsers.find(user => user.username === username);

    if (!user) {
        alert('Please Signup First');
    } else if (user.password === password) {
        // Redirect to productdetail.html upon successful login
        window.location.href = './index.html';
        alert(`Welcome, ${user.username} you are successfully logged in`);
        // Optionally, you can store the active user in localStorage
        localStorage.setItem("activeUser", JSON.stringify(user));
    } else {
        alert('Wrong Password');
    }
}
)};








// logout
function logout() {
    // add event listener
    console.log("working");
    var user = localStorage.removeItem("activeUser");
    localStorage.setItem('cartNumber', 0); // Reset cart number to zero
    localStorage.setItem('cartData', JSON.stringify([]));
    document.querySelector('.aa-cart-notify').textContent = 0;
    onLoadCartNumber();
    var data = JSON.parse(user);
    console.log(data)
    alert("You are successfully logout");
}



function check() {
    console.log('Checking user status...');
    var user = localStorage.getItem("activeUser");

    if (user) {
        document.getElementById("signup").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        console.log("User is logged in");
    } else {
        document.getElementById("signup").style.display = "inline";
        document.getElementById("login").style.display = "inline";
        document.getElementById("logout").style.display = "none";
        console.log("User is not logged in");
    }
}

  



function onLoadCartNumber() {
    let inCart = JSON.parse(localStorage.getItem("cartData")) || [];
    let productNumber = inCart.length; // Get the total number of items in the cart
    if (productNumber) {
        document.querySelector('.aa-cart-notify').textContent = productNumber; // Update the cart number element
    }
}

// window.onload = check;


