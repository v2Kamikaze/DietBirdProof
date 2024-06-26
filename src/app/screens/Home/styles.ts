import styled from "styled-components/native";

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;

  background-color: #ffffff;
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const DietBirdLogoImage = styled.Image`
  width: 100px;
  height: 100px;
  align-self: center;
  margin-top: 8px;
`;

export const DietBirdLogoText = styled.Text`
  color: #314222;
  font-size: 32px;
  font-weight: bold;
`;

export const HomeMenuList = styled.View`
  flex: 1;
  justify-content: center;
  gap: 16px;
  padding: 32px 16px;
`;

export const HomeMenuItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  gap: 16px;

  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px #0000001a;
`;

export const HomeMenuItemText = styled.Text`
  flex: 1;
  text-align: left;
  justify-content: center;

  font-size: 16px;
  font-weight: bold;
  color: #314222;
`;

export const RoundedIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 64px;
  padding: 8px;

  background-color: #98b66e;
  border-radius: 8px;
`;
