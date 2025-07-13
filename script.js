function saveform(event){
    event.preventDefault(); 
    var btn = document.getElementById("btn");
var names = document.getElementById("name").value
var age = document.getElementById("age").value
var gender = document.querySelector('input[name=gender]:checked').value;
var course = document.getElementById("course").value;
var email = document.getElementById("email").value
var x = document.createElement("li");

    var newtable = document.getElementById("datatable").getElementsByTagName("tbody")[0];
var newrow = newtable.insertRow();
var cell0 = newrow.insertCell(0);
var cell1 = newrow.insertCell(1);
var cell2 = newrow.insertCell(2);
var cell3 = newrow.insertCell(3);
var cell4 = newrow.insertCell(4);
var cell5 = newrow.insertCell(5);

cell0.textContent = names;
cell1.textContent = age;
cell2.textContent = gender;
cell3.textContent = course;
cell4.textContent = email;
cell5.innerHTML = "<button class='del' onclick='deleteaction(event)'>Delete</button>"
}
function deleteaction(event){
    event.target.closest("tr").remove()
}
// btn.addEventListener("click",function(){
//     var btn = document.getElementById("btn");
// var names = document.getElementById("name").value
// var age = document.getElementById("age").value
// var gender = document.querySelector('input[name=gender]:checked').value;
// var course = document.getElementById("course").value;
// var email = document.getElementById("email").value
// // var cont = document.getElementById("container")  
//     // console.log(names.value,age.value,gender.value,course.value,email.value)
//     var x = document.createElement("li");
//     // x.textContent = names.value;
//     // cont.append(x)

//     var newtable = document.getElementById("datatable").getElementsByTagName("tbody")[0];
// var newrow = newtable.insertRow();
// var cell0 = newrow.insertCell(0);
// var cell1 = newrow.insertCell(1);
// var cell2 = newrow.insertCell(2);
// var cell3 = newrow.insertCell(3);
// var cell4 = newrow.insertCell(4);

// cell0.textContent = names;
// cell1.textContent = age;
// cell2.textContent = gender;
// cell3.textContent = course;
// cell4.textContent = email;
// })

