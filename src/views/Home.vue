<template>
  <div class="home">
    <h1>Weather App</h1>
    <div class="enter-city">
      <input
        type="text"
        placeholder="Enter a city"
        v-model="data.city"
        @keyup.enter="getWeather"
      />
    </div>
    <div class="weather">
      <h1>{{ data.city }}</h1>
      <h1>
        {{ Math.round(data.weather) }}<span v-if="data.weather">&deg;</span>
      </h1>
      <h2>{{ data.desc }}</h2>
      <h3>{{ data.detail }}</h3>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
export default {
  setup() {
    let data = reactive({
      city: "",
      weather: null,
      desc: "",
      detail: "",
    });

    let weatherData = [];

    const apiURL = "http://localhost:3000/";

    const getWeather = () => {
      axios(`${apiURL}?units=metric&q=${data.city}`).then((response) => {
        data.weather = response.data.main.temp;
        data.city = response.data.name;
        data.desc = response.data.weather[0].main;
        data.detail = response.data.weather[0].description;
      });
    };

    return {
      data,
      weatherData,
      getWeather,
    };
  },
};
</script>

<style scoped>
.enter-city input {
  font-size: 40px;
}
.weather {
  margin-top: 10px;
}
.weather h1 {
  font-size: 80px;
}
h1,
h2,
h3 {
  margin-bottom: 0;
}
</style>
