import { reviews, inputStartAttributes } from "./content.js";

// DOM Selectors Home Page
const reviewsSection = document.querySelector("#reviews .container");

if (reviewsSection) {
  reviews.slice(0, 3).forEach(({ user, imgUrl, date, stars, review }) => {
    // Create Review Cards and add them to the DOM
    const cardDiv = document.createElement("div");

    const headerDiv = document.createElement("div");
    const avatarImg = document.createElement("img");
    avatarImg.setAttribute("src", imgUrl);
    avatarImg.setAttribute("alt", `${user} - avatar image`);

    const userDataDiv = document.createElement("div");
    const nameDiv = document.createElement("div");
    nameDiv.innerHTML = user;
    const dateDiv = document.createElement("div");
    // TODO: Calculate time ago
    dateDiv.innerHTML = date;

    userDataDiv.append(nameDiv, dateDiv);

    headerDiv.append(avatarImg, userDataDiv);

    const starsDiv = document.createElement("div");

    const reviewP = document.createElement("p");
    reviewP.innerHTML = review;

    cardDiv.append(headerDiv, starsDiv, reviewP);

    inputStartAttributes.forEach(({ type, id, name, value }, index) => {
      const starInput = document.createElement("input");
      starInput.setAttribute("type", type);
      // starInput.setAttribute("id", id);
      starInput.setAttribute("name", name);
      starInput.setAttribute("value", value);
      if (index === stars) {
        // Selected
        starInput.setAttribute("selected", true);
      }
      starsDiv.appendChild(starInput);
    });

    reviewsSection.appendChild(cardDiv);
  });
}

export default { reviews, inputStartAttributes };
