document.getElementById('form').addEventListener('submit', async function(event) {
  event.preventDefault(); 
  // Mencegah form submit secara default
  // Ambil data dari form
  const nama = document.getElementById('nama').value;
  const tanggal_lahir = document.getElementById('tanggal_lahir').value;
  const jenis_kelamin = document.getElementById('jenis_kelamin').value
  const alamat = document.getElementById('alamat').value
  const tinggi_badan = document.getElementById("tinggi_badan").value
  const berat_badan = document.getElementById("berat_badan").value
  const lingkar_kepala = document.getElementById('lingkar_kepala').value
  const asal_sekolah = document.getElementById('asal_sekolah').value
  const nama_ayah = document.getElementById('namaAyah').value
  const pekerjaan_ayah = document.getElementById("pekerjaanAyah").value
  const tanggal_lahir_ayah = document.getElementById("tahunLahirAyah").value
  const pendidikan_ayah = document.getElementById('pendidikanAyah').value
  const nama_ibu = document.getElementById("namaIbu").value
  const tahun_lahir_ibu = document.getElementById("tahunLahirIbu").value
  const pekerjaan_ibu = document.getElementById("pekerjaanIbu").value
  const pendidikan_ibu = document.getElementById("pendidikanIbu").value

// bungkus data menjadi json 

  const data = JSON.stringify({
    "nama": nama,
    "tanggal_lahir": tanggal_lahir,
    "jenis_kelamin": jenis_kelamin,
    "alamat": alamat,
    "tinggi_badan": tinggi_badan.toString(),
    "berat_badan": berat_badan.toString(),
    "lingkar_kepala": lingkar_kepala.toString(),
    "asal_sekolah": asal_sekolah,
    "tanggal_lahir_ayah": tanggal_lahir_ayah,
    "nama_ayah": nama_ayah,
    "pendidikan_ayah": pendidikan_ayah,
    "pekerjaan_ayah": pekerjaan_ayah,
    "nama_ibu": nama_ibu,
    "pekerjaan_ibu": pekerjaan_ibu,
    "tanggal_lahir_ibu": tahun_lahir_ibu,
    "pendidikan_ibu": pendidikan_ibu
  })

  try {
// validasi data lebih lanjut 
    if (!data) {
      Swal.fire({
  title: "Gagal!",
  text: "Silahkan isi formulir dengan benar",
  icon: "failed"
});
    } else {
      // Kirim data
      const response = await fetch('https://server-ppdb.vercel.app/api/data/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });

      // Parsing respons ke JSON
      const result = await response.json();
    }
  } catch (error) {
    Swal.fire({
  title: "Berhasil!",
  text: "Data berhasil di input,silahkan tunggu konfirmasi",
  icon: "success"
});
    console.error('Error:', error);
  }
});

