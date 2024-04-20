import React from "react";
import { ScreenContainer, Title } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { SpecieModal } from "./components/SpecieModal";
import { SpeciesList } from "./components/SpeciesList";
import { InfoBanner } from "@app/components/shared/InfoBanner";
import { Header } from "@app/components/shared/Header";
import { ProgressIndicator } from "../../components/shared/ProgressIndicator";

const DietStageOne: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const [currentStage, setCurrentStage] = React.useState(1);
  const [bannerClosed, setBannerClosed] = React.useState(false);
  const [modalClosed, setModalClosed] = React.useState(false);

  return (
    <ScreenContainer>
      <Header title="Nova dieta" onBackPressed={goBack} />

      <ProgressIndicator
        currentValue={currentStage}
        onPress={setCurrentStage}
      />

      {!bannerClosed && (
        <InfoBanner
          text="Atenção: Para determinar corretamente a quantidade de alimento que a sua
        ave necessita, é preciso levar em consideração a sua região de origem."
          onPress={() => setBannerClosed(!bannerClosed)}
        />
      )}

      <Title>Escolha a espécie</Title>

      <SpeciesList onItemPressed={() => setModalClosed(!modalClosed)} />

      <SpecieModal
        visible={modalClosed}
        onBackPress={() => setModalClosed(!modalClosed)}
      />
    </ScreenContainer>
  );
};

export default DietStageOne;
