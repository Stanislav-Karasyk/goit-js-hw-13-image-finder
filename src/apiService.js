import galleryMarkap from "./index.js";

export default function apiService(searchQuery, pageNumber = 1) {
  const keyApi = "20189434-40624adf63a47bf5b286cda72";
  const pixabayApiUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${keyApi}`;
  return fetch(pixabayApiUrl)
    .then((res) => res.json())
    .then(galleryMarkap);
}
