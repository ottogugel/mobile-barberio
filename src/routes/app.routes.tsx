import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../app/home";
import { Step1 } from '../app/step1/step1';
import { Step2 } from '../app/step2/step2';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="step1"
        component={Step1}
      />

      <Screen
        name="step2"
        component={Step2}
      />
    </Navigator>
  );
}