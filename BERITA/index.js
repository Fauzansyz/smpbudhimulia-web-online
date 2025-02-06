const newsList = document.getElementById("newsList");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupImage = document.getElementById("popupImage");
const popupContent = document.getElementById("popupContent");
const popupHeader = document.getElementById("popupHeader");

fetch("https://server-ppdb.vercel.app/api/news")
  .then(response => response.json())
  .then(result => {
    result.data.forEach(datas => {
      const element = document.createElement("div");
      element.classList.add("news-item");
      element.innerHTML = `
        <img src="${datas.image}" />
        <h2>${datas.title}</h2>
        <p>${datas.content.substring(0, 100)}...</p>
      `;
      element.addEventListener("click", () => openPopup(datas));
      newsList.appendChild(element);
    });
  });

function openPopup(data) {
  popupTitle.innerText = data.title;
  popupImage.src = data.image;
  popupContent.innerText = data.content;
  popup.style.height = "50%"; // Tampilkan popup setengah layar
  popup.classList.add("active");
}

function closePopup() {
  popup.style.height = "0"; // Sembunyikan popup
  popup.classList.remove("active");
}

// Fitur Drag Popup dengan Touch
let startY, currentY, initialHeight;
let isDragging = false;

popupHeader.addEventListener("touchstart", (e) => {
  isDragging = true;
  startY = e.touches[0].clientY;
  initialHeight = popup.offsetHeight;
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  currentY = e.touches[0].clientY;
  let newHeight = initialHeight - (currentY - startY);
  popup.style.height = `${Math.min(Math.max(newHeight, 50), window.innerHeight * 0.9)}px`;
});

document.addEventListener("touchend", () => {
  isDragging = false;
});