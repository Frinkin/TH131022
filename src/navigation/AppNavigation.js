import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, Image } from "react-native";
import React from "react";
import Login from "../screens/Login";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import Info from "../screens/infoscreen";
import ForgotPassword from "../screens/ForgotPassword";
import Cargo from "../screens/Cargo";

const Stack = createStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../../assets/login.png')}
    />
  );
}
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => <Button title="Cart" onPress={() => navigation.navigate('Cart')} />,
          
        })}
      />
      <Stack.Screen name="Product" component={Info}
      options={({navigation}) => ({
        headerRight: () => <Button title="Cart" onPress={() => navigation.navigate('Cart')} />,
      })}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Cart" component={Cargo}/>
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
