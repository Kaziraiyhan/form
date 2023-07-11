
let first_name_input = document.querySelector("#first_name_input") ;
let first_name = document.querySelector("#first_name") ;
let last_name_input = document.querySelector("#last_name_input");
let last_name = document.querySelector("#last_name");
let email = document.querySelector("#email");
let email_input = document.querySelector("#email_input")
let con_email = document.querySelector("#con_email")
let con_email_input =document.querySelector("#con_email_input")
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let password_input = document.querySelector("#password_input")
let password = document.querySelector("#password")
let con_password_input = document.querySelector("#con_password_input")
let con_password = document.querySelector("#con_password")


let number =  document.querySelector("#number")
let number_input = document.querySelector("#number_input")
let barth_date = document.querySelector("#barth_date")
let barth_date_input = document.querySelector("#barth_date_input")
let gender_wrapper = document.querySelector("#gender_wrapper")
let city_select =document.querySelector("#city_select")
let city =document.querySelector("#city")
let country_select =document.querySelector("#country_select")
let country =document.querySelector("#country")
let btn = document.querySelector("#btn");


var showhide_pass = document.querySelector(".showhide_pass")
var con_showhide_pass = document.querySelector(".con_showhide_pass")

const radio1 = document.querySelector('input[name="gender"][value="option1"]');
const radio2 = document.querySelector('input[name="gender"][value="option2"]');
const radio3 = document.querySelector('input[name="gender"][value="option3"]');


// let css_after = window.getComputedStyle(first_name,'::after');
// console.log(css_after.backgroundColor)


function togglePassword() {

  if (password_input.value.length > 0) {
    showhide_pass.style.display = 'inline';
  } else {
    showhide_pass.style.display = 'none';
  }
}



showhide_pass.addEventListener("click",function(){
if(password_input.type == "password"){
  password_input.type = "text"
  showhide_pass.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
}else if(password_input.type == "text"){
  password_input.type = "password"
  showhide_pass.innerHTML = '<i class="fa-regular showhide fa-eye"></i>'
}
})

function con_togglePassword() {

  if (con_password_input.value.length > 0) {
    con_showhide_pass.style.display = 'inline';
  } else {
    con_showhide_pass.style.display = 'none';
  }
}

con_showhide_pass.addEventListener("click",function(){
if(con_password_input.type == "password"){
  con_password_input.type = "text"
  con_showhide_pass.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
}else if(con_password_input.type == "text"){
  con_password_input.type = "password"
  con_showhide_pass.innerHTML = '<i class="fa-regular showhide fa-eye"></i>'
}


})




function check_form () {
  var return_val = true ;
  var mai_formet = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
   if (first_name_input.value == "") { 
    first_name.style.setProperty('--after',"' *Entet First Name'")
   return_val = false }

   if (!first_name_input.value == "") { 
    console.log("  First name nai")
    first_name.style.setProperty('--after',"' '")
 }

   
   if (last_name_input.value == "") { 
    
    last_name.style.setProperty('--after',"' *Entet Last Name'")
   return_val = false
   }

   if (!last_name_input.value == "") { 
    console.log("  First name nai")
    last_name.style.setProperty('--after',"' '")
    
   }
   if (email_input.value == ""){
     email.style.setProperty( "--after", "'*Enter Email Address'")
     return_val = false
   }else if(!email_input.value.match(mailformat)){
    return_val = false
    email.style.setProperty( "--after", "'*Enter valid email'")
   }else if(email_input.value.match(mailformat)){
    email.style.setProperty( "--after", "''")
   }
    if(con_email_input.value == ""){
    con_email.style.setProperty("--after", "'Conform Email Address'")
    return_val = false
   }
    if(!con_email_input.value == ""){
    con_email.style.setProperty("--after", "''")
   }

 if (email_input.value !== con_email_input.value) {
    // The email addresses do not match
    return_val = false
    con_email.style.setProperty("--after", "'Email Address not Match'")
   
  } 
  if (password_input.value == ""){
    password.style.setProperty( "--after", "'*Password  empty'")
    return_val = false
  }
  if (password_input.value !== ""){
    password.style.setProperty( "--after", "''")
    
  }
  if (con_password_input.value == ""){
    con_password.style.setProperty( "--after", "'*Password  empty'")
    return_val = false
  }

  if (con_password_input.value !== ""){
    con_password.style.setProperty( "--after", "''")
    
  }
  if(con_password_input.value != password_input.value){
    con_password.style.setProperty( "--after", "'*Password  not match'")
    return_val = false
  }
  if(con_password_input.value == password_input.value){
    con_password.style.setProperty( "--after", "''")
    
  }





  ////


  if(number_input.value == ""){
    number.style.setProperty("--after", `"Number can't be empty"`)
    return_val = false
  }
  if(number_input.value !== ""){
    number.style.setProperty("--after", "''")
    
  }
  if(number_input.length <= 11){
    number.style.setProperty("--after", "'not shfldafsda'")
    return_val = false
  }
  if(barth_date_input.value == ""){
    barth_date.style.setProperty("--after", "hellow")
  }


  if (radio1.checked) {
    gender_wrapper.style.setProperty("--after","''")
    
  } else if (radio2.checked) {
    gender_wrapper.style.setProperty("--after","''")
  } else if (radio3.checked) {
    gender_wrapper.style.setProperty("--after","''")
  } 
  else {
    gender_wrapper.style.setProperty("--after","'Have to select your gender'")
    return_val = false
  };
  
  if (city.value == "") {
    city_select.style.setProperty("--after", "'select your City'")
    return_val = false
  } 
  if (city.value !== "") {
    city_select.style.setProperty("--after", "''")
    
  } 

  if (country.value == "") {
    country_select.style.setProperty("--after", "'select your Country'")
    return_val = false
  } 
  if (country.value !== "") {
    country_select.style.setProperty("--after", "''")
    
  } 



     return return_val


} 




