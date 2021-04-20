<script src="https://www.gstatic.com/firebasejs/3.1.0/firebase.js">





    // Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyDtUjLqHlv2rUFB3_wojRojyJKCf7L2KTA",
    authDomain: "roomwala-3499e.firebaseapp.com",
    databaseURL: "https://roomwala-3499e-default-rtdb.firebaseio.com",
    projectId: "roomwala-3499e",
    storageBucket: "roomwala-3499e.appspot.com",
    messagingSenderId: "268971439203",
    appId: "1:268971439203:web:f702eccfca87f4ed363456"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

     function writeUserData() {
        var fname= document.getElementById("fname").value;
        var lname= document.getElementById("lname").value;
        var email= document.getElementById("email").value;
        var location= document.getElementById("location").value;
        var password=document.getElementById("password").value;
   firebase.database().ref('users/'+fname).set({
    firstName:fname,
    lastName:lname,
    Email:email,
    Location:location,
    Password:password
  });
}

</script>