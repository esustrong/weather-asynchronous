class Weather {
  constructor(city, country) {
    this.apiKey = 'bdfb966ba59c365492093fa97976d1e7';
    this.city = city;
    this.country = country;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);

    const responseData = await response.json();
    // console.log(responseData);
    return responseData;
  }

  //Change the weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

// dbce025e81ad45c3b6b182852222005

// 99dfe35fcb7de1ee