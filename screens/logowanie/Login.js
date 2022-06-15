import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native'
import { Formik } from "formik";
import HomeScreen from "../HomeScreen";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  MsgBox,
  StyledButton,
  ButtonText,
  StyledTextInput,
  Colors,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from "../../components/Styles";

import { View } from "react-native";

const { brand, darkLight, primary } = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>EasePark</PageTitle>
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="test@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="********"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={() => {window.location.href ='HomeScreen.js';}}>
                <ButtonText>Test</ButtonText>
              </StyledButton>
              <Line />
              <StyledButton google={true} onPress={() => handleSubmit}>
                <Fontisto name="google" color={primary} size={25} />
                <ButtonText google={true}>Sign in with google</ButtonText>
                <ExtraView>
                  <ExtraText>Don't have an account already?</ExtraText>
                  <TextLink>
                    <TextLinkContent>Signup</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledButton>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
