import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading"
import Weather from "./Weather"

import * as Location from 'expo-location';

import axios from "axios";

const API_KEY = "1c3386f3e6fa8c58a40aeeb4dda05856";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data: { main: { temp }, weather } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({ isLoading: false, temp, condition:weather[0].main })
  }
  getLocation = async () => {
    try {
      // https://docs.expo.io/versions/v35.0.0/sdk/location/#locationrequestpermissionsasync
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition || 'Rain'} />;
  }
}
