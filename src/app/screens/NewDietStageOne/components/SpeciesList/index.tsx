import React from "react";
import { View } from "react-native";
import {
  SpecieCardContainer,
  SpecieCardImage,
  SpecieCardSelectButton,
  SpecieCardSelectButtonTitle,
  SpecieCardSubtitle,
  SpecieCardTextContainer,
  SpecieCardTitle,
  SpeciesCardList,
} from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type SpeciesListProps = {
  onItemPressed: () => void;
};

export const SpeciesList: React.FC<SpeciesListProps> = ({ onItemPressed }) => {
  return (
    <SpeciesCardList
      data={Array.from({ length: 3 })}
      showsVerticalScrollIndicator={false}
      renderItem={() => (
        <SpecieCardContainer>
          <SpecieCardImage
            source={{
              uri: "https://www.petz.com.br/blog/wp-content/uploads/2019/03/tudo-sobre-papagaio-aves.jpg",
            }}
          />
          <SpecieCardTextContainer>
            <SpecieCardTitle>Psitacídeos Australianos</SpecieCardTitle>
            <SpecieCardSubtitle>Oceania</SpecieCardSubtitle>

            <SpecieCardSelectButton onPress={onItemPressed}>
              <SpecieCardSelectButtonTitle>
                Selecionar
              </SpecieCardSelectButtonTitle>
              <MaterialCommunityIcons name="check" size={24} color="#98b66e" />
            </SpecieCardSelectButton>
          </SpecieCardTextContainer>
        </SpecieCardContainer>
      )}
    />
  );
};
