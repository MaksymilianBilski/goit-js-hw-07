import { galleryItems } from "./gallery-items.js";

// Change code below this line

// const gallery = document.querySelector(".gallery");
// galleryItems.map(({ preview, original, description }) =>
//   gallery.insertAdjacentHTML(
//     "beforeend",
//     `<div class="gallery__item">
//       <a class="gallery__link" href="large-image.jpg">
//         <img
//           class="gallery__image"
//           src=${preview}
//           data-source=${original}
//           alt=${description}
//         />
//       </a>
//     </div>`
//   )
// );

// const onClick = (event) => {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   console.log(event.target);
//   const instance = basicLightbox.create(
//     `<img src=${event.target.dataset.source} alt=${event.target.description}></img>`
//   );
//   instance.show();
//   const onEscape = (key) => {
//     if (key.code === "Escape") {
//       instance.close();
//     }
//   };
//   window.addEventListener("keydown", onEscape);
// };

// gallery.addEventListener("click", onClick);

//2 metoda

// const gallery = document.querySelector(".gallery");
// const newGallery = galleryItems
//   .map(
//     ({
//       preview,
//       original,
//       description,
//     }) => `<a class="gallery__link" href="${original}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>`
//   )
//   .join("");
// gallery.innerHTML = newGallery;
// const child = document.querySelector(".gallery__link");

// const onClick = (event) => {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const evt = basicLightbox.create(
//     `<img src="${event.target.dataset.source}" width="800" height="600">`
//   );
//   evt.show();
//   const escape = (e) => {
//     if (e.code === "Escape") {
//       evt.close();
//     }
//   };
//   window.addEventListener("keydown", escape);
// };
// gallery.addEventListener("click", onClick);

//3 metoda
const gallery = document.querySelector(".gallery");
let instance;

for (let i = 0; i <= galleryItems.length - 1; i++) {
  gallery.insertAdjacentHTML(
    "afterbegin",
    `<img src="${galleryItems[i].preview}" data-source="${galleryItems[i].original}" style="width:100%; height:100%;"alt="${galleryItems[i].description}"></img>`
  );
}

function showItem(e) {
  e.preventDefault;
  if (e.target.parentNode !== gallery) {
    return;
  } else {
    for (let i = 0; i <= galleryItems.length - 1; i++) {
      instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}"></img>`
      );
    }
  }
  instance.show();
}

function closeItem(e) {
  if (e.code === "Escape") {
    instance.close();
  }
  return;
}

gallery.addEventListener("click", showItem);
window.addEventListener("keydown", closeItem);

// 4 metoda(niedokonczona)

// const gallery = document.querySelector(".gallery");
// for (const item of galleryItems) {
//   const img = gallery.insertAdjacentHTML(
//     "beforeend",
// `<div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src=${item.preview}
//       data-source=${item.original}
//       alt=${item.description}
//     />
//   </a>
// </div>`
//   );
// }
// const image = document.querySelectorAll(".gallery__image");

// const onClick = (event) => {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   event.target.removeAttribute("src");
//   event.target.setAttribute("src", event.target.dataset.source);

//   console.log(event.target.dataset.source);
//   console.log(event.target.dataset);
// };

// gallery.addEventListener("click", onClick);
