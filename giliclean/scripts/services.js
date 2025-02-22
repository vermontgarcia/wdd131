import { services } from "./content.js";

// DOM Selectors Home Page
const servicesSection = document.querySelector("#services .container");

if (servicesSection) {
  const cardsContainer = document.createElement("div");
  cardsContainer.setAttribute("class", "cards-container");
  services.slice(0, 3).forEach(({ name, description }) => {
    // Create Services Cards and add them to the DOM
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    const cardH3 = document.createElement("h3");
    const cardP = document.createElement("p");

    cardH3.innerHTML = name;
    cardP.innerHTML = description;

    cardDiv.append(cardH3, cardP);

    cardsContainer.appendChild(cardDiv);
  });
  servicesSection.append(cardsContainer);
}

// DOM Services Page

const servicesAllPageSection = document.querySelector(
  "#services-all .container"
);

if (servicesAllPageSection) {
  const cardsContainer = document.createElement("div");
  cardsContainer.setAttribute("class", "cards-container");
  services.forEach(({ name, description }) => {
    // Create Services Cards and add them to the DOM
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    const cardH3 = document.createElement("h3");
    const cardP = document.createElement("p");

    cardH3.innerHTML = name;
    cardP.innerHTML = description;

    cardDiv.append(cardH3, cardP);

    cardsContainer.appendChild(cardDiv);
  });
  servicesAllPageSection.append(cardsContainer);
}
export default { services };
