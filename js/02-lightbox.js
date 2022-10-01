import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const child = gallery.childNodes;

for (const item of galleryItems) {
  gallery.insertAdjacentHTML(
    "beforeend",
    `
      <a class="gallery__item" href=${item.original}>
        <img
          class="gallery__image"
          src=${item.preview}
          alt=${item.description}
        />
      </a>`
  );
}
const lightbox = () => {
  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    canimationSpeed: 125,
    captionPosition: "outside",
    fadeSpeed: 650,
  });
};

gallery.addEventListener("click", lightbox());
