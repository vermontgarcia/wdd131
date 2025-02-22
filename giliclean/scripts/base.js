import services from "./services.js";
import reviews from "./reviews.js";
import team from "./team.js";
import about from "./about.js";

// Functions

const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const getLastUpdate = () => {
  const date = document.lastModified;
  return date.toLocaleString();
};

// DOM Manupulation

document.getElementById("current-year").innerHTML = getYear();
document.getElementById(
  "last-modified"
).innerHTML = `Last Modification: ${getLastUpdate()}`;

// Hamburger menu
const hamButton = document.querySelector("#menu");
const hamMenuButton = document.querySelector("#ham-menu");
const largeMenu = document.querySelector("#menu-large");
const headerTitle = document.querySelector("#header-title");
const navigation = document.querySelector("#navigation");

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("show");
  hamMenuButton.classList.toggle("show");
  largeMenu.classList.toggle("show");
  headerTitle.classList.toggle("show");
  navigation.classList.toggle("show");
});

// Contact Form

// const redioReview = document.getElementById("review");

// if (redioReview) {
//   console.log(redioReview);
//   redioReview.addEventListener("change", (event) => {
//     console.log(event.target.checked);
//   });
// }

document.querySelectorAll('input[name="topic"]').forEach((radio) => {
  radio.addEventListener("change", (event) => {
    console.log(`Radio selected: ${event.target.value}`);
  });
});
