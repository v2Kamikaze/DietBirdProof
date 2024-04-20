import React from "react";
import { ModalProps, Modal, View, Alert } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ModalContainer,
  ModalTextInput,
  SpecieChoiceCardContent,
  SpecieChoiceCardContainer,
  SpecieChoiceCardImage,
  SpecieChoiceList,
  SpecieChoiceCardSubtitle,
  SpecieChoiceCardTitle,
  ConfirmButton,
  ConfirmButtonTitle,
  SpecieChoiceCardTextContainer,
} from "./styles";
import { Header } from "@app/components/shared/Header";
import { RoundedIconButton } from "../../styles";

type SpecieModalProps = ModalProps & {
  onBackPress: () => void;
};

export const SpecieModal: React.FC<SpecieModalProps> = ({
  visible,
  onBackPress,
}) => {
  const ListItem = React.memo(() => (
    <SpecieChoiceCardContainer>
      <SpecieChoiceCardImage
        source={{
          uri: "https://vivelanaturaleza.com/wp-content/uploads/2020/06/periquito-azul-australiano-comun-ondulado-melopsittacus-undulatus-3.jpg",
        }}
      />
      <SpecieChoiceCardContent>
        <RoundedIconButton onPress={() => {}}>
          <MaterialCommunityIcons
            name="check-circle-outline"
            size={32}
            color="#314222"
          />
        </RoundedIconButton>
        <SpecieChoiceCardTextContainer>
          <SpecieChoiceCardTitle>Nome comum</SpecieChoiceCardTitle>
          <SpecieChoiceCardSubtitle>Nome científico</SpecieChoiceCardSubtitle>
        </SpecieChoiceCardTextContainer>
      </SpecieChoiceCardContent>
    </SpecieChoiceCardContainer>
  ));

  return (
    <Modal animationType="slide" visible={visible}>
      <ModalContainer>
        <Header title="Selecione a espécie" onBackPressed={onBackPress} />

        <ModalTextInput
          placeholder="Procure a espécie"
          selectionColor="#314222cc"
          placeholderTextColor="#3142222f"
        />

        <SpecieChoiceList
          horizontal
          data={Array.from({ length: 10 })}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          renderItem={() => <ListItem />}
        />

        <ConfirmButton
          onPress={() => {
            Alert.alert(
              "Confirmação de escolha",
              "Tem certeza de que é essa espécie? 'Nome Comum'",
              [
                {
                  text: "Confirmar",
                  onPress: () => onBackPress(),
                },
                {
                  text: "Cancelar",
                },
              ]
            );
          }}
        >
          <ConfirmButtonTitle>Confirmar</ConfirmButtonTitle>
        </ConfirmButton>
      </ModalContainer>
    </Modal>
  );
};
