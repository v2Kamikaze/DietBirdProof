import React from "react";
import { ScreenContainer, ApplesIndicator, StackText } from "./styles";

import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  PressableProps,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

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
      <Ionicons
        name="logo-apple"
        size={48}
        color={selected ? "green" : "#515151c1"}
      />
    </Pressable>
  );
};

const Banner: React.FC = () => {
  return (
    <View style={styles.alert}>
      <Text style={styles.alertText}>
        Atenção: Para determinar corretamente a quantidade de alimento que a sua
        ave necessita, é preciso levar em consideração a sua região de origem.{" "}
      </Text>
    </View>
  );
};

const SpecieCard: React.FC = () => {
  return (
    <View style={styles.specieCardContainer}>
      <Image
        source={{
          uri: "https://blog.cobasi.com.br/wp-content/uploads/2021/04/psitacideos-capa.png",
        }}
        style={styles.birdImage}
      />
      <View style={styles.specieTextContainer}>
        <Text style={styles.specieTextTitle}>Psitacídeos Australianos</Text>
        <Text style={styles.specieTextSubtitle}>Oceania</Text>
      </View>
    </View>
  );
};

const Diet: React.FC = () => {
  const [currentStage, setCurrentState] = React.useState(0);

  return (
    <ScreenContainer>
      <ApplesIndicator>
        {[1, 2, 3, 4, 5].map((num, idx) => (
          <NumeredApple
            key={num}
            number={num}
            selected={currentStage === idx}
            onTouchStart={() => setCurrentState(idx)}
          />
        ))}
      </ApplesIndicator>
      <ScrollView>
        <Text style={styles.title}>Selecione a espécie</Text>
        <Banner />
        <SpecieCard />
        <SpecieCard />
        <SpecieCard />
      </ScrollView>
    </ScreenContainer>
  );
};

export default Diet;

const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: "center",
  },

  alert: {
    padding: 16,
    backgroundColor: "#98b66e",
    borderRadius: 8,
    marginHorizontal: 16,
  },
  alertText: {
    color: "#314222",
    fontWeight: "600",
  },
  birdImage: {
    width: 80,
    height: 80,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  specieTextContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 16,
  },
  specieTextTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#314222",
  },
  specieTextSubtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#314222CC",
  },
  specieCardContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 16,
    marginTop: 16,
  },
});
