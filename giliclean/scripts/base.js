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

document.querySelectorAll('input[name="topic"]').forEach((radio) => {
  radio.addEventListener("change", (event) => {
    console.log(`Radio selected: ${event.target.value}`);
    const topic = event.target.value;
    if (topic === "review") {
      document.getElementById("stars-reviews").classList.remove("hidden");
      document
        .querySelectorAll(".star-radio")[0]
        .setAttribute("required", "required");
      document
        .getElementById("submit-btn")
        .setAttribute(
          "value",
          `Publish My ${topic.charAt(0).toUpperCase() + topic.slice(1)}`
        );
    } else {
      document.getElementById("stars-reviews").classList.add("hidden");
      document.querySelectorAll(".star-radio")[0].removeAttribute("required");
      document
        .getElementById("submit-btn")
        .setAttribute(
          "value",
          `Request My ${topic.charAt(0).toUpperCase() + topic.slice(1)}`
        );
    }
  });
});

document
  .querySelector("#contact-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    console.log(formData);

    let data = {};

    for (const [name, value] of formData.entries()) {
      data[name] = value;
    }
    console.log(data);
    const requets = JSON.parse(localStorage.getItem("requets")) || [];
    data.timeStamp = Date.now();
    requets.push(data);
    localStorage.setItem("requets", JSON.stringify(requets));
  });
