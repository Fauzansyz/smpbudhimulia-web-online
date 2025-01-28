document.addEventListener("DOMContentLoaded", () => {
  let indexOfImages;
  const popup = document.querySelector('.popup')
  const popupContent = document.querySelector('.content-popup')
  const imagesContent = document.getElementById("images-popup")
  const titleImages = document.querySelector('.title-images')
  const descriptionImages = document.querySelector('.description-images')
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

  gallery.forEach((images, index) => {
    images.addEventListener("click", () => {
      
      indexOfImages = +index + 1
      imagesContent.src = images.src
      popup.style.transform = "scale(1)"
      popupContent.style.transform = "scale(1)"
      if (indexOfImages == 1) {} else if (indexOfImages == 2) {} else if (indexOfImages == 3) {} else if (indexOfImages == 4) {} else if (indexOfImages == 5) {}
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
    const ppdbPages = document.querySelector('.ppdb-page-info')
    const pages = document.querySelector('.contact-pages')

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // imageAbout[0].style.border = "2px solid black"
          // imageAbout[0].style.width = "60%"
          ppdbPages.classList.add('show')
        }
      });
    }, {
      threshold: 0.1 // Elemen terlihat 10% sebelum animasi muncul
    });

    observer3.observe(ppdbPages)

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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
        if (entry.isIntersecting) {
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
          url: "https://smpbudhimulia.42web.io/"
        })
        .then(() => console.log('Berhasil dibagikan'))
        .catch((error) => console.error('Gagal membagikan', error));
    } else {
      console.error("Fitur berbagi tidak tersedia di perangkat ini ")
    }
  }
  
  popup.addEventListener('click', handleClickOutside);

  function closePopup() {
    popup.style.transform = "scale(0)"
    popupContent.style.transform = "scale(0)"
    
  }

  function handleClickOutside(event) {
    if (!popupContent.contains(event.target)) {
      closePopup();
    }
  }
  document.getElementById("share-btn").addEventListener("click", shareContent)
})