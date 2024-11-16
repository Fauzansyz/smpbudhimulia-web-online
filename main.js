document.addEventListener("DOMContentLoaded", () => {
  let indexOfImages;
  const imagesContent = document.getElementById("images-popup")
  const titleImages = document.querySelector('.title-images')
  const descriptionImages = document.querySelector('.description-images')
  const popup = document.querySelector('.popup')
  const popupContent = document.querySelector('.content-popup')
  const btn = document.querySelector('.btn')
  const gallery = document.querySelectorAll('.item-image');
  const button1 = document.getElementById("page1")
  const button2 = document.getElementById("page2")
  const button3 = document.getElementById("page3")
  const title1 = document.getElementById('title1')
  const title2 = document.getElementById('title2')
  const title3 = document.getElementById('title3')
  button1.addEventListener("click", () => {
    page1()
  })

  button2.addEventListener("click", () => {
    page2()
  })

  button3.addEventListener("click", () => {
    page3()
  })
  
  btn.addEventListener("click",()=>{
    popup.style.transform = "scale(0)"
    popupContent.style.transform = "scale(0)"
  })

  gallery.forEach((images, index) => {
    images.addEventListener("click", () => {
      indexOfImages = +index + 1
      console.log(indexOfImages)
      imagesContent.src = images.src
      popup.style.transform = "scale(1)"
      popupContent.style.transform = "scale(1)"
      if (indexOfImages == 1) {
        titleImages.textContent = "Gallery 1."
      }else if(indexOfImages == 2){
        titleImages.textContent = "Gallery 2."
      }else if(indexOfImages == 3){
        titleImages.textContent = "Gallery 3."
      }else if(indexOfImages == 4){
        titleImages.textContent = "Gallery 4."
      }else if (indexOfImages == 5) {
        titleImages.textContent = "Gallery 5."
      }
    })
  })

  function page1() {
    const elementTarget = document.querySelector(".tentang-sekolah")
    elementTarget.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  function page2() {
    const elementTarget = document.querySelector(".contact-pages")
    elementTarget.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  function page3() {
    const elementTargets = document.querySelector(".kegiatan-pages")

    elementTargets.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  setTimeout(() => {
    const pages = document.querySelector('.contact-pages')
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting == true) {
          // imageAbout[0].style.border = "2px solid black"
          // imageAbout[0].style.width = "60%"
          pages.classList.add('show')
        }
      });
    }, {
      threshold: 0.1 // Elemen terlihat 10% sebelum animasi muncul
    });

    // Mulai mengamati setiap item
    observer1.observe(pages)

    const items = document.querySelectorAll('.item-image');
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1 // Elemen terlihat 10% sebelum animasi muncul
    });

    // Mulai mengamati setiap item
    items.forEach(item => {
      observer2.observe(item)
    })

    const imgs = document.querySelector('.tentang-sekolah')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting == true) {
          // imageAbout[0].style.border = "2px solid black"
          // imageAbout[0].style.width = "60%"
          imgs.classList.add('show')
        }
      });
    }, {
      threshold: 0.1 // Elemen terlihat 10% sebelum animasi muncul
    });

    // Mulai mengamati setiap item
    observer.observe(imgs)
  }, 900)


  function shareContent() {
    // Cek jika Web Share API tersedia di perangkat
    if (navigator.share) {
      navigator.share({
          title: 'SMP TERPADU BUDHI MULIA!',
          text: 'SMP Terpadu Budhi Mulia merupakan pilihan yang tepat bagi orang tua yang ingin memberikan pendidikan berkualitas tinggi kepada putra-putrinya. Dengan akreditasi A dan fasilitas yang memadai, sekolah ini siap mencetak generasi muda yang cerdas dan berakhlak mulia.',
        })
        .then(() => console.log('Berhasil dibagikan'))
        .catch((error) => console.error('Gagal membagikan', error));
    } else {
      alert("Fitur berbagi tidak diduk¹ung di perangkat ini.");
    }
  }

  document.getElementById("share-btn").addEventListener("click", shareContent)
})