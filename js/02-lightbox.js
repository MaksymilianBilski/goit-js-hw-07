import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

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

//2 metoda
// const gallery = document.querySelector(".gallery");
// galleryItems.map((el) => {
//   gallery.insertAdjacentHTML(
//     "afterbegin",
//     `<a class="gallery__item" href="${el.original}">
//   <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
// </a>`
//   );
// });

// function onClick(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return console.log("cos");
//   }
// }

// gallery.addEventListener("click", onClick);
// const lightbox = new SimpleLightbox(".gallery__item", {
//   captionsData: "alt",
//   canimationSpeed: 125,
//   captionPosition: "outside",
//   fadeSpeed: 650,
// });
