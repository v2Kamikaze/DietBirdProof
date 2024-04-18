import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Home from "@app/screens/Home";
import Settings from "@app/screens/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Diet from "@app/screens/Diet";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={32}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Diet"
        component={Diet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="star-outline"
              size={32}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Sobre"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-outline"
              size={32}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={32}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Sair"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: "#98b66e",
  tabBarInactiveTintColor: "#bfcdbb",
  tabBarStyle: {
    position: "absolute",
    bottom: 40,
    left: 16,
    right: 16,
    alignItems: "center",
    justifyContent: "space-around",
    height: 72,
    paddingBottom: 8,

    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderTopWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  tabBarLabelStyle: {
    fontWeight: "bold",
    fontSize: 12,
  },
  tabBarIconStyle: {
    backgroundColor: "#98b66e",
  },
};
