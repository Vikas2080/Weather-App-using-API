function getWeather() {
  const location = document.getElementById('locationInput').value.trim();
  const apiKey = '64b5dbacad5a42dbb5f163338250907';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  if (!location) {
    alert("Please enter a location!");
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Location not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('locationName').textContent = `${data.location.name}, ${data.location.country}`;
      document.getElementById('temperature').textContent = data.current.temp_c;
      document.getElementById('condition').textContent = data.current.condition.text;
      document.getElementById('humidity').textContent = data.current.humidity;
      document.getElementById('wind').textContent = data.current.wind_kph;

      document.getElementById('weatherResult').classList.remove('hidden');
    })
    .catch(error => {
      alert("Could not fetch weather data. Check location name.");
      console.error(error);
    });
}
