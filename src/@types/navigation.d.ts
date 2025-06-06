import { Funcionario } from "../api/funcionarios";

export type RootStackParamList = {
  home: undefined;
  step1: undefined;
  step2: {
    selectedDate: string;
  };

};