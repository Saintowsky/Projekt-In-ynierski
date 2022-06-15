import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
// import { FaBeer } from 'react-icons/fa';
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { withTheme } from "styled-components";
import { useSelector } from "react-redux";
import { selectOrigin } from "../navigation/navSlice";
// import { Icon } from "react-native-vector-icons/Icon";
import { NavigatorScreenParams } from '@react-navigation/native';





const data2 = [
    

    {
        id: "123",
        title: "cos tam 123",
        // image: <FaBeer />, //test
        screen:"MapScreen",
    },
    {
        id: "234",
        title: "cosdadasd tam 123",
        // image: <FaBeer />, //test
        screen:"HomeScreen", 
      
    },
];


const NavOptions = () => {
const origin = useSelector(selectOrigin); 
const navigation = useNavigation();

    return (
        <FlatList
        data={data2}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem ={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen) } style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`} disabled={!origin}> 

                <View style={tw`${!origin && "opacity-20" }`}>
                    <Image
                    style={{width: 120, height: 120, resizeMode: "contain" }}
                    source={{ uri: "https://img.icons8.com/external-bearicons-glyph-bearicons/344/external-Link-essential-collection-bearicons-glyph-bearicons.png" }} //test
                    />
                    <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                    {/* <Icon 
                    style={tw`p-2 bg-black rounded-fyll w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    
                    /> */}
                </View>
            </TouchableOpacity>
        )}
        />
    );
};

export default NavOptions

const styles = StyleSheet.create({});