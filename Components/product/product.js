const filterBtn = document.querySelector("#filter-btn");
const filterExitBtn = document.querySelector("#filter-exit-btn");
const filterSection = document.querySelector("#filters-section");

const priceBtn = document.querySelector("#price-filter");
const ratingBtn = document.querySelector("#rating-filter");
const genreBtn = document.querySelector("#genre-filter");

const priceOptions = document.querySelector("#price-filter-options");
const ratingOptions = document.querySelector("#rating-filter-options");
const genreOptions = document.querySelector("#genre-filter-options");

filterBtn.addEventListener("click", () => {
  filterSection.style.display = "flex";
});

filterExitBtn.addEventListener("click", () => {
  filterSection.style.display = "none";
});

priceOptions.style.display = "none";
ratingOptions.style.display = "none";
genreOptions.style.display = "none";

priceBtn.addEventListener("click", () => {
  if (priceOptions.style.display === "none") {
    priceOptions.style.display = "flex";
  } else {
    priceOptions.style.display = "none";
  }
});

ratingBtn.addEventListener("click", () => {
  if (ratingOptions.style.display === "none") {
    ratingOptions.style.display = "flex";
  } else {
    ratingOptions.style.display = "none";
  }
});

genreBtn.addEventListener("click", () => {
  if (genreOptions.style.display === "none") {
    genreOptions.style.display = "flex";
  } else {
    genreOptions.style.display = "none";
  }
});
