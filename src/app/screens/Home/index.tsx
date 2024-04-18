import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import {
  DietBirdLogoImage,
  DietBirdLogoText,
  HomeMenuItem,
  HomeMenuItemText,
  HomeMenuList,
  LogoContainer,
  ScreenContainer,
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const buttons = [
  {
    text: "Nova Dieta",
    icon: (
      <MaterialCommunityIcons
        name="leaf"
        size={26}
        color={"#314222"}
        style={{}}
      />
    ),
  },
  {
    text: "Dietas Salvas",
    icon: (
      <MaterialCommunityIcons name="content-save" size={26} color={"#314222"} />
    ),
  },
  {
    text: "Biblioteca de Alimentos",
    icon: <MaterialCommunityIcons name="library" size={26} color={"#314222"} />,
  },
  {
    text: "Lista de Compras",
    icon: (
      <MaterialCommunityIcons
        name="format-list-bulleted"
        size={26}
        color={"#314222"}
      />
    ),
  },
  {
    text: "Registro de Peso Corporal",
    icon: (
      <MaterialCommunityIcons
        name="scale-balance"
        size={26}
        color={"#314222"}
      />
    ),
  },
  {
    text: "Evolução de Peso",
    icon: (
      <MaterialCommunityIcons name="chart-line" size={26} color={"#314222"} />
    ),
  },
];

const Home: React.FC = () => {
  return (
    <ScreenContainer>
      <LogoContainer>
        <DietBirdLogoImage source={require("../../../../assets/logo.png")} />
        <DietBirdLogoText>DietBird</DietBirdLogoText>
      </LogoContainer>
      <ScrollView>
        <HomeMenuList>
          {buttons.map(({ text, icon }) => (
            <HomeMenuItem key={text}>
              <View
                style={{
                  backgroundColor: "#98b66e",
                  padding: 8,
                  borderRadius: 26,
                }}
              >
                {icon}
              </View>
              <HomeMenuItemText>{text}</HomeMenuItemText>
            </HomeMenuItem>
          ))}
        </HomeMenuList>
      </ScrollView>
    </ScreenContainer>
  );
};

export default Home;
