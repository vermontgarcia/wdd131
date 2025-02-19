const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

const titleCase = (str) => {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
    return match.toUpperCase();
  });
};

const selectProduct = document.getElementById("product");

if (selectProduct) {
  products.forEach((product) => {
    const option = document.createElement("option");
    option.setAttribute("value", product.id);
    option.innerText = titleCase(product.name);
    selectProduct.append(option);
  });
}

const reviewLoaded = () => {
  const reviewsCount = parseInt(localStorage.getItem("reviews")) || 0;
  localStorage.setItem("reviews", reviewsCount + 1);
};

const documentName = document.title;

if (documentName === "WDD | Thank You Page") {
  reviewLoaded();
}
