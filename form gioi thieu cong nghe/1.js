// Load layout từ các file riêng
function loadHTML(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
  
        // Nếu là content, cần chờ form render rồi mới add listener
        if (id === "content") {
          setTimeout(setupForm, 100);
        }
      })
      .catch(err => console.error("Không thể load " + file, err));
  }
  
  function setupForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
      }
  
      alert("Cảm ơn bạn đã gửi liên hệ!");
      form.reset();
    });
  }
  
  // Gọi load layout
  loadHTML("header", "header.html");
  loadHTML("content", "content.html");
  loadHTML("footer", "footer.html");
  