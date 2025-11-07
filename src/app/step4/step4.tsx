import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { RootStackParamList } from "../../@types/navigation";
import { ButtonBack } from "../../components/buttonBack";
import { ButtonNext } from "../../components/buttonNext";
import { ResumeCard } from "../../components/resumeCard";
import { StepHeader } from "../../components/stepHeader";
import { styles } from "./style";
import { api } from "../../services/api";
import { Servicos } from "../../api/servico";
import { ModalAgendamento } from "../../components/modalAgendamento";
import { Calendar, Clock, Scissors, User } from "lucide-react-native";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, "step4">;

export function Step4() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();
  const { selectedDate, selectedBarber, selectedHour } = route.params;

  const [servicoSelecionado, setServicoSelecionado] = useState<Servicos | undefined>(undefined);
  const [servico, setServico] = useState<Servicos[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [clientData, setClientData] = useState({ nome: "", telefone: "" });

  useEffect(() => {
    api.get("/public/servico").then((response) => {
      setServico(response.data);
    });
  }, []);

  function handSetService() {
    if (!servicoSelecionado) {
      Alert.alert("Atenção", "Selecione um serviço para finalizar.");
    } else {
      setIsModalVisible(true);
    }
  }

  const handleConfirmClientData = ({
    nome,
    telefone,
  }: {
    nome: string;
    telefone: string;
  }) => {
    setClientData({ nome, telefone });
    setIsModalVisible(false);
    setIsReviewModalVisible(true);
  };

  const handleFinalizeAppointment = async () => {
    if (
      !selectedDate ||
      !selectedHour ||
      !selectedBarber ||
      !servicoSelecionado
    ) {
      Alert.alert("Erro", "Informações incompletas para o agendamento.");
      return;
    }

    // Converter "17/6/2025" + "14:00" para "2025-06-17T14:00:00"
    const [day, month, year] = selectedDate.split("/");
    const dataHoraFormatada = `${year}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )}T${selectedHour}:00`;

    try {
      // Criar cliente
      const clienteResponse = await api.post("/clientes", {
        nome: clientData.nome,
        telefone: clientData.telefone,
      });

      const clienteId = clienteResponse.data.id;

      // Montar agendamento
      const agendamento = {
        barbeiro: { id: selectedBarber.id },
        cliente: { id: clienteId },
        servico: { id: servicoSelecionado.id },
        horario: dataHoraFormatada,
      };

      console.log("Enviando agendamento:", agendamento);

      const response = await api.post("/agendamentos", agendamento);

      console.log("Agendamento criado:", response.data);
      setIsReviewModalVisible(false);
      Alert.alert("Sucesso", "Agendamento confirmado!");
      navigation.navigate("home");
    } catch (error: any) {
      console.error("Erro ao agendar:", error);

      if (error.response?.status === 409) {
        Alert.alert(
          "Horário indisponível",
          "Este horário já está reservado. Por favor, selecione outro horário."
        );
      } else {
        Alert.alert("Erro", "Não foi possível finalizar o agendamento.");
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center", paddingTop: 20 }}>
        <Text style={styles.title}>
          Agende seu <Text style={{ color: "#3F88C5" }}>horário</Text>
        </Text>

        <StepHeader currentStep={4} />

        {/* Card de serviços */}
        <View style={styles.card}>
          <Text style={styles.selectBarbeiroTitle}>Escolha um serviço</Text>
          <Text style={styles.selectBarbeiroSubtitle}>
            Escolha o serviço desejado
          </Text>

          <View style={styles.serviceList}>
            {servico.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setServicoSelecionado(item)}
                style={[
                  styles.serviceItem,
                  //servicoSelecionado === item.id && styles.selectedServiceItem,
                ]}
              >
                <View>
                  <Text style={styles.serviceTitle}>{item.nome}</Text>
                  <Text style={styles.serviceDesc}>{item.descricao}</Text>
                </View>
                <View style={styles.serviceInfo}>
                  <Text style={styles.servicePrice}>R$ {item.preco},00</Text>
                  <Text style={styles.serviceDuration}>{item.duracao}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Botões */}
          <View style={styles.buttonRow}>
            <ButtonBack title="Voltar" onPress={() => navigation.goBack()} />
            <ButtonNext title="Avançar" onPress={handSetService} />
          </View>
        </View>

        {/* MODAL para dados do cliente */}
        <ModalAgendamento
            visible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            onConfirm={handleConfirmClientData}
          />

          {/* MODAL de revisão */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={isReviewModalVisible}
            onRequestClose={() => setIsReviewModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Revisão de Agendamento</Text>
                <Text style={styles.modalSubtitle}>Revise todos os dados abaixo e confirme</Text>

                {/* Bloco com detalhes principais */}
                <View style={styles.reviewBox}>
                  <View style={styles.row}>
                    <View style={styles.item}>
                      <Calendar size={16} color="#007bff" />
                      <Text style={styles.itemText}>{selectedDate}</Text>
                    </View>
                    <View style={styles.item}>
                      <User size={16} color="#007bff" />
                      <Text style={styles.itemText}>{selectedBarber.nome}</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.item}>
                      <Clock size={16} color="#007bff" />
                      <Text style={styles.itemText}>{selectedHour}</Text>
                    </View>
                    <View style={styles.item}>
                      <Scissors size={16} color="#007bff" />
                      <Text style={styles.itemText}>{servicoSelecionado?.nome}</Text>
                    </View>
                  </View>
                </View>

                <Text style={styles.valueText}>
                  <Text style={{ fontWeight: "bold" }}>Valor:</Text> R$ {servicoSelecionado?.preco},00
                </Text>

                {/* Botões */}
                <View style={styles.modalButtonsContainer}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.cancelButton]}
                    onPress={() => setIsReviewModalVisible(false)}
                  >
                    <Text style={styles.cancelText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.confirmButton]}
                    onPress={handleFinalizeAppointment}
                  >
                    <Text style={styles.confirmText}>Finalizar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        {/* Resumo do agendamento */}
        <View style={styles.resumecard}>
          <ResumeCard
            selectedDate={selectedDate}
            selectedBarber={selectedBarber}
            selectedHour={selectedHour}
            selectedService={servicoSelecionado}
          />
        </View>
    </ScrollView>
  );
}
