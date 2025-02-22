import { teamMembers } from "./content.js";

// DOM Selectors Home Page
const joinOurTeamSection = document.querySelector("#join-our-team .container");

if (joinOurTeamSection) {
  const cardsContainer = document.createElement("div");
  cardsContainer.setAttribute("class", "cards-container");
  teamMembers.slice(0, 3).forEach(({ imgUrl, name, captions, more }) => {
    // Create teamMembers Cards and add them to the DOM
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card-flat");
    const teamMemberPicture = document.createElement("img");
    const captionsDiv = document.createElement("div");
    const captionsP = document.createElement("span");
    const moreP = document.createElement("span");

    teamMemberPicture.setAttribute("src", imgUrl);
    teamMemberPicture.setAttribute("alt", `${name} picture`);
    captionsP.innerHTML = `<strong class="member-name">${name}</strong> - <span class="member-captions">${captions}</span>: `;
    moreP.innerHTML = more;

    captionsDiv.append(captionsP, moreP);

    cardDiv.append(teamMemberPicture, captionsDiv);

    cardsContainer.appendChild(cardDiv);
  });
  joinOurTeamSection.appendChild(cardsContainer);
}

export default { teamMembers };
