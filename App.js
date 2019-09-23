import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";

class extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrnetPostitonAsync();
    console.log(location);
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}

