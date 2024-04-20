import React from "react";
import { HeaderContainer, RoundedIconButton, HeaderTitle } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type HeaderProps = {
  title: string;
  onBackPressed: () => void;
};

export const Header: React.FC<HeaderProps> = ({ title, onBackPressed }) => {
  return (
    <HeaderContainer>
      <RoundedIconButton onPress={onBackPressed}>
        <MaterialCommunityIcons name="arrow-left" size={32} color="#314222" />
      </RoundedIconButton>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};
