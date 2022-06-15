import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { selectOrigin, selectDestination } from "../navigation/navSlice";
import { useSelector } from "react-redux";
import { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "../navigation/environments";
import { useRef } from "react";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    //@ts-ignore: Object is possibly 'null'.
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    const getTravelTime = async() => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_API_KEY}`
      ).then((res) => res.json()).then(data =>{
        console.log(data);
      })
    }
    getTravelTime();
  }, [origin, destination, GOOGLE_API_KEY]) 

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_API_KEY}
          strokeWidth={3}
          strokeColor="blue"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
const styles = StyleSheet.create({});
