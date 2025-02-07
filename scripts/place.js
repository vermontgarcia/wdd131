import { placeData, weatherData, fetchWeather } from "./placeData.js";

const dataContainer = document.getElementById("data-list");
const weatherContainer = document.getElementById("weather-list");
const weatherTitle = document.getElementById("weather-title");

placeData.forEach((row) => {
  const strong = document.createElement("strong");
  strong.innerText = `${row.name}:`;
  const span = document.createElement("span");
  span.innerText = row.value;
  const li = document.createElement("li");
  li.appendChild(strong);
  li.appendChild(span);
  dataContainer.append(li);
});

let count = 1;

weatherData.forEach((row) => {
  const strong = document.createElement("strong");
  strong.innerHTML = `${row.name}:`;
  const span = document.createElement("span");
  span.innerHTML = row.value;
  span.setAttribute("class", `skeleton skeleton-text skeleton-${count}`);
  count += 1;
  if (count > 3) count = 1;
  const li = document.createElement("li");
  li.appendChild(strong);
  li.appendChild(span);
  weatherContainer.append(li);
});

const updateWeather = async () => {
  // Fetch data from API
  const data = await fetchWeather();

  // Update Weather Card in DOM
  weatherContainer.innerHTML = "";
  data.newWeatherData.forEach((row) => {
    const strong = document.createElement("strong");
    strong.innerHTML = `${row.name}:`;
    const span = document.createElement("span");
    span.innerHTML = row.value;
    const li = document.createElement("li");
    li.appendChild(strong);
    li.appendChild(span);
    weatherContainer.append(li);
  });
  weatherTitle.classList.toggle("weather-icon");
  weatherTitle.classList.toggle("shiffted-left");
  const icon = document.createElement("img");
  icon.setAttribute("src", data.weatherIconURL);
  weatherTitle.appendChild(icon);
};

updateWeather();
