import styled from "styled-components/native";

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const MiniDietBirdLogo = styled.Image`
  height: 60;
  width: 60;
`;

export const RoundedIconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 4px;
  padding: 8px 16px;

  background-color: #98b66e;
  border-radius: 8px;

  flex-direction: row;

  position: absolute;
  bottom: 48px;
  right: 32px;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: 24px;
  font-weight: bold;
  color: #314222;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #314222;
  color: #314222;
`;
