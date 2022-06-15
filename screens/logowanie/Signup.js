import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
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
import { View, TouchableOpacity } from "react-native";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

import DateTimePicker from "@react-native-community/datetimepicker";

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  const [dob, setDob] = useState();

  
const { brand, darkLight, primary } = Colors;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };



  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Test</PageTitle>
        <SubTitle>Account Signup</SubTitle>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            dateOfBirth: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="Test Test"
                onChangeText={handleBlur("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />

              <MyTextInput
                label="Email Address"
                icon="Mail"
                placeholder="test@gmail.com"
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput
                label="Date of birth"
                icon="calendar"
                placeholder="YYYY - MM - DD"
                onChangeText={handleBlur("dateOfBirth")}
                onBlur={handleBlur("dateOfBirth")}
                value={dob ? dob.toDateString() : ""}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
              />

              <MyTextInput
                label="Password"
                icon="Lock"
                placeholder="********"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <MyTextInput
                label="Confirm password"
                icon="Lock"
                placeholder="********"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <StyledButton onPress={() => handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Already have an account?</ExtraText>
                <TextLink>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
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
  placeholder,
  keyboardType,
  hidePassword,
  onChangeText,
  value,
  onBlur,
  isDate,
  editable,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon></LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={() => showDatePicker}></TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}></RightIcon>
      )}
    </View>
  );
};
export default Signup;
