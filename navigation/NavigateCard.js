import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { GOOGLE_API_KEY } from "../navigation/environments";
import {GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import  { setDestination }  from "../navigation/navSlice";
import { useNavigation } from "@react-navigation/native";
import ProfileOptions from '../components/ProfileOptions';


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text`}>elo 3 2 0</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>

            <GooglePlacesAutocomplete
                placeholder="Where?"
                styles={toInputBoxStyles}
                fetchDetails={true}
                //returnKeyType={"Search"}
                minLength={2}
                onPress={(data, details = null) =>{
                    dispatch(
                        setDestination({
                            location: details?.geometry,
                            description: data.description,
                        })
                        );

                        navigation.navigate({key: 'ProfileOptions'});
                 
                }}
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_API_KEY,
                    language: "en",
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
            />

            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
    backgroundColor: "white",
    paddingTop:20,
    flex:0,
    },
    textInput: {
        backgroundColor:"#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});