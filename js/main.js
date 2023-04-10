import { Orders } from "./orders.js";

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_btn");
const closeBtn = document.getElementById("close_btn");
const themeToggler = document.querySelector(".theme-toggler");

// show slidebar
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
})

// close sidebar
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
})

//change theme
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle("active");
    themeToggler.querySelector('span:nth-child(2)').classList.toggle("active");
})

Orders.forEach((order) => {
    const row = document.createElement('tr');
    const rowContent = `
                    <td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td class="${order.shipping.toLowerCase()  === 'pending'? 'warning' : 'primary'}">${order.shipping}</td>
                    <td class="primary">Details</td>
                    `;
    row.innerHTML = rowContent;
    document.querySelector("#tb_recent_orders tbody").appendChild(row);
})