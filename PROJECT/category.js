const categoryList = document.getElementById("categoryList");

const categoryForm = document.getElementById("categoryForm");

const categoryId = document.getElementById("categoryId");
const categoryName = document.getElementById("categoryName");

const statusActive = document.getElementById("statusActive");
const statusInactive = document.getElementById("statusInactive");

const idError = document.getElementById("idError");
const nameError = document.getElementById("nameError");

const btnAddCategory = document.getElementById("btnAddCategory");
const btnSaveCategory = document.getElementById("btnSaveCategory");

let categories =
    JSON.parse(localStorage.getItem("categories")) || [];

if (categories.length === 0) {

    categories = [

        {
            id: "DM001",
            name: "Điện thoại",
            status: "Active"
        },
        {
            id: "DM002",
            name: "Laptop",
            status: "Active"
        },
        {
            id: "DM003",
            name: "Phụ kiện",
            status: "Inactive"
        },
        {
            id: "DM004",
            name: "Máy tính bảng",
            status: "Active"
        },
        {
            id: "DM005",
            name: "Đồng hồ",
            status: "Inactive"
        }
    ];

    localStorage.setItem("categories", JSON.stringify(categories));

}

function showCategory() {

    categoryList.innerHTML = "";

    for (let i = 0; i < categories.length; i++) {

        const category = categories[i];

        let statusHTML = "";

        if (category.status === "Active") {

            statusHTML = `<span class="status active-status"><i class="bi bi-check-circle-fill"></i>Đang hoạt động</span>`;
        } else if (category.status === "Inactive") {

            statusHTML = `<span class="status inactive-status"><i class="bi bi-x-circle-fill"></i>Ngừng hoạt động</span>`;
        }

        categoryList.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${category.id}</td>
                <td>${category.name}</td>
                <td>
                    ${statusHTML}
                </td>
                <td>
                    <div class="action-group">
                        <button class="btn btn-warning btn-sm"><i class="bi bi-pencil-square"></i></button>
                        <button class="btn btn-danger btn-sm"><i class="bi bi-trash3"></i></button>
                    </div>
                </td>
            </tr>
        `;
    }

}
showCategory();


const categoryModal = new bootstrap.Modal(document.getElementById("categoryModal"));

btnAddCategory.addEventListener("click", function () {

    categoryId.value = "";
    categoryName.value = "";
    statusActive.checked = true;
    idError.textContent = "";
    nameError.textContent = "";

    categoryModal.show();

});

categoryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    idError.textContent = "";
    nameError.textContent = "";

    const id = categoryId.value.trim();
    const name = categoryName.value.trim();
    const status = statusActive.checked ? "Active" : "Inactive";

    let isValid = true;


    if (id === "") {

        idError.textContent = "Vui lòng nhập mã danh mục";
        isValid = false;
    } else {
        idError.textContent = "";
    }

    if (name === "") {

        nameError.textContent = "Vui lòng nhập tên danh mục";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    if (!isValid) {
        return;
    }

    let isExistId = false;

    for (let i = 0; i < categories.length; i++) {

        if (categories[i].id === id) {

            isExistId = true;

            break;

        }

    }

    if (isExistId) {

        idError.textContent = "Mã danh mục đã tồn tại";

        return;

    }
    let isExistName = false;

    for (let i = 0; i < categories.length; i++) {

        if (categories[i].name === name) {

            isExistName = true;

            break;

        }

    }

    if (isExistName) {

        nameError.textContent = "Tên danh mục đã tồn tại";

        return;

    }

    if (isValid) {
        const newCategory = {
            id: id,
            name: name,
            status: status
        };

        categories.push(newCategory);
        localStorage.setItem("categories", JSON.stringify(categories));
        showCategory();
        categoryModal.hide();

        alert("Thêm danh mục thành công");
    }

});

