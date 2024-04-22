import Home from "@app/screens/Home";
import Settings from "@app/screens/Settings";
import { NavigationContainer } from "@react-navigation/native";
import DietStageOne from "@app/screens/NewDietStageOne";
import DietStageTwo from "@app/screens/NewDietStageTwo";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components";
import DietStageThree from "@app/screens/NewDietStageThree";

declare global {
  namespace ReactNavigation {
    export interface RootParamList {
      Home: undefined;
      DietStageOne: undefined;
      DietStageTwo: undefined;
      DietStageThree: undefined;
      About: undefined;
      Settings: undefined;
      Exit: undefined;
    }
  }
}

const lightTheme = {
  primaryColor: "#98b66e",
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DietStageOne" component={DietStageOne} />
        <Stack.Screen name="DietStageTwo" component={DietStageTwo} />
        <Stack.Screen name="DietStageThree" component={DietStageThree} />
        <Stack.Screen name="About" component={Settings} options={{}} />
        <Stack.Screen name="Settings" component={Settings} options={{}} />
        <Stack.Screen name="Exit" component={Settings} options={{}} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
