import { View, Text, StyleSheet } from "react-native";
import { styles } from "./style";

type StepHeaderProps = {
  currentStep: number;
};

export function StepHeader({ currentStep }: StepHeaderProps) {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4].map((step) => (
        <View key={step} style={[styles.circle, currentStep === step && styles.active]}>
          <Text style={[styles.number, currentStep === step && styles.activeNumber]}>{step}</Text>
        </View>
      ))}
    </View>
  );
}