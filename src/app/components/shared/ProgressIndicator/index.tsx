import React from "react";
import { PressableProps, Pressable } from "react-native";
import { StackText, ApplesIndicator } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type NumeredAppleProps = PressableProps & {
  number: number;
  selected: boolean;
};

export const NumeredApple: React.FC<NumeredAppleProps> = ({
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

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
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
