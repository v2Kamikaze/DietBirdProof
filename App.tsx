import Home from "@app/screens/Home";
import Settings from "@app/screens/Settings";
import { NavigationContainer } from "@react-navigation/native";
import Diet from "@app/screens/Diet";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components";

declare global {
  namespace ReactNavigation {
    export interface RootParamList {
      Home: undefined;
      NewDiet: undefined;
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
        <Stack.Screen name="NewDiet" component={Diet} options={{}} />
        <Stack.Screen name="About" component={Settings} options={{}} />
        <Stack.Screen name="Settings" component={Settings} options={{}} />
        <Stack.Screen name="Exit" component={Settings} options={{}} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
