import { services } from "./content.js";

// DOM Selectors Home Page
const servicesSection = document.getElementById("services");

if (servicesSection) {
  services.slice(0, 3).forEach(({ name, description }) => {
    // Create Services Cards and add them to the DOM
    const cardDiv = document.createElement("div");
    const cardH3 = document.createElement("h3");
    const cardP = document.createElement("p");

    cardH3.innerHTML = name;
    cardP.innerHTML = description;

    cardDiv.append(cardH3, cardP);

    servicesSection.appendChild(cardDiv);
  });
}

export default { services };
