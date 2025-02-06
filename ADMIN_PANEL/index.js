const imageInput = document.getElementById("image");
const preview = document.getElementById("preview");
const container = document.getElementsByClassName('container')

function validateAdmin() {
  if (localStorage.getItem("token") || localStorage.getItem("is_admin") == true) {
    console.log("Admin berhasil login")
    return true
  }
}
if (validateAdmin()) {
  container[0].style.display = "flex"
} else {
  container[0].style.display = "none"
  document.body.innerHTML = "<h2>Error</h2><p>Hanya admin yang bisa masuk !</p>"
}
// Preview gambar saat dipilih
imageInput.addEventListener("change", function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      preview.src = event.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    preview.style.display = "none";
  }
});

// Fungsi Upload Berita
async function uploadNews() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const file = imageInput.files[0];

  if (!title || !content) {
    alert("Judul dan isi berita wajib diisi!");
    return;
  }

  let imageBase64 = " "; // Jika tidak ada gambar, tetap kosong
  if (file) {
    const reader = new FileReader();
    reader.onloadend = async function() {
      imageBase64 = reader.result;
      sendToServer(title, content, imageBase64);
    };
    reader.readAsDataURL(file);
  } else {
    sendToServer(title, content, imageBase64);
  }
}

// Fungsi Kirim Data ke Server
async function sendToServer(title, content, image) {
  try {
    const response = await fetch("https://server-ppdb.vercel.app/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, image })
    });

    const result = await response.json();
    if (response.ok) {
      Swal.fire({
        title: "Sukses!",
        text: "Berita berhasil di upload.",
        icon: "success",
        background: "#fff",
        color: "#000",
      });
      setTimeout(() => {

        window.open("https://smpbudhimulia.vercel.app") // Refresh halaman setelah upload
      },1000)
    } else {
      Swal.fire({
        title: "Failed!",
        text: "Berita gagal di upload.",
        icon: "failed",
        background: "#fff",
        color: "#000",
      });
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Fungsi kembali ke halaman sebelumnya
function goBack() {
  window.history.back();
}