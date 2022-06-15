import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GOOGLE_API_KEY } from "../navigation/environments";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setOrigin } from "../navigation/navSlice";
import { setDestination } from "../navigation/navSlice";
import { Slice } from "@reduxjs/toolkit";
import ProfileScreen from "./ProfileScreen";
import { Navigation } from '@react-navigation/native'

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    
    <SafeAreaView style={tw`bg-white h-full`}>
      <ProfileScreen/>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://img.icons8.com/external-bearicons-glyph-bearicons/344/external-Link-essential-collection-bearicons-glyph-bearicons.png",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Search"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          //returnKeyType={"Search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_API_KEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
