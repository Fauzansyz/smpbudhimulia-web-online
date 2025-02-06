document.getElementById("submit-btn").addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah reload halaman

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  console.log("Username:", username);
  console.log("Password:", password);

  fetch("https://auth-admin.vercel.app/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.isAdmin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("is_admin", data.isAdmin); // Simpan token
        Swal.fire({
          title: "Sukses!",
          text: "Login berhasil.",
          icon: "success",
          background: "#fff",
          color: "#000",
        });
        setTimeout(() => {
          window.open("https://smpbudhimulia.vercel.app")
        }, 1000)
      } else {
        Swal.fire({
          title: "Faoled!",
          text: "Gagal login silahkan coba lagi.",
          icon: "failed",
          background: "#fff",
          color: "#000",
        });
      }
    });
})