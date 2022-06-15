// import React, { useState, useEffect, useContext } from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from "react-native";
// import FormButton from '../components/FormButton';
// import { AuthContext } from '../components/AuthProvider';
// import firestore from '@react-native-firebase/firestore';
// import { ServerStyleSheet } from "styled-components";

// const ProfileScreen = () => {
//     const {user, logout} = useContext(AuthContext);

//     return (
//         <SafeAreaView>
//             <ScrollView
//                 style={styles.container}
//                 contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
//                 showsVerticalScrollIndicator={false}
//             >
//                 <Image
//                 style={styles.userImg}
//                 source={require('../assets/users/user-1.jpg')}
//                 />
//                 <Text style={styles.userName}>Janko Muzykant</Text>
//                 <Text style={styles.aboutUser}>szuka miejsca parkingowego.</Text>
//                 <View style={styles.userBtnWrapper}>
//                     <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
//                         <Text style={styles.userBtnTxt}>Message</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
//                         <Text style={styles.userBtnTxt}>Follow</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.userInfoWrapper}>
//                     <View style={styles.userInfoItem}>
//                         <Text style={styles.userInfoTitle}>22</Text>
//                         <Text style={userInfoSubTitle}>park slots</Text>
//                     </View>
//                     <View style={styles.userInfoItem}>
//                         <Text style={styles.userInfoTitle}>22</Text>
//                         <Text style={userInfoSubTitle}>park slots</Text>
//                     </View>
//                     <View style={styles.userInfoItem}>
//                         <Text style={styles.userInfoTitle}>22</Text>
//                         <Text style={userInfoSubTitle}>park slots</Text>
//                     </View>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     //     <View style={styles.container}>
//     //         <Text style={styles.text}>Welcome {user.id}</Text>
//     //         <FormButton buttonTitle="Logout" onPress={() => logout()} />
//     // </View>
//     );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         padding: 20,
//     },
//     text: {
//         fontSize: 20,
//         color: '#333333',
//     },
//     userImg: {
//         height: 150,
//         width: 150,
//         borderRadius: 75,
//     },
//     userName: {
//         fontSize: 18,
//     }
// })

import React from 'react';
import {View, Button, StyleSheet, SafeAreaView } from 'react-native';
import {Avatar, Title, Caption, Text, TouchableRipple} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View>
                    <Avatar.Image
                    source={{
                        uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                    }}
                    size={80}
                    />
               
            <View style={{marginLeft: 20}}>
                <Title style={[styles.title, {marginTop:15, marginBottom:5}]}>Antoni Marek</Title>
                <Caption style={styles.caption}>@amarek</Caption>
            </View>
            </View>
            </View>
            
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name='map-marker-radius' color='#777777' size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>Warsaw, Poland</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='map-marker-radius' color='#777777' size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>+48123456789</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='map-marker-radius' color='#777777' size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>amarek@email.com</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='map-marker-radius' color='#777777' size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>Warsaw, Poland</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, { borderRightColor: '#dddddd', borderRightWidth: 1}]}>
                    <Title>100 zł</Title>
                    <Caption>Wallet</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>30</Title>
                    <Caption>times parked</Caption>
                </View>
                </View>
            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name='heart-outline' color='#FF6347' size={25}/>
                        <Text style={styles.menuItemText}>Your Favorites</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name='credit-card' color='#FF6347' size={25}/>
                        <Text style={styles.menuItemText}>Payment</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name='account-check-outline' color='#FF6347' size={25}/>
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name='settings-outline' color='#FF6347' size={25}/>
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor:'#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100
    },
    infoBox: {
        width: '50%',
        alignItems:'center',
        justifyContent:'center'
    },
    menuWrapper: {
        marginTop: 10
    },
    menuItem: {
        flexDirection:'row',
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    }
})