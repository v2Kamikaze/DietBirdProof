import styled from "styled-components/native";

export const ModalContainer = styled.SafeAreaView`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const ModalTextInput = styled.TextInput`
  background-color: #ffffff;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 400;
  color: #314222;

  box-shadow: 0px 0px 2px #0000001a;
  margin: 0px 16px;
`;

export const SpecieChoiceList = styled.FlatList`
  padding: 16px;
  flex: 1;
`;

export const SpecieChoiceCardContainer = styled.View`
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px #0000001a;
  align-self: flex-start;
  width: 300px;
`;

export const SpecieChoiceCardImage = styled.Image`
  height: 400px;
  width: 300px;

  border-radius: 8px 8px 0px 0px;
`;

export const SpecieChoiceCardTextContainer = styled.View`
  flex: 1;
`;

export const SpecieChoiceCardTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #314222;
`;

export const SpecieChoiceCardSubtitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #314222cc;
`;

export const SpecieChoiceCardContent = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px;
  gap: 8px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 4px;
  padding: 16px;
  margin: 16px;

  background-color: #98b66e;
  border-radius: 8px;
`;

export const ConfirmButtonTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #314222;
`;
