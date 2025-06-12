import { Funcionario } from "../api/funcionarios";

export type RootStackParamList = {
  home: undefined;
  step1: undefined;
  step2: {
    selectedDate: string;
  };
  step3: {
    selectedDate: string;
    selectedBarber: Funcionario;
  };
  step4: {
    selectedDate: string;
    selectedBarber: Funcionario;
    selectedHour: string;
  };
};