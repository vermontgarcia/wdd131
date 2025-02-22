import { reviews, inputStartAttributes } from "./content.js";

// DOM Selectors Home Page
const reviewsSection = document.querySelector("#reviews .container");

if (reviewsSection) {
  const cardsContainer = document.createElement("div");
  cardsContainer.setAttribute("class", "cards-container");
  reviews
    .slice(0, 4)
    .forEach(({ user, imgUrl, date, stars, review }, uIndex) => {
      // Create Review Cards and add them to the DOM
      const cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "card");

      const headerDiv = document.createElement("div");
      headerDiv.setAttribute("class", "card-header");
      const avatarImg = document.createElement("img");
      avatarImg.setAttribute("src", imgUrl);
      avatarImg.setAttribute("alt", `${user} - avatar image`);
      avatarImg.setAttribute("width", 64);
      avatarImg.setAttribute("height", 64);

      const userDataDiv = document.createElement("div");
      const nameDiv = document.createElement("div");
      nameDiv.innerHTML = user;
      const dateDiv = document.createElement("div");
      // TODO: Calculate time ago
      dateDiv.innerHTML = date;

      userDataDiv.append(nameDiv, dateDiv);

      headerDiv.append(avatarImg, userDataDiv);

      const starsDiv = document.createElement("div");
      starsDiv.setAttribute("class", "stars");

      const reviewP = document.createElement("p");
      reviewP.innerHTML = review;

      cardDiv.append(headerDiv, starsDiv, reviewP);

      inputStartAttributes.forEach(({ type, id, name, value }, index) => {
        const starInput = document.createElement("input");
        starInput.setAttribute("disabled", true);
        starInput.setAttribute("type", type);
        starInput.setAttribute("id", `${uIndex}-${id}`);
        starInput.setAttribute("name", `${uIndex}-${name}`);
        starInput.setAttribute("value", value);
        const starLabel = document.createElement("label");
        starLabel.setAttribute("for", `${uIndex}-${id}`);

        if (index === stars - 1) {
          // Selected
          starInput.setAttribute("checked", true);
        }
        starsDiv.prepend(starLabel);
        starsDiv.prepend(starInput);
      });

      cardsContainer.appendChild(cardDiv);
    });
  reviewsSection.append(cardsContainer);
}

export default { reviews, inputStartAttributes };
