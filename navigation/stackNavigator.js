import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./bottomTabNavigator";
import IndianRecipe from "../Screens/IndianRecipe";
import Catagories from "../Screens/catagories";
import AmericanRecipe from "../Screens/AmericanRecipe";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="IndianRecipe" component={IndianRecipe} />
      <Stack.Screen name="AmericanRecipe" component={AmericanRecipe}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
