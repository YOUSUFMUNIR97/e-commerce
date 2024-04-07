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





function login(username, password) {

    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
    
        // Retrieve username and password from form fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        // Your login logic goes here
        login(username, password);
    });
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
    check();
}




function check() {
    console.log('page is fully loaded');
    var user = localStorage.getItem("activeUser");
    var data = JSON.parse(user);
    console.log("checking data", data);

    if (data === null) {
        document.getElementById("signup").style.display = "contents";
        document.getElementById("login").style.display = "contents";
        document.getElementById("logout").style.display = "none";
    }
    else {
        document.getElementById("signup").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "contents";
    }

}


function onLoadCartNumber() {
    let inCart = JSON.parse(localStorage.getItem("cartData")) || [];
    let productNumber = inCart.length; // Get the total number of items in the cart
    if (productNumber) {
        document.querySelector('.aa-cart-notify').textContent = productNumber; // Update the cart number element
    }
}


window.onload = check();


