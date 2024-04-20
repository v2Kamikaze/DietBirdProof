import styled from "styled-components/native";

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
