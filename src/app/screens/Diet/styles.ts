import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const AppBar = styled.View`
  width: 100%;
  background-color: #ffffff;
  align-items: flex-start;
  justify-content: center;
  padding: 8px 16px;

  box-shadow: 1px 1px #0000001a;
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
  box-shadow: 1px 1px #0000001a;
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
