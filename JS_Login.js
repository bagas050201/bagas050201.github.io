function userName(){
    if(text.value == ""){
    alert("Please Enter Your Username");
    text.focus();
    return false;
  }
  if ((text.value).length < 5){
    alert("Username Should be Minimum 5 Digits");
    text.focus();
    return false;
  }
  return true;
  }

   function password(){
    if(pass.value == ""){
    alert("Please Enter Your Password");
    pass.focus();
    return false;
  }
  if ((pass.value).length < 8){
    alert(" Password Should be Minimum 8 Digits");
    pass.focus();
    return false;
  }
  return true;
  }