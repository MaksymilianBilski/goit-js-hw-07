import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
let newGallery = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>`
  )
  .join("");
gallery.innerHTML = newGallery;

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}
gallery.addEventListener("click", onClick);
