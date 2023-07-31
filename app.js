
function display(){


let email = document.getElementById("email").value;
let name = document.getElementById("name").value;
let genderValue ;
let male =document.getElementById("Male");
let female =document.getElementById("Female");
if(male.checked)
{
    genderValue = male.value;
}
else if (female.checked)
{
    genderValue = female.value;
}


let skills=[];
let checkbox = document.getElementsByName("skills");
for (var i = 0; i < checkbox.length; i++) {
          if (checkbox[i].checked) {
            skills.push(checkbox[i].value);
          }}


let displayData = document.getElementById("detailsOfUsers");
displayData.style.visibility ="visible";
displayData.innerHTML =`<h1><b>DETAILS</b></h1><br> Name: ` + name + `<br><br> Email: ` + email + `<br><br>  Gender: `+genderValue + `<br><br>Skills: ` + skills + '<br><br>';


}