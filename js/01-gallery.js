import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const images = gallery.childNodes;
console.log(galleryItems);

for (const item of galleryItems) {
  const img = document.createElement("img");
  img.setAttribute("src", item.preview);
  img.setAttribute("data-source", item.original);
  img.setAttribute("description", item.description);
  img.style.width = "100%";
  img.style.height = "100%";
  gallery.append(img);
}
const img = document.querySelectorAll(".gallery img");

gallery.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log("to jest targetto: " + event.target.src);
  event.target.removeAttribute("src");
  event.target.setAttribute(
    "data-source",
    `${(event.currentTarget.dataset = "source")}`
  );
  event.target.style.width = "1278px";
  event.target.style.height = "853px";
  event.target.style.position = "absolute";
  gallery.addEventListener("click", (event) => {
    if (event.target.nodeName !== "IMG") {
      return;
    }
    event.target.removeAttribute("src");
    event.target.setAttribute("src", event.currentTarget.src);
    event.target.style.position = "static";
    event.target.style.width = "100%";
    event.target.style.height = "100%";
  });
});

console.log(img);
