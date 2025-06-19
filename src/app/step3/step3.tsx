import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { RootStackParamList } from "../../@types/navigation";
import { ButtonBack } from "../../components/buttonBack";
import { ButtonNext } from "../../components/buttonNext";
import { ResumeCard } from "../../components/resumeCard";
import { StepHeader } from "../../components/stepHeader";
import { styles } from "./style";


type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, "step3">;

const horariosDisponiveis = [
  "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30"
];

export function Step3() {

  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProps>();
  const { selectedDate, selectedBarber } = route.params;

  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);

  const handleSelectHorario = (horario: string) => {
    setHorarioSelecionado(horario);
  };

  function handleSetHour() {
    if(!horarioSelecionado) {
      Alert.alert('Atenção', 'Selecione um horário para avançar.')
    } else {
      navigation.navigate('step4', {
        selectedDate,
        selectedBarber: selectedBarber,
        selectedHour: horarioSelecionado,
      })
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center", paddingTop: 20 }}>
        <Text style={styles.title}>Agende seu <Text style={{ color: "#3F88C5" }}>horário</Text></Text>

        <StepHeader currentStep={3} />

        {/* Escolha um horário */}
        <View style={styles.card}>
          <Text style={styles.selectBarbeiroTitle}>Escolha um horário</Text>
          <Text style={styles.selectBarbeiroSubtitle}>Escolha um horário disponível para o seu atendimento</Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 15 }}>
            {horariosDisponiveis.map(horario => (
              <TouchableOpacity
                key={horario}
                onPress={() => handleSelectHorario(horario)}
                style={{
                  width: "23%",
                  paddingVertical: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: horarioSelecionado === horario ? "#3F88C5" : "#ccc",
                  backgroundColor: horarioSelecionado === horario ? "#3F88C5" : "#fff",
                  marginBottom: 12,
                  alignItems: "center"
                }}
              >
                <Text style={{ color: horarioSelecionado === horario ? "#fff" : "#000" }}>🕒 {horario}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Botões de navegação */}
        <View style={{ flexDirection: "row", gap: 20, justifyContent: 'space-between'}}>
          <ButtonBack title="Voltar" onPress={() => navigation.goBack()} />
          <ButtonNext title="Avançar" onPress={handleSetHour} />
        </View>
        </View>

        {/* Resumo do agendamento */}
        <View style={styles.resumecard}>
        <ResumeCard selectedDate={selectedDate} selectedBarber={selectedBarber} selectedHour={horarioSelecionado}  />
        </View>
      </View>
    </ScrollView>
  );
}
