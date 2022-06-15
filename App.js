import { StatusBar } from "expo-status-bar";
import React from "react";
import MapView from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./screens/MapScreen";
import { store } from "./screens/logowanie/store";
import { KeyboardAvoidingView } from "react-native-web";


//import useCachedResources from "./hooks/useCachedResources";
//import useColorScheme from "./hooks/useColorScheme";
//import Navigation from './navigation';

//screens
import Login from "./screens/logowanie/Login";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
     <Login/>
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <SafeAreaProvider>
    //     <KeyboardAvoidingView
    //     behaviour={Platform.OS === 'ios' ? 'padding' : "height" }
    //     style={{ flex: 1 }}
    //     keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
    //     >
    //       <Stack.Navigator>
    //         <Stack.Screen
    //           name="HomeScreen"
    //           component={HomeScreen}
    //           options={{ headerShown: false }}
    //         />
    //         <Stack.Screen
    //           name="MapScreen"
    //           component={MapScreen}
    //           options={{ headerShown: false }}
    //         />
    //         <Stack.Screen
    //           name="ProfileScreen"
    //           component={ProfileScreen}
    //           options={{ headerShown: false }}
    //         />
    //       </Stack.Navigator>
    //     </KeyboardAvoidingView>
    //     </SafeAreaProvider>
    //   </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
