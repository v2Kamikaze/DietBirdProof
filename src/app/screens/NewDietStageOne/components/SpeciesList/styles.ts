import styled from "styled-components/native";

export const SpecieCardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 2px #0000001a;
  margin-top: 24px;
`;

export const SpecieCardImage = styled.Image`
  height: 100%;
  width: 150px;
  border-radius: 8px 0px 0px 8px;
`;

export const SpecieCardTextContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 8px;
`;

export const SpecieCardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #314222;
`;

export const SpecieCardSubtitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #314222cc;
`;

export const SpecieCardSelectButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: flex-end;
  padding: 4px 8px;

  background-color: #314222;
  border-radius: 8px;
`;

export const SpecieCardSelectButtonTitle = styled.Text`
  font-size: 14px;
  color: #98b66e;
  font-weight: bold;
`;

export const SpeciesCardList = styled.FlatList`
  padding: 16px;
`;
