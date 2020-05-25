// side navbar

document.addEventListener('DOMContentLoaded', function() {
    var myNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(myNav, {});
    });

//end

//search by name users

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

//end

//rank checked

let btn= document.getElementById("btn");
let input = document.getElementById("numb");
let output = document.getElementById("demo"); 
let formArea = document.getElementById("formArea"); 

let zips = ["5000","15000","25000","32000","37000","45000","60000", "Soldier", "Guardian", "Gladiator1", "Captain", "Hero"];

btn.addEventListener("click", function() {
    let result = null;

    // indexOf() returns -1 when the supplied value isn't present
    if(zips.indexOf(numb.value.toLowerCase()) > -1){
      result =  "successful, your account is ready to rank up! Please fill out the form below";
      
      // Show the form by removing the hidden class
      formArea.classList.remove("hidden");
    } else {
      result = "Sorry";
      // Hide the form by adding the hidden class
      formArea.classList.add("hidden");      
    }
    output.textContent = result;

});

//end

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


