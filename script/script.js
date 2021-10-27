/*define all the inputs */
const table = document.querySelector(".table");
const form = document.querySelector("form");
const welcome = document.querySelector(".welcome");
const btn = document.querySelector(".btn");
const error = document.querySelectorAll(".error");
const btnInfo=document.querySelector('.btn-info');
/*---------------------------------------------------------------------------*/
/*Validation Function*/
function validate() {
  console.log(form[1].value);
  if(form[0].value == "" ||(form[0].value.match(/[a-zA-Z0-9]{6,18}$/gm)))
     (error[0].innerHTML =
        "The name must be between 6 and 18")
    else (error[0].innerHTML = "");


  if(form[1].value == "" || !(form[1].value>=1 && form[1].value<16))error[1].innerHTML =
  "count must be between 1 and 15";
    else (error[1].innerHTML = "");

  if(form[2].value == "1")error[2].innerHTML = "The user must choose a type";
    else (error[2].innerHTML = "");


  if(form[2].value == "2" && form[4].value == "2")error[4].innerHTML = " this type of cake is not dairy free";
    elseerror[4].innerHTML = "";
  if(form[2].value == "2" && form[3].value == "10") (error[3].innerHTML = "this type of cake cannot be delivered at 4 PM.")
    else (error[3].innerHTML = "");
}
/*---------------------------------------------------*/

btn.addEventListener("click", () => {
  validate();
});
/*Store the user name in local storage*/
form[0].addEventListener("blur", (e) => {
  localStorage.setItem("username", e.target.value);
});

/*Fetch the json file*/
fetch("../cup cakes.json")
  .then((response) => response.json())
  .then((data) => {
    for (i = 0; i < data.length; i++) {
      let tabel = ` <tr>
    <td>${data[i].name}</td>
    <td class="${allColor(data[i])}">${data[i].calories}</td>
    <td>${data[i].weight}</td>
  </tr>`;
      table.insertAdjacentHTML("beforeend", tabel);
    }
  });

function allColor(data) {
  return data.calories == "high"
    ? "red"
    : data.calories == "low"
    ? "green"
    : data.calories == "medium"
    ? "orange"
    : "";
}

btnInfo.addEventListener('click',function(){
  welcome.innerHTML = `welcome ${localStorage.getItem("username")}`;
})