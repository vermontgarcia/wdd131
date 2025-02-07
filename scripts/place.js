// Data (Moved from module since defer and type=module have conflicts and defer
// has been required to be in the script link declaration)
const placeData = [
  {
    name: "Area",
    value: "409.53 sq km",
  },
  {
    name: "Population",
    value: "1,992,862 (2024)",
  },
  {
    name: "Country",
    value: "Belarus",
  },
  {
    name: "Languages",
    value: "Belarusian, Russian",
  },
  {
    name: "Currency",
    value: "Belarusian ruble",
  },
  {
    name: "Time Zone",
    value: "UTC+3 (MSK)",
  },
  {
    name: "Dialing Code",
    value: "+ 375",
  },
  {
    name: "Internet TLD",
    value: ".by",
  },
  {
    name: "Local Time",
    value: ``,
  },
];

const weatherData = [
  {
    name: "Temperature",
    value: ``,
  },
  {
    name: "Humidity",
    value: ``,
  },
  {
    name: "Conditions",
    value: ``,
  },
  {
    name: "Visibility",
    value: ``,
  },
  {
    name: "Wind Velocity",
    value: ``,
  },
  {
    name: "Wind Direction",
    value: ``,
  },
  {
    name: "Wind Chill",
    value: ``,
  },
];

// Variable used to assign different classes on creation of skeleton for weather information
let count = 1;

// Weather API integration
const fetchWeather = async () => {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=39a96f02b1314125884191955250602&q=minsk&aqi=yes"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const newWeatherData = [
      {
        name: "Temperature",
        value: `${data.current.temp_c} °C`,
      },
      {
        name: "Humidity",
        value: `${data.current.humidity} %`,
      },
      {
        name: "Conditions",
        value: `${data.current.condition.text}`,
      },
      {
        name: "Visibility",
        value: `${data.current.vis_km} km`,
      },
      {
        name: "Wind Velocity",
        value: `${data.current.wind_kph} km/h`,
      },
      {
        name: "Wind Direction",
        value: `${data.current.wind_dir}`,
      },
      {
        name: "Wind Chill",
        value: `${data.current.windchill_c} °C`,
      },
    ];

    const weatherIconURL = data.current.condition.icon;

    return { newWeatherData, weatherIconURL };
  } catch (error) {
    console.error("Error:", error);
  }
};

// Selectors declaration
const dataContainer = document.getElementById("data-list");
const weatherContainer = document.getElementById("weather-list");
const weatherTitle = document.getElementById("weather-title");
const weatherIcon = document.getElementById("weather-icon");

// Dynamic build of Place Data information
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

// On loading page creating Weatherinformation with skeleton data
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

// Update weather information from Weather API
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
  weatherIcon.classList.toggle("weather-icon-hide");
  weatherIcon.setAttribute("src", data.weatherIconURL);
};

updateWeather();
