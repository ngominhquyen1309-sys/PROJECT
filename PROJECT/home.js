let products = JSON.parse(localStorage.getItem("products")) || [];

let categories = JSON.parse(localStorage.getItem("categories")) || [];

const productList = document.getElementById("product-list");

function getCategoryName(id) {

    for (let i = 0; i < categories.length; i++) {

        if (categories[i].id === id) {

            return categories[i].category_name;

        }

    }

    return "";

}

function showProducts() {

    productList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        const product = products[i];

        if (product.status !== "ACTIVE") {
            continue;
        }

        productList.innerHTML += `

        <div class="col-xl-3 col-lg-4 col-md-6">

            <div class="card product-card border-0 h-100">

                <div class="text-end p-3">

                    <i class="fa-regular fa-heart wishlist-icon"></i>

                </div>

                <img
                    src="${product.image}"
                    class="card-img-top product-img"
                    alt="${product.product_name}">

                <div class="card-body d-flex flex-column text-center">

                    <p class="product-name">

                        ${product.product_name}

                    </p>

                    <p class="product-price fw-bold">

                        ${product.price.toLocaleString()}đ

                    </p>

                    <button class="btn btn-dark mt-auto">

                        Mua ngay

                    </button>

                </div>

            </div>

        </div>

        `;

    }

}

showProducts();