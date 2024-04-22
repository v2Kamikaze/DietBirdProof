import React from "react";
import {
  ConfirmButton,
  ConfirmButtonTitle,
  ScreenContainer,
} from "../NewDietStageTwo/styles";

import { useNavigation } from "@react-navigation/native";

import { Header } from "@app/components/shared/Header";
import { ProgressIndicator } from "@app/components/shared/ProgressIndicator";
import { ScrollView } from "react-native";
import {
  InfoText,
  PeriodOfLifeButton,
  PeriodOfLifeContainer,
  PeriodOfLifeTitle,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

type PeriodProps = {
  title: string;
  text: string;
};

const Period: React.FC<PeriodProps> = ({ title, text }) => {
  const [collapsed, setCollapsed] = React.useState(true);
  return (
    <PeriodOfLifeContainer>
      <PeriodOfLifeButton onPressIn={() => setCollapsed(!collapsed)}>
        <PeriodOfLifeTitle>{title}</PeriodOfLifeTitle>
        <Ionicons name="arrow-down-sharp" size={32} color="#314222" />
      </PeriodOfLifeButton>
      {!collapsed && (
        <>
          <InfoText>{text}</InfoText>
          <ConfirmButton onPress={() => {}}>
            <ConfirmButtonTitle>Confirmar</ConfirmButtonTitle>
          </ConfirmButton>
        </>
      )}
    </PeriodOfLifeContainer>
  );
};

const DietStageThree: React.FC = () => {
  const { goBack } = useNavigation();
  const [currentStage, setCurrentStage] = React.useState(1);

  return (
    <ScreenContainer>
      <Header title="Período de Vida" onBackPressed={goBack} />

      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <ProgressIndicator
          currentValue={currentStage}
          onPress={setCurrentStage}
        />

        <Period
          title="Período de Crescimento"
          text="Essa é a fase de menor necessidade energética. Sua ave não está
            passando por nenhum processo fisiológico que demande muita energia,
            como crescimento, reprodução, muda de penas ou processo patológico."
        />

        <Period
          title="Período de Manutenção"
          text="Essa é a fase de menor necessidade energética. Sua ave não está
            passando por nenhum processo fisiológico que demande muita energia,
            como crescimento, reprodução, muda de penas ou processo patológico."
        />

        <Period
          title="Período de Pré-reprodução"
          text="Essa é a fase de menor necessidade energética. Sua ave não está
          passando por nenhum processo fisiológico que demande muita energia,
          como crescimento, reprodução, muda de penas ou processo patológico."
        />

        <Period
          title="Período de Muda de Penas"
          text="Essa é a fase de menor necessidade energética. Sua ave não está
        passando por nenhum processo fisiológico que demande muita energia,
        como crescimento, reprodução, muda de penas ou processo patológico."
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default DietStageThree;
