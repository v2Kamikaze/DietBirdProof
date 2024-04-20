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
  width: 48px;
  padding: 4px;

  background-color: #98b66e;
  border-radius: 8px;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: 24px;
  font-weight: bold;
  color: #314222;
`;

export const TextInput = styled.TextInput`
  background-color: #ffffff;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 400;
  color: #314222;

  box-shadow: 0px 0px 2px #0000001a;
  margin: 0px 16px;
`;

export const FormContainer = styled.View`
  gap: 16px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 4px;
  padding: 16px;
  margin: 16px;

  background-color: #98b66e;
  border-radius: 8px;
`;

export const ConfirmButtonTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #314222;
`;

export const SwitchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
`;

export const SwitchText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #31422291;
`;
