import { services } from "./content.js";

// DOM Selectors
const servicesSection = document.getElementById("services");

console.log(servicesSection);

services.forEach(({ name, description }) => {
  // Create Services Cards and add them to the DOM
  const cardDiv = document.createElement("div");
  const cardH3 = document.createElement("h3");
  const cardP = document.createElement("p");

  cardH3.innerHTML = name;
  cardP.innerHTML = description;

  cardDiv.append(cardH3, cardP);

  servicesSection.appendChild(cardDiv);
});

export default { services };
