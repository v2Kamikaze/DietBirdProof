import styled from "styled-components/native";

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
