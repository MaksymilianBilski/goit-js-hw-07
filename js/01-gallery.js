import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const images = gallery.childNodes;

console.log(galleryItems);
for (const item of galleryItems) {
  const img = document.createElement("img");
  img.setAttribute("src", item.preview);
  img.setAttribute("description", item.description);
  img.style.width = "100%";
  img.style.height = "100%";
  gallery.append(img);

  img.addEventListener("click", (event) => {
    console.log(event.currentTarget);
    img.removeAttribute("src");
    img.setAttribute("src", item.original);
    img.style.width = "1278px";
    img.style.height = "853px";
    img.style.position = "absolute";
    img.addEventListener("click", () => {
      img.removeAttribute("src");
      img.setAttribute("src", item.preview);
      img.style.width = "509px";
      img.style.height = "340px";
    });
  });
}

console.log(images);
console.log(gallery);
