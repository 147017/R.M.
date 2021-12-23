localStorage.setItem("user_name", user_name);

var firebaseConfig = {
    apiKey: "AIzaSyBlWIlmh7dGWzfKA0bp6zjQkS4JU3jiuNA",
    authDomain: "database-1-de7b2.firebaseapp.com",
    databaseURL: "https://database-1-de7b2-default-rtdb.firebaseio.com",
    projectId: "database-1-de7b2",
    storageBucket: "database-1-de7b2.appspot.com",
    messagingSenderId: "187650666078",
    appId: "1:187650666078:web:5be5b2ecabb423d166cecf",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "index2.html";
}