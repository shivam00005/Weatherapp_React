import styled from "styled-components";
import React from "react";
const CityComponent = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
      <>
        <WelcomeWeatherLogo src={"/react-weather-app/icons/perfect-day.svg"} />
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
          <input
            onChange={(e) => updateCity(e.target.value)}
            placeholder="City"
          />
          <button type={"submit"}>Search</button>
        </SearchBox>
      </>
    );
  };
  export default CityComponent;