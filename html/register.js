var form = document.getElementById("register-form");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var vegan = document.getElementById("vegan");
var gluten = document.getElementById("gluten");
var peanuts = document.getElementById("peanuts");
var lactose = document.getElementById("lactose");
var sugar = document.getElementById("sugar");
var salt = document.getElementById("salt");
var oil = document.getElementById("oil");
var fat = document.getElementById("fat");
var forbidden = document.getElementById("forbidden");
var sDate = document.getElementById("sDate");
var eDate = document.getElementById("eDate");
var forbidden2 = document.getElementById("forbidden2");

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

form.onsubmit = function(e){
    e.preventDefault();
    var user = {
        email : email.value,
        password : password.value,
        vegan : vegan.checked,
        allergens : [],
        forbidden : forbidden.value,
        sDate : sDate.value,
        eDate : eDate.value,
        forbidden2 : forbidden2.value
    }

    if(gluten.checked) user.allergens.push(gluten.name);
    if(peanuts.checked) user.allergens.push(peanuts.name);
    if(lactose.checked) user.allergens.push(lactose.name);
    if(sugar.checked) user.allergens.push(sugar.name);
    if(salt.checked) user.allergens.push(salt.name);
    if(oil.checked) user.allergens.push(oil.name);
    if(fat.checked) user.allergens.push(fat.name);
    console.log(user);

    xhr = new XMLHttpRequest();
    var url = "/api/users";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            window.open("login.html");
        }
    }
    xhr.send(JSON.stringify(user));


}