var firebaseConfig = {
    apiKey: "AIzaSyDj0_0uTOz3VxT4vt9iQlBXDqnANZKdFrg",
    authDomain: "your-mobile-school-original.firebaseapp.com",
    databaseURL: "https://your-mobile-school-original-default-rtdb.firebaseio.com",
    projectId: "your-mobile-school-original",
    storageBucket: "your-mobile-school-original.appspot.com",
    messagingSenderId: "806983881654",
    appId: "1:806983881654:web:01f59bb2eaf69d1a516717",
    measurementId: "G-QZFQCH97L7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name" , user_name);
   

    


    window.location = "both.html";
}