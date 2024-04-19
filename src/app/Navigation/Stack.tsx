import Home from "@app/screens/Home";
import Settings from "@app/screens/Settings";
import Diet from "@app/screens/Diet";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{}} />
      <Stack.Screen name="Diet" component={Diet} options={{}} />
      <Stack.Screen name="Sobre" component={Settings} options={{}} />
      <Stack.Screen name="Settings" component={Settings} options={{}} />
      <Stack.Screen name="Sair" component={Settings} options={{}} />
    </Stack.Navigator>
  );
}
