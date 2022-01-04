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
      <h1>6&deg;</h1>
      <h2>Cloudy</h2>
      <h3>Lots of Clouds</h3>
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
    });

    const getWeather = () => {
      axios(
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=istanbul&appid=66ba8a1b533a7a22400f6b465181d348"
      ).then((response) => {
        console.log(response.data);
      });
    };

    return {
      data,
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
