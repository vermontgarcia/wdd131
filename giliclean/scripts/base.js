import services from "./services.js";
import reviews from "./reviews.js";
import team from "./team.js";

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
