const userName = document.getElementById("userName");
const btnLogout = document.getElementById("btnLogout");

const totalCategory = document.getElementById("totalCategory");
const totalProduct = document.getElementById("totalProduct");
const activeProduct = document.getElementById("activeProduct");
const inactiveProduct = document.getElementById("inactiveProduct");

const categoryTable = document.getElementById("categoryTable");
const productTable = document.getElementById("productTable");
const activityTable = document.getElementById("activityTable");

const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

if (currentUser === null) {

    window.location.href = "login.html";

}

const welcome = document.getElementById("welcome");

welcome.textContent = `Xin chào ${currentUser.fullName}`;

btnLogout.addEventListener("click", function () {

    let confirmLogout = confirm("Bạn có chắc muốn đăng xuất không?");

    if (!confirmLogout) {

        return;

    }

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";

});
