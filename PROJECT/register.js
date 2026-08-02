const form = document.getElementById("form");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const agree = document.getElementById("agree");

const errorName = document.querySelector(".error-name");
const errorEmail = document.querySelector(".error-email");
const errorPassword = document.querySelector(".error-password");
const errorConfirmPassword = document.querySelector(".error-confirm-password");
const errorAgree = document.querySelector(".error-agree");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const inputFullName = fullName.value.trim();
    const inputEmail = email.value.trim();
    const inputPassword = password.value;
    const inputConfirmPassword = confirmPassword.value;
    const isAgree = agree.checked;

    errorName.textContent = "";
    errorEmail.textContent = "";
    errorPassword.textContent = "";
    errorConfirmPassword.textContent = "";
    errorAgree.textContent = "";

    let isValid = true;

    if (inputFullName === "") {

        errorName.textContent = "Họ và tên không được để trống";

        isValid = false;

    }

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

    if (inputConfirmPassword === "") {

        errorConfirmPassword.textContent = "Vui lòng xác nhận mật khẩu";

        isValid = false;

    } else if (inputPassword !== inputConfirmPassword) {

        errorConfirmPassword.textContent = "Mật khẩu xác nhận không khớp";

        isValid = false;

    }

    if (!isAgree) {

        errorAgree.textContent = "Bạn phải đồng ý với điều khoản";

        isValid = false;

    }

    if (!isValid) {
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    let isExist = false;

    for (let i = 0; i < users.length; i++) {

        if (users[i].email === inputEmail) {

            isExist = true;

            break;
        }
    }

    if (isExist) {

        errorEmail.textContent = "Email đã được đăng ký";

        return;
    }

    const newUser = {
        fullName: inputFullName,
        email: inputEmail,
        password: inputPassword
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");

    window.location.href = "login.html";
});
