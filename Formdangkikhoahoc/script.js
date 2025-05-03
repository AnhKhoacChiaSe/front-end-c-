// Hàm load file HTML vào vị trí div theo id
function loadHTML(id, file) {
    fetch(file)
      .then(res => res.text())
      .then(data => document.getElementById(id).innerHTML = data)
      .catch(err => console.error(`Không thể load ${file}:`, err));
  }
  
  // Load các phần
  loadHTML("header", "layout/header.html");
  loadHTML("footer", "layout/footer.html");
  loadHTML("video-section", "layout/video.html");
  loadHTML("form-section", "form.html");
  loadHTML("courses-section", "courses.html");
  