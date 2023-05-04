import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DarthVader from "./src/pages/DarthVader";
import StormStrooper from "./src/pages/StormStrooper";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DarthVader"
          component={DarthVader}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StormStrooper"
          component={StormStrooper}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
