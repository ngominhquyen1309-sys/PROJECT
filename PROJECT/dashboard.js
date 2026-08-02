const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const welcome = document.getElementById("welcome");

welcome.textContent = `Xin chào ${currentUser.fullName}`;