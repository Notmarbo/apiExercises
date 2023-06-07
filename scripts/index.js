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
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);
                let cell7 = row.insertCell(6);
                cell1.innerHTML = data[i].id
                cell2.innerHTML = data[i].dept
                cell3.innerHTML = data[i].courseNum
                cell4.innerHTML = data[i].courseName
                cell5.innerHTML = data[i].instructor
                cell6.innerHTML = data[i].startDate
                cell7.innerHTML = data[i].numDays
            }
        })
}