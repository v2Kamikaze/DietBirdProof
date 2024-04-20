import styled from "styled-components/native";

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
