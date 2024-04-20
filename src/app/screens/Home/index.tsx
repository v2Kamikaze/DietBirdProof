import React from "react";
import { ScrollView, StatusBar } from "react-native";
import {
  RoundedIconContainer,
  DietBirdLogoImage,
  DietBirdLogoText,
  HomeMenuItem,
  HomeMenuItemText,
  HomeMenuList,
  LogoContainer,
  ScreenContainer,
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <ScreenContainer>
      <StatusBar barStyle="dark-content" />
      <LogoContainer>
        <DietBirdLogoImage source={require("../../../../assets/logo.png")} />
        <DietBirdLogoText>DietBird</DietBirdLogoText>
      </LogoContainer>
      <ScrollView>
        <HomeMenuList>
          <HomeMenuItem onPress={() => navigate("DietStageOne")}>
            <RoundedIconContainer>
              <MaterialCommunityIcons name="plus" size={26} color="#314222" />
            </RoundedIconContainer>
            <HomeMenuItemText>Nova Dieta</HomeMenuItemText>
          </HomeMenuItem>

          <HomeMenuItem onPress={() => navigate("DietStageTwo")}>
            <RoundedIconContainer>
              <MaterialCommunityIcons
                name="calendar"
                size={26}
                color="#314222"
              />
            </RoundedIconContainer>
            <HomeMenuItemText>Dietas Salvas</HomeMenuItemText>
          </HomeMenuItem>

          <HomeMenuItem onPress={() => navigate("DietStageOne")}>
            <RoundedIconContainer>
              <MaterialCommunityIcons name="book" size={26} color="#314222" />
            </RoundedIconContainer>
            <HomeMenuItemText>Biblioteca de Alimentos</HomeMenuItemText>
          </HomeMenuItem>

          <HomeMenuItem onPress={() => navigate("DietStageOne")}>
            <RoundedIconContainer>
              <MaterialCommunityIcons
                name="list-status"
                size={26}
                color="#314222"
              />
            </RoundedIconContainer>
            <HomeMenuItemText>Lista de Compras</HomeMenuItemText>
          </HomeMenuItem>

          <HomeMenuItem onPress={() => navigate("DietStageOne")}>
            <RoundedIconContainer>
              <MaterialCommunityIcons
                name="scale-balance"
                size={26}
                color="#314222"
              />
            </RoundedIconContainer>
            <HomeMenuItemText>Registro de Peso Corporal</HomeMenuItemText>
          </HomeMenuItem>

          <HomeMenuItem onPress={() => navigate("DietStageOne")}>
            <RoundedIconContainer>
              <MaterialCommunityIcons
                name="chart-line"
                size={26}
                color="#314222"
              />
            </RoundedIconContainer>
            <HomeMenuItemText>Evolução de Peso</HomeMenuItemText>
          </HomeMenuItem>
        </HomeMenuList>
      </ScrollView>
    </ScreenContainer>
  );
};

export default Home;
