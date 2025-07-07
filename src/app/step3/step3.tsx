import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { RootStackParamList } from "../../@types/navigation";
import { ButtonBack } from "../../components/buttonBack";
import { ButtonNext } from "../../components/buttonNext";
import { ResumeCard } from "../../components/resumeCard";
import { StepHeader } from "../../components/stepHeader";
import { styles } from "./style";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, "step3">;

export function Step3() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProps>();
  const { selectedDate, selectedBarber } = route.params;

  const [horariosDisponiveis, setHorarioDisponiveis] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Garante que a string esteja no formato ISO (YYYY-MM-DDTHH:MM:SS) antes de converter.
  function formatDateToISOString(dateBR: string): string {
    const [day, month, year] = dateBR.split("/");
    return new Date(`${year}-${month}-${day}T00:00:00`).toISOString();
  }

  useEffect(() => {
    async function fetchHorariosDisponiveis() {
      try {
        setLoading(true);

        // Extrai a data no formato YYYY-MM-DD
        const [day, month, year] = selectedDate.split("/");
        const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
          2,
          "0"
        )}`;

        const response = await axios.get(
          `http://137.131.135.29:1509/agendamentos/horarios/${selectedBarber.id}`,
          {
            params: {
              data: formattedDate,
            },
          }
        );

        // Formata os horários para exibir apenas HH:MM
        const horariosFormatados = response.data.map((horario: string) => {
          return horario.substring(0, 5); // Pega apenas os primeiros 5 caracteres (HH:MM)
        });

        setHorarioDisponiveis(horariosFormatados);
      } catch (error) {
        Alert.alert(
          "Erro",
          "Não foi possível carregar os horários disponíveis."
        );
        console.error("Erro ao buscar horários:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHorariosDisponiveis();
  }, [selectedBarber.id, selectedDate]);

  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(
    null
  );

  const handleSelectHorario = (horario: string) => {
    setHorarioSelecionado(horario);
  };

  function handleSetHour() {
    if (!horarioSelecionado) {
      Alert.alert("Atenção", "Selecione um horário para avançar.");
    } else {
      navigation.navigate("step4", {
        selectedDate,
        selectedBarber: selectedBarber,
        selectedHour: horarioSelecionado,
      });
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center", paddingTop: 20 }}>
        <Text style={styles.title}>
          Agende seu <Text style={{ color: "#3F88C5" }}>horário</Text>
        </Text>

        <StepHeader currentStep={3} />

        {/* Escolha um horário */}
        <View style={styles.card}>
          <Text style={styles.selectBarbeiroTitle}>Escolha um horário</Text>
          <Text style={styles.selectBarbeiroSubtitle}>
            Escolha um horário disponível para o seu atendimento
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            {loading ? (
              <Text>Carregando horários...</Text>
            ) : horariosDisponiveis.length === 0 ? (
              <Text>Não há horários disponíveis para essa data.</Text>
            ) : (
              horariosDisponiveis.map((horario) => (
                <TouchableOpacity
                  key={horario}
                  onPress={() => handleSelectHorario(horario)}
                  style={{
                    width: "23%",
                    paddingVertical: 10,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor:
                      horarioSelecionado === horario ? "#3F88C5" : "#ccc",
                    backgroundColor:
                      horarioSelecionado === horario ? "#3F88C5" : "#fff",
                    marginBottom: 12,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: horarioSelecionado === horario ? "#fff" : "#000",
                    }}
                  >
                    🕒 {horario}
                  </Text>
                </TouchableOpacity>
              ))
            )}
          </View>

          {/* Botões de navegação */}
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              justifyContent: "space-between",
            }}
          >
            <ButtonBack title="Voltar" onPress={() => navigation.goBack()} />
            <ButtonNext title="Avançar" onPress={handleSetHour} />
          </View>
        </View>

        {/* Resumo do agendamento */}
        <View style={styles.resumecard}>
          <ResumeCard
            selectedDate={selectedDate}
            selectedBarber={selectedBarber}
            selectedHour={horarioSelecionado}
          />
        </View>
      </View>
    </ScrollView>
  );
}
