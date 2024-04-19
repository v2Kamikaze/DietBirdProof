import React from "react";
import {
  ScreenContainer,
  ApplesIndicator,
  StackText,
  HeaderContainer,
  RoundedIconButton,
  HeaderTitle,
  InfoBannerContainer,
  InfoBannerText,
  InfoBannerExitButton,
  SpecieCardContainer,
  SpecieCardImage,
  SpecieCardTextContainer,
  SpecieCardTitle,
  SpecieCardSubtitle,
  SpeciesCardList,
  Title,
  SpecieCardSelectButton,
  SpecieCardSelectButtonTitle,
} from "./styles";

import { Button, Pressable, PressableProps } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type NumeredAppleProps = PressableProps & {
  number: number;
  selected: boolean;
};

const NumeredApple: React.FC<NumeredAppleProps> = ({
  number,
  selected,
  ...rest
}) => {
  return (
    <Pressable {...rest}>
      <StackText>{number}</StackText>
      <MaterialCommunityIcons
        name="food-apple"
        size={48}
        color={selected ? "#98b66e" : "#515151c1"}
      />
    </Pressable>
  );
};

type ProgressIndicatorProps = {
  currentValue: number;
  onPress: (value: number) => void;
};

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentValue,
  onPress,
}) => (
  <ApplesIndicator>
    <NumeredApple
      number={1}
      selected={currentValue === 1}
      onPress={() => onPress(1)}
    />
    <NumeredApple
      number={2}
      selected={currentValue === 2}
      onPress={() => onPress(2)}
    />
    <NumeredApple
      number={3}
      selected={currentValue === 3}
      onPress={() => onPress(3)}
    />
    <NumeredApple
      number={4}
      selected={currentValue === 4}
      onPress={() => onPress(4)}
    />
    <NumeredApple
      number={5}
      selected={currentValue === 5}
      onPress={() => onPress(5)}
    />
  </ApplesIndicator>
);

const Diet: React.FC = () => {
  const { goBack } = useNavigation();
  const [currentStage, setCurrentStage] = React.useState(1);
  const [closed, setClosed] = React.useState(false);

  return (
    <ScreenContainer>
      <HeaderContainer>
        <RoundedIconButton onPress={goBack}>
          <MaterialCommunityIcons name="arrow-left" size={32} color="#314222" />
        </RoundedIconButton>
        <HeaderTitle>Nova dieta</HeaderTitle>
      </HeaderContainer>

      <ProgressIndicator
        currentValue={currentStage}
        onPress={setCurrentStage}
      />

      {!closed && (
        <InfoBannerContainer>
          <InfoBannerExitButton onPress={() => setClosed(!closed)}>
            <MaterialCommunityIcons name="close" size={24} color="#98b66e" />
          </InfoBannerExitButton>
          <InfoBannerText>
            Atenção: Para determinar corretamente a quantidade de alimento que a
            sua ave necessita, é preciso levar em consideração a sua região de
            origem.
          </InfoBannerText>
        </InfoBannerContainer>
      )}

      <Title>Escolha a espécie</Title>

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

              <SpecieCardSelectButton>
                <SpecieCardSelectButtonTitle>
                  Selecionar
                </SpecieCardSelectButtonTitle>
                <MaterialCommunityIcons
                  name="check"
                  size={24}
                  color="#98b66e"
                />
              </SpecieCardSelectButton>
            </SpecieCardTextContainer>
          </SpecieCardContainer>
        )}
      />
    </ScreenContainer>
  );
};

export default Diet;
