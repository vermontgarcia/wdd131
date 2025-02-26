/**
 * Removed dinamic construction of images
*/

// const templesList = [
//   {
//     src: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/640%2C/0/default",
//     name: "Salt Lake Temple"
//   },
//   {
//     src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/800x500/salt-lake-temple-37762.jpg",
//     name: "Salt Lake Temple"
//   },
//   {
//     src: "https://www.churchofjesuschrist.org/imgs/b42fb8e513a611ef810ceeeeac1e1bfbd6b8bda8/full/640%2C/0/default",
//     name: "Barcelona Spain Temple"
//   },
//   {
//     src: "https://www.churchofjesuschrist.org/imgs/d3082bac914b5045a3b1517b6fa25c587bf5fd42/full/640%2C/0/default",
//     name: "Tijuana Mexico Temple"
//   },
//   {
//     src: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/640%2C/0/default",
//     name: "Rome Italy Temple"
//   },
//   {
//     src: "https://www.churchofjesuschrist.org/imgs/f46bd40ab80c3371019f5f4ecc78680b4660e1c2/full/640%2C/0/default",
//     name: "Helsinki Finland Temple"
//   },
//   {
//     src: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/640%2C/0/default",
//     name: "Paris France Temple"
//   },
//   {
//     src: "https://www.churchofjesuschrist.org/imgs/e97d43cdfab131f3ffac633cd7c952de861d51c8/full/640%2C/0/default",
//     name: "Provo City Center Temple"
//   },
//   {
//     src: "https://www.churchofjesuschrist.org/imgs/8992d85669af96dd61ecf98e249a7da21bd7f7b0/full/640%2C/0/default",
//     name: "Orlando Florida Temple"
//   },
//   {
//     src: "https://churchofjesuschrist.org/imgs/a338f9b0e582f23025658041e5a617029c9be50f/full/640%2C/0/default",
//     name: "Mesa Arizona Temple"
//   },
// ];

// const main = document.querySelector('main');
// const picturesContainer = document.createElement('div');
// picturesContainer.setAttribute('class', 'pictures-container')
// main.appendChild(picturesContainer);

// templesList.forEach((temple)=>{
//   const figure = document.createElement('figure');
//   const figcaption = document.createElement('figcaption');
//   figcaption.textContent = temple.name;
//   const img = document.createElement('img');
//   img.setAttribute('src', temple.src);
//   img.setAttribute('alt', temple.name);
//   figure.append(img, figcaption);
//   picturesContainer.appendChild(figure);
// });

const getYear = () => {
  const date = new Date()
  return date.getFullYear();
};

const getLastUpdate = () => {
  const date = document.lastModified
  return date.toLocaleString();
};

document.getElementById('current-year').innerHTML = getYear();
document.getElementById('last-modified').innerHTML = `Last Modification: ${getLastUpdate()}`;

// Hamburger menu
const hamButton = document.querySelector('#menu');
const hamMenuButton = document.querySelector('#ham-menu');
const largeMenu = document.querySelector('#menu-large');
const headerTitle = document.querySelector('#header-title');
const navigation = document.querySelector('#navigation');

hamButton.addEventListener('click', () => {
	hamButton.classList.toggle('show');
  hamMenuButton.classList.toggle('show');
  largeMenu.classList.toggle('show');
  headerTitle.classList.toggle('show');
  navigation.classList.toggle('show');
});