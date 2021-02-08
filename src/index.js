import styles from "./css/styles.css";
import apiService from "./apiService.js";
import galleryTpl from "./templates/galleryTpl.hbs";

const formRef = document.querySelector("#search-form");
const inputRef = document.querySelector("[name=query]");
const galleryContainerRef = document.querySelector(".gallery-container");
const btnloadMoreRef = document.querySelector("[data-action=load-more]");

let searchQuery = "";
let pageNumber = 1;

function handleSearch(event) {
  event.preventDefault();

  galleryContainerRef.innerHTML = "";

  searchQuery = inputRef.value;
  apiService(searchQuery, pageNumber);

  btnloadMoreRef.classList.remove("is-hidden");
}
formRef.addEventListener("submit", handleSearch);

function galleryMarkap(data) {
  galleryContainerRef.insertAdjacentHTML("beforeend", galleryTpl(data.hits));
}

btnloadMoreRef.addEventListener("click", () => {
  pageNumber += 1;
  apiService(searchQuery, pageNumber);
});

export default galleryMarkap;
