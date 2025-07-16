import { View, Text } from "react-native";
import { styles } from "./style";

type StepHeaderProps = {
  currentStep: number;
};

export function StepHeader({ currentStep }: StepHeaderProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {[1, 2, 3, 4].map((step) => {
          const isCompleted = step <= currentStep;

          return (
            <View
              key={step}
              style={[
                styles.circle,
                isCompleted ? styles.circleCompleted : styles.circlePending,
              ]}
            >
              <Text
                style={[
                  styles.number,
                  isCompleted ? styles.numberCompleted : styles.numberPending,
                ]}
              >
                {step}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
