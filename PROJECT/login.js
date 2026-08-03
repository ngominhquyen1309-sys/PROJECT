const form = document.getElementById("form");

const email = document.getElementById("email");
const password = document.getElementById("password");

const errorEmail = document.querySelector(".error-email");
const errorPassword = document.querySelector(".error-password");

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const inputEmail = email.value.trim();
    const inputPassword = password.value;

    errorEmail.textContent = "";
    errorPassword.textContent = "";

    let isValid = true;

    if (inputEmail === "") {

        errorEmail.textContent = "Email không được để trống";

        isValid = false;

    } else if (!emailRegex.test(inputEmail)) {

        errorEmail.textContent = "Email không đúng định dạng";

        isValid = false;
    }

    if (inputPassword === "") {

        errorPassword.textContent = "Mật khẩu không được để trống";

        isValid = false;
    } else if (inputPassword.length < 8) {

        errorPassword.textContent = "Mật khẩu phải có ít nhất 8 ký tự";

        isValid = false;
    }

    if (!isValid) {
        return;
    }

   const users = JSON.parse(localStorage.getItem("users")) || [];

let currentUser = null;

for (let i = 0; i < users.length; i++) {

    if (
        users[i].email === inputEmail &&
        users[i].password === inputPassword
    ) {

        currentUser = users[i];

        break;
    }
}

if (currentUser === null) {

    errorPassword.textContent = "Email hoặc mật khẩu không chính xác";

    return;
}

alert("Đăng nhập thành công");

localStorage.setItem("currentUser", JSON.stringify(currentUser));

    if (rememberMe.checked) {

    const rememberUser = {

        user: currentUser,

        expire: Date.now() + 24 * 60 * 60 * 1000

    };

    localStorage.setItem("rememberUser", JSON.stringify(rememberUser));

}

window.location.href = "dashboard.html";

});


let togglePassword = document.getElementById("togglePassword");

let rememberMe = document.getElementById("rememberMe");

let rememberUser =
    JSON.parse(localStorage.getItem("rememberUser"));

if (rememberUser !== null) {

    if (rememberUser.expire > Date.now()) {

        localStorage.setItem(
            "currentUser",
            JSON.stringify(rememberUser.user)
        );

        window.location.href = "dashboard.html";

    } else {

        localStorage.removeItem("rememberUser");

    }

}

function togglePass() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

togglePassword.addEventListener("click", togglePass);
