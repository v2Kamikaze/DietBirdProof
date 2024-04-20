import React from "react";
import {
  InfoBannerContainer,
  InfoBannerExitButton,
  InfoBannerText,
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type InfoBannerProps = {
  text: string;
  onPress: () => void;
};

export const InfoBanner: React.FC<InfoBannerProps> = ({ text, onPress }) => {
  return (
    <InfoBannerContainer>
      <InfoBannerExitButton onPress={onPress}>
        <MaterialCommunityIcons name="close" size={24} color="#98b66e" />
      </InfoBannerExitButton>
      <InfoBannerText>{text}</InfoBannerText>
    </InfoBannerContainer>
  );
};
