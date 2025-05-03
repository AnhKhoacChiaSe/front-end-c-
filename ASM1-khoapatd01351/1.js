document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".submenu li a"); // Lấy tất cả mục trong submenu
    const sections = document.querySelectorAll(".program-item"); // Lấy tất cả nội dung chương trình

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", function (e) {
            e.preventDefault(); // Ngăn load trang

            const target = this.getAttribute("data-target"); // Lấy ID mục tiêu

            // Ẩn tất cả các phần nội dung
            sections.forEach((section) => {
                section.style.display = "none";
            });

            // Hiển thị phần được chọn
            document.getElementById(target).style.display = "block";
        });
    });
});


