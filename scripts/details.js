"use strict";


const table = document.getElementById("table");


window.onload = () => {
    let urlParams = new URLSearchParams(location.search);
    console.log(urlParams);

    let id = -1;
    if (urlParams.has("courseid") === true) {
        id = urlParams.get("courseid")
        console.log(id);

        fetch("http://localhost:8081/api/courses/" + id)
        .then(response => response.json())
        .then(data => {
           console.log(data)
           showCourseDetails()
           
        })
    }
}
function showCourseDetails() {
    
    console.log("second console this is show all courses function");
    
    
  
    fetch("http://localhost:8081/api/courses")
    
    .then((response) => response.json())
    
    .then((data) => {
        console.log(data);
      
     
            for(let i = 0; i < data.length; i++){
                console.log("Looping")
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);
            
                cell1.innerHTML = data[i].dept
                cell2.innerHTML = data[i].courseNum
                cell3.innerHTML = data[i].courseName
                cell4.innerHTML = data[i].instructor
                cell5.innerHTML = data[i].startDate
                cell6.innerHTML = data[i].numDays
    
          

                }
            })
        }