export const placeData = [
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
];

export const weatherData = [
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
  // {
  //   name: "Local Time",
  //   value: ``,
  // },
];

export const fetchWeather = async () => {
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
      // {
      //   name: "Local Time",
      //   value: `${data.location.localtime}`,
      // },
    ];
    const weatherIconURL = data.current.condition.icon;

    return { newWeatherData, weatherIconURL };
  } catch (error) {
    console.error("Error:", error);
  }
};
