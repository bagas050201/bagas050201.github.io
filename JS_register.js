

//Script tugas Assignment 2 Phase 2

//calendar picker
const Calender = document.querySelector('.datepicker');
M.Datepicker.init(Calender,{
  format : 'dd-mmmm-yyyy',
  showClearBtn:true,
  i18n:{
    clear:'remove',
    done:'yes',
    cancel:'no'
  }
})

//select box
$(document).ready(function() {
    $('select').material_select();
 });
//end







 //Script tugas Assignment 2 Phase 3

 //fungsi membuat auto generated strong Password
 let el_down = document.getElementById("generate"); 
    
        function gfg_Run() { 
          el_down.innerHTML =  
          Math.random().toString(36).slice(2) +  
          Math.random().toString(36) 
              .toUpperCase().slice(2); 
        }  

//end
        
//untuk melakukan check terhadap password, apakah password itu kuat atau tidak

          let myInput = document.getElementById("pass");
          let letter = document.getElementById("letter");
          let capital = document.getElementById("capital");
          let number = document.getElementById("number");
          let length = document.getElementById("length");
      
          // When the user clicks on the password field, show the message box
          myInput.onfocus = function() {
              document.getElementById("message").style.display = "block";
          }
      
        // When the user clicks outside of the password field, hide the message box
          myInput.onblur = function() {
              document.getElementById("message").style.display = "none";
          }
      
        // When the user starts to type something inside the password field
          myInput.onkeyup = function() {
        // Validate lowercase letters
          let lowerCaseLetters = /[a-z]/g;
          if(myInput.value.match(lowerCaseLetters)) {  
            letter.classList.remove("invalid");
            letter.classList.add("valid");
          } 
          else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
          }
        
        // Validate capital letters
          let upperCaseLetters = /[A-Z]/g;
          if(myInput.value.match(upperCaseLetters)) {  
            capital.classList.remove("invalid");
            capital.classList.add("valid");
          } 
          else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
          }
      
        // Validate numbers
          let numbers = /[0-9]/g;
          if(myInput.value.match(numbers)) {  
            number.classList.remove("invalid");
            number.classList.add("valid");
         } 
          else {
            number.classList.remove("valid");
            number.classList.add("invalid");
          }
        
        // Validate length
          if(myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
         } 
          else {
            length.classList.remove("valid");
            length.classList.add("invalid");
          }
        }


//end

//Javascript untuk menangani "Password must be typed twice and matched"
        function check() {
            if(document.getElementById("pass").value === document.getElementById("c_pass").value) {
                document.getElementById("pesan").innerHTML = "match";
            } 
            else {
                document.getElementById("pesan").innerHTML = "no match";
            }
          }


//end

//Javascript yang menangani "Telephone form separated from handphone form"
          let input = document.querySelector("#phone");
          let iti = window.intlTelInput(input, {
            initialCountry : "id",
            nationalMode : true,
            utilsScript : 'intl-tel-input-17.0.0/src/js/utils.js'
          });
      
          let input2 = document.querySelector("#telephone");
          let iti2 = window.intlTelInput(input2, {
          initialCountry : "id",
          nationalMode : true,
          utilsScript : 'intl-tel-input-17.0.0/src/js/utils.js'
          });
      
          //membuat fungsi mengecek kebenaran pengetikan nomor serta panjang nomor
          function mobileNumber(){
            if(phone.value == ""){
              alert("Please Enter Your Mobile Number");
              phone.focus();
              return false;
            }
      
            if(isNaN(phone.value)){
              alert("Invalid Number");
              phone.focus();
              return false;
            }
            if ((phone.value).length < 12){
              alert("Mobile Number Should be Minimum 12 Digits");
              phone.focus();
              return false;
            }
            if ((phone.value).length > 14){
              alert("Mobile Number Should be Maximum 14 Digits");
              phone.focus();
              return false;
            }
            return true;
          }
      
          function phoneNumber(){
            if(telephone.value == ""){
              alert("Please Enter Your Telephone Number");
              telephone.focus();
              return false;
            }
      
            if(isNaN(telephone.value)){
              alert("Invalid Number");
              telephone.focus();
              return false;
            }
            if ((telephone.value).length < 12){
              alert("Telephone Number Should be Minimum 12 Digits");
              telephone.focus();
              return false;
            }
            if ((telephone.value).length > 14){
              alert("Telephone Number Should be Maximum 14 Digits");
              telephone.focus();
              return false;
            }
            return true;
          }



//end


//JS Handling Google SSO
          function onSignIn(googleUser) {
            // Useful data for your client-side scripts:
            var profile = googleUser.getBasicProfile();
            console.log("ID: " + profile.getId()); // Don't send this directly to your server!
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log("Image URL: " + profile.getImageUrl());
            console.log("Email: " + profile.getEmail());
            
            document.getElementById("username").value = profile.getFamilyName();
            document.getElementById("last_name").value = profile.getName();
            document.getElementById("NIK").value = profile.getId();
            document.getElementById("email").value = profile.getEmail();
            // The ID token you need to pass to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
            console.log("ID Token: " + id_token);
          }


//end

//JS handling for log out account 

          function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
            console.log('User signed out.');
            });
          }

//end