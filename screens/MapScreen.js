import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../navigation/NavigateCard";
import ProfileOptions from "../components/ProfileOptions";


const MapScreen = () => {
    const Stack = createStackNavigator();

    return (
        <View>
            <Text>Here us mapo</Text>

            <View style={tw`h-1/2`}>

                <Map />

            </View>
            <View style={tw`h-1/2`}></View>

            <Stack.Navigator>

            <Stack.Screen
                name="NavigateCard"
                component={NavigateCard}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="NavigateCard"
                component={ProfileOptions}
                options={{
                    headerShown: false,
                }}
            />

            </Stack.Navigator>.

        </View>
    );
};


export default MapScreen;

const styles = StyleSheet.create({});