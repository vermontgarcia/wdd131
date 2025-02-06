import { placeData, fetchWeather } from "./placeData.js";

const dataContainer = document.getElementById("data-list");

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

const updateWeather = async () => {
  // Fetch data from API
  const data = await fetchWeather();

  // Update Weather Card in DOM
  const weatherContainer = document.getElementById("weather-list");
  weatherContainer.innerHTML = "";
  data.forEach((row) => {
    const strong = document.createElement("strong");
    strong.innerHTML = `${row.name}:`;
    const span = document.createElement("span");
    span.innerHTML = row.value;
    const li = document.createElement("li");
    li.appendChild(strong);
    li.appendChild(span);
    weatherContainer.append(li);
  });
};

updateWeather();
