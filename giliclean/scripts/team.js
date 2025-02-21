import { teamMembers } from "./content.js";

// DOM Selectors Home Page
const joinOurTeamSection = document.getElementById("join-our-team");

teamMembers.slice(3).forEach(({ imgUrl, name, captions, more }) => {
  // Create teamMembers Cards and add them to the DOM
  const cardDiv = document.createElement("div");
  const teamMemberPicture = document.createElement("img");
  const captionsP = document.createElement("p");
  const moreP = document.createElement("p");

  teamMemberPicture.setAttribute("src", imgUrl);
  teamMemberPicture.setAttribute("alt", `${name} picture`);
  captionsP.innerHTML = `<span class="member-name">${name}</span> - <span class="member-captions">${captions}</span>`;
  moreP.innerHTML = more;

  cardDiv.append(teamMemberPicture, captionsP, moreP);

  joinOurTeamSection.appendChild(cardDiv);
});

export default { teamMembers };
