import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const MiniDietBirdLogo = styled.Image`
  height: 60;
  width: 60;
`;

export const ApplesIndicator = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 16px;
  padding: 16px;
`;

export const StackText = styled.Text`
  position: absolute;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 20px;
  bottom: 5px;
  text-align: center;
  align-self: center;
  z-index: 1;
`;

export const RoundedIconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 48px;
  padding: 4px;

  background-color: #98b66e;
  border-radius: 8px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding: 8px 16px;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0px 3px 2px #0000001c;
  margin-bottom: 16px;
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  position: absolute;
  left: 72px;
  right: 72px;
  text-align: center;

  font-size: 24px;
  font-weight: bold;
  color: #314222;
`;

export const InfoBannerContainer = styled.View`
  background-color: #98b66e;
  border-radius: 8px;
  margin: 16px;
  padding: 16px;
`;

export const InfoBannerText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #314222;
`;

export const InfoBannerExitButton = styled.Pressable`
  position: absolute;
  background-color: #314222;
  border-radius: 8px;
  padding: 4px;
  right: -4px;
  top: -12px;
`;

export const SpecieCardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 2px #0000001a;
  margin-top: 24px;
`;

export const SpecieCardImage = styled.Image`
  height: 100%;
  width: 150px;
  border-radius: 8px 0px 0px 8px;
`;

export const SpecieCardTextContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 8px;
`;

export const SpecieCardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #314222;
`;

export const SpecieCardSubtitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #314222cc;
`;

export const SpecieCardSelectButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: flex-end;
  padding: 4px 8px;

  background-color: #314222;
  border-radius: 8px;
`;

export const SpecieCardSelectButtonTitle = styled.Text`
  font-size: 14px;
  color: #98b66e;
  font-weight: bold;
`;

export const SpeciesCardList = styled.FlatList`
  padding: 16px;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: 24px;
  font-weight: bold;
  color: #314222;
`;
