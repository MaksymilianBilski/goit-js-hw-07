import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const newGallery = galleryItems
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
const child = document.querySelector(".gallery__link");

const onClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const evt = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  evt.show();
  const escape = (e) => {
    if (e.code === "Escape") {
      evt.close();
    }
  };
  window.addEventListener("keydown", escape);
};
gallery.addEventListener("click", onClick);
