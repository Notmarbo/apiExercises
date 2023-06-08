"use strict";

const table = document.getElementById("table");


window.onload = () => {
    fetch("http://localhost:8081/api/courses/")
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < data.length; i++){
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let a = document.createElement("a");

                a.innerHTML = data[i].courseName;
                a.title = "this is a test";
                a.href = `http://localhost:8081/details.html?courseid=${data[i].id}`;


                cell1.innerHTML = data[i].dept
                cell2.appendChild(a);
                cell3.innerHTML = data[i].courseNum
                
            }
        })
        
}