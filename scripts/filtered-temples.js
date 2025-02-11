// Temples Full List
const templesList = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City",
    dedicated: "1893, April, 6-24",
    area: 382207,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
  },
  {
    templeName: "Tijuana Mexico Temple",
    location: "Tijuana, Baja California",
    dedicated: "2015, December, 13",
    area: 33367,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg",
  },
  {
    templeName: "Rome Italy Temple",
    location: "Italy, Rome",
    dedicated: "2019, March, 10-12",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
  },
  {
    templeName: "Helsinki Finland Temple",
    location: "Espoo, Finland",
    dedicated: "2006, Octubre, 22",
    area: 16350,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-22169-main.jpg",
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg",
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg",
  },
  {
    templeName: "Orlando Florida Temple",
    location: "Windermere, Florida, United States",
    dedicated: "1994, October, 9-11",
    area: 70000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/orlando-florida-temple/orlando-florida-temple-51938-main.jpg",
  },
  {
    templeName: "Mesa Arizona Temple",
    location: "Mesa, Arizona, Estados Unidos",
    dedicated: "1927, October, 23-26",
    area: 75000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg",
  },
];

// Pictures Selector
const picturesContainer = document.getElementById("pictures-container");
picturesContainer.setAttribute("class", "pictures-container");

// Page Title Selector
const pageTitle = document.getElementById("page-title");
pageTitle.textContent = `Home (${templesList.length})`;

// Render temples list function
const renderTemplesList = (templesList) => {
  // Create Row Helper Function
  const createRow = (name, value) => {
    return `<span class="row-name">${name}:</span> ${value}`;
  };

  // Empty Pictures Container
  picturesContainer.innerHTML = "";

  // Rendering Temples List
  templesList.forEach((temple) => {
    // Create Card and populate with temple data
    const name = document.createElement("h2");
    name.textContent = temple.templeName;
    const location = document.createElement("p");
    location.innerHTML = createRow("Location", temple.location);
    const dedicated = document.createElement("p");
    dedicated.innerHTML = createRow("Dedicated", temple.dedicated);
    const size = document.createElement("p");
    size.innerHTML = createRow("Size", `${temple.area} sq ft`);

    const img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("loading", "lazy");
    img.setAttribute("alt", temple.name);

    const card = document.createElement("div");
    card.append(name, location, dedicated, size, img);

    picturesContainer.appendChild(card);
  });
};

// Initial Temple List Rendering
renderTemplesList(templesList);

// Navigation Buttons Selectors
const homeBtn = document.getElementById("home");
const oldBtn = document.getElementById("old");
const newBtn = document.getElementById("new");
const largeBtn = document.getElementById("large");
const smallBtn = document.getElementById("small");

// Add Event Handlers
// All temples list
homeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMobileMenu();
  pageTitle.innerText = "Home";
  pageTitle.textContent = `Home (${templesList.length})`;
  renderTemplesList(templesList);
});

// temples built before 1900
oldBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMobileMenu();
  const oldList = templesList.filter((temple) => {
    const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
    return dedicatedYear < 1900;
  });
  pageTitle.innerText = `Old (${oldList.length})`;
  renderTemplesList(oldList);
  console.log("old");
});

// temples built after 2000
newBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMobileMenu();
  const newList = templesList.filter((temple) => {
    const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
    return dedicatedYear > 2000;
  });
  pageTitle.innerText = `New (${newList.length})`;
  renderTemplesList(newList);
});

// temples larger than 90,000 square feet
largeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMobileMenu();
  const newList = templesList.filter((temple) => {
    return temple.area > 90000;
  });
  pageTitle.innerText = `Large (${newList.length})`;
  renderTemplesList(newList);
});

// temples smaller than 10,000 square feet
smallBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMobileMenu();
  const newList = templesList.filter((temple) => {
    return temple.area < 10000;
  });
  pageTitle.innerText = `Small (${newList.length})`;
  renderTemplesList(newList);
});

// Footer information
const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const getLastUpdate = () => {
  const date = document.lastModified;
  return date.toLocaleString();
};

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
  toggleMobileMenu();
});

const toggleMobileMenu = () => {
  // If small screen with hamburger menu toggle menu. Large screen ignore
  const screenWidth = document.documentElement.clientWidth;
  if (screenWidth < 800) {
    hamButton.classList.toggle("show");
    hamMenuButton.classList.toggle("show");
    largeMenu.classList.toggle("show");
    headerTitle.classList.toggle("show");
    navigation.classList.toggle("show");
  }
};
