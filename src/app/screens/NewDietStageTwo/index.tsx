import React from "react";
import {
  ConfirmButton,
  ConfirmButtonTitle,
  FormContainer,
  ScreenContainer,
  SwitchContainer,
  SwitchText,
  TextInput,
  Title,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import { InfoBanner } from "@app/components/shared/InfoBanner";
import { Header } from "@app/components/shared/Header";
import { ProgressIndicator } from "@app/components/shared/ProgressIndicator";
import { ScrollView, Switch } from "react-native";

const DietStateTwo: React.FC = () => {
  const { goBack } = useNavigation();
  const [currentStage, setCurrentStage] = React.useState(1);
  const [bannerClosed, setBannerClosed] = React.useState(false);
  const [switchOn, setSwitchOn] = React.useState(false);

  return (
    <ScreenContainer>
      <Header title="Dados da Ave" onBackPressed={goBack} />

      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <ProgressIndicator
          currentValue={currentStage}
          onPress={setCurrentStage}
        />

        {!bannerClosed && (
          <InfoBanner
            text="Atenção: Você precisa conhecer o peso da sua ave em gramas (g). Caso não saiba, você poderá informar o peso médio da espécie que cria, mas os resultados não serão tão precisos. Para mais de um exemplar da mesma espécie, informe o peso médio dos espécimes."
            onPress={() => setBannerClosed(!bannerClosed)}
          />
        )}

        <FormContainer>
          <Title>Peso (g)</Title>
          <TextInput placeholder="Peso da ave" />
          <Title>Número de aves</Title>
          <TextInput placeholder="Número de aves" />

          <SwitchContainer>
            <Switch value={switchOn} onChange={() => setSwitchOn(!switchOn)} />
            <SwitchText>Usar registros do plantel</SwitchText>
          </SwitchContainer>
        </FormContainer>

        <ConfirmButton onPress={() => {}}>
          <ConfirmButtonTitle>Confirmar</ConfirmButtonTitle>
        </ConfirmButton>
      </ScrollView>
    </ScreenContainer>
  );
};

export default DietStateTwo;
