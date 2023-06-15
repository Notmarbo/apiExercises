"use strict";


const todoTitle = document.getElementById("todoTitle");
const todoCompleted = document.getElementById("todoCompleted");
const todoUserId = document.getElementById("todoUserId");
const todoId = document.getElementById("todoId");
const userInput = document.getElementById("userInput");

const messageText = document.getElementById("messageText");


const editForm = document.getElementById("editForm");


const updateBtn = document.getElementById("updateBtn");
const enterBtn = document.getElementById("enterBtn");
const resetBtn = document.getElementById("resetBtn")



window.onload = () => {
    updateBtn.onclick = onUpdateBtnClicked;
    enterBtn.onclick = onEnterBtnClicked;
    resetBtn.onclick = onResetBtnClicked;
    hideEditForm();
}

function onEnterBtnClicked() {
    showEditForm();
    getIdInfo();
    console.log(userInput.value)
}
function onResetBtnClicked() {
    hideEditForm();
}
function getIdInfo() {
    fetch(" http://localhost:3000/todos/" + userInput.value)
    .then(response => response.json())
    .then(info => {
        todoTitle.value = info.title;
        todoCompleted.value = info.completed;
        todoUserId.value = info.userId;
        todoId.value = info.id;
    })
    .catch(error => {
        console.error("error",error)
    })
}
function onUpdateBtnClicked() {

}

function showEditForm() {
    editForm.style.display = "block";
}
function hideEditForm() {
    editForm.style.display = "none";
}