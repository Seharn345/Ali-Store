// const searchInput = document.getElementById("searchInput");
// const cards = document.querySelectorAll(".product-card");
// const buttons = document.querySelectorAll(".filter-buttons button");

// let currentFilter = "all";

// function filterProducts() {

//     const text = searchInput.value.toLowerCase();

//     cards.forEach(card => {

//         const title = card.querySelector("h3").textContent.toLowerCase();
//         const category = card.dataset.category;

//         const matchSearch = title.includes(text);
//         const matchCategory =
//             currentFilter === "all" ||
//             category === currentFilter;

//         if (matchSearch && matchCategory) {

//             card.style.display = "";

//         } else {

//             card.style.display = "none";

//         }

//     });

// }

// searchInput.addEventListener("keyup", filterProducts);

// buttons.forEach(btn => {

//     btn.addEventListener("click", () => {

//         buttons.forEach(b => b.classList.remove("active"));

//         btn.classList.add("active");

//         currentFilter = btn.dataset.filter;

//         filterProducts();

//     });

// });


// function filterProducts() {

//     const text = searchInput.value.trim().toLowerCase();

//     cards.forEach(card => {

//         const title = card.querySelector("h3").textContent.toLowerCase();
//         const category = card.dataset.category.toLowerCase();

//         const words = title.split(" ");

//       const matchSearch =
//     text === "" ||
//     title.includes(text) ||
//     category.includes(text) ||
//     price.includes(text) ||
//     title.split(" ").some(word => word.startsWith(text));

//         const matchCategory =
//             currentFilter === "all" ||
//             category === currentFilter;

//         if (matchSearch && matchCategory) {

//             card.style.display = "";

//         } else {

//             card.style.display = "none";

//         }

//     });

// }


// ===========================
// Wishlist Heart
// ===========================

// const hearts = document.querySelectorAll(".wishlist-btn");

// hearts.forEach(btn => {

//     btn.addEventListener("click", function () {

//         const icon = this.querySelector("i");

//         icon.classList.toggle("fa-regular");
//         icon.classList.toggle("fa-solid");

//         this.classList.toggle("liked");

//     });

// });


// ===============================
// Auto Like Counter + Animation
// ===============================

// document.querySelectorAll(".wishlist-btn").forEach((btn, index) => {

    // Like Counter Create
//     const count = document.createElement("span");
//     count.className = "like-count";
//     count.innerText = Math.floor(Math.random() * 400) + 20;

//     btn.parentNode.insertBefore(count, btn.nextSibling);

//     btn.addEventListener("click", function () {

//         const icon = this.querySelector("i");

//         // Heart Color
//         icon.classList.toggle("fa-regular");
//         icon.classList.toggle("fa-solid");

//         this.classList.toggle("liked");

//         // Counter
//         let value = parseInt(count.innerText);

//         if (this.classList.contains("liked")) {

//             count.innerText = value + 1;

//         } else {

//             count.innerText = value - 1;

//         }

//         // Pop Animation
//         icon.animate([
//             { transform: "scale(1)" },
//             { transform: "scale(1.5)" },
//             { transform: "scale(1)" }
//         ], {
//             duration: 300
//         });

//     });

// });


const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".product-card");
const buttons = document.querySelectorAll(".filter-buttons button");

let currentFilter = "all";

function filterProducts() {

    const text = searchInput.value.trim().toLowerCase();

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.dataset.category.toLowerCase();

        const matchSearch =
            text === "" ||
            title.includes(text) ||
            category.includes(text);

        const matchCategory =
            currentFilter === "all" ||
            category === currentFilter;

        if (matchSearch && matchCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

searchInput.addEventListener("keyup", filterProducts);

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        currentFilter = btn.dataset.filter.toLowerCase();
        filterProducts();

    });

});







document.querySelectorAll(".wishlist-btn").forEach((btn, index) => {

    const card = btn.closest(".product-card");

    const id = card?.dataset?.id || "product_" + index;

    let countSpan = btn.querySelector(".like-count");

    if (!countSpan) {
        countSpan = document.createElement("span");
        countSpan.className = "like-count";
        btn.appendChild(countSpan);
    }

    // load saved data
    let saved = JSON.parse(localStorage.getItem("likesData")) || {};
    let data = saved[id] || { count: 0, liked: false };

    let likes = data.count;
    let liked = data.liked;

    countSpan.innerText = likes;

    if (liked) btn.classList.add("liked");

    // DOUBLE TAP IMAGE LIKE
    const img = card?.querySelector("img");

    if (img) {
        img.addEventListener("dblclick", () => {
            btn.click();
        });
    }

    btn.addEventListener("click", function () {

        liked = !liked;

        if (liked) {
            likes++;
        } else {
            likes = Math.max(0, likes - 1);
        }

        countSpan.innerText = likes;

        // save instantly
        saved[id] = {
            count: likes,
            liked: liked
        };

        localStorage.setItem("likesData", JSON.stringify(saved));

        btn.classList.toggle("liked", liked);

        // animation
        btn.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.3)" },
            { transform: "scale(1)" }
        ], { duration: 200 });

    });

});





function filterProducts() {

    const text = searchInput.value.trim().toLowerCase();

    let visibleProducts = 0;

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.dataset.category.toLowerCase();

        const matchSearch =
            text === "" ||
            title.includes(text) ||
            category.includes(text);

        const matchCategory =
            currentFilter === "all" ||
            category === currentFilter;

        if (matchSearch && matchCategory) {

            card.style.display = "block";
            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });

    document.getElementById("productCount").innerHTML =
        `Showing <span>${visibleProducts}</span> Product${visibleProducts !== 1 ? "s" : ""}`;

}




function filterProducts() {

    const text = searchInput.value.trim().toLowerCase();

    let visibleProducts = 0;

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.dataset.category.toLowerCase();

        const matchSearch =
            text === "" ||
            title.includes(text) ||
            category.includes(text);

        const matchCategory =
            currentFilter === "all" ||
            category === currentFilter;

        if (matchSearch && matchCategory) {

            card.style.display = "block";
            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });

    document.getElementById("productCount").innerHTML =
        `Showing <span>${visibleProducts}</span> Product${visibleProducts !== 1 ? "s" : ""}`;

    const noProducts = document.getElementById("noProducts");

    if (visibleProducts === 0) {

        noProducts.style.display = "block";

    } else {

        noProducts.style.display = "none";

    }

}