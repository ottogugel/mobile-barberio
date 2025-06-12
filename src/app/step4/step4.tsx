import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert, FlatList, Modal, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../@types/navigation";
import { ButtonBack } from "../../components/buttonBack";
import { ButtonNext } from "../../components/buttonNext";
import { ResumeCard } from "../../components/resumeCard";
import { StepHeader } from "../../components/stepHeader";
import { styles } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Servicos } from "../../api/servico";
import { Scissors } from "lucide-react-native";


type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, "step4">;


export function Step4() {

  const [modalOpen, setModalOpen] = useState(false)


  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProps>();
  const { selectedDate, selectedBarber, selectedHour } = route.params;

  const [servicoSelecionado, setServicoSelecionado] = useState<Servicos | undefined>(undefined);

  const [servico, setServico] = useState<Servicos[]>([]);


  useEffect(() => {
    api.get('/servico').then(response => {
      setServico(response.data);
    });
  }, []);

  function handSetService() {
    if (!servicoSelecionado) {
      Alert.alert('Atenção', 'Selecione um serviço para finalizar.')
    } else {
      setIsModalVisible(true);
    }
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleConfirm = () => {
    // Lógica para confirmar o agendamento
    if(!name || !phone) {
      Alert.alert('Atenção', 'Preencha as informações para confirmar o agendamento.')
    } else {
    setIsModalVisible(false);
    // Navegar para próxima tela ou mostrar mensagem de sucesso
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", paddingTop: 20 }}>
        <Text style={styles.title}>Agende seu <Text style={{ color: "#3F88C5" }}>horário</Text></Text>

        <StepHeader currentStep={4} />

        {/* Escolha um horário */}
        <View style={styles.card}>
          <Text style={styles.selectBarbeiroTitle}>Escolha um serviço</Text>
          <Text style={styles.selectBarbeiroSubtitle}>Escolha o serviço desejado</Text>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <FlatList
              data={servico}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    borderWidth: 1,
                    borderColor: servicoSelecionado?.id === item.id ? '#3F88C5' : '#ccc',
                    padding: 12,
                    margin: 4,
                    borderRadius: 8,
                    backgroundColor: servicoSelecionado?.id === item.id ? '#e0f0ff' : '#fff',
                    flexDirection: 'row',
                    gap: 4,
                    alignItems: 'center',
                  }}
                  onPress={() => setServicoSelecionado(item)}
                >
                  <Scissors size={20} />
                  <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{item.nome}</Text>
                  <Text>{item.descricao}</Text>
                  <Text>R${item.preco}.00</Text>
                  <Text>{item.duracao} min</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          {/* Botões de navegação */}
          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <ButtonBack title="Voltar" onPress={() => navigation.goBack()} />
            <ButtonNext title="Finalizar" onPress={handSetService} />
          </View>
          {/* MODAL */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Finalize seu agendamento</Text>
                <Text style={styles.modalSubtitle}>Preencha seus dados para confirmar o agendamento</Text>

                <Text style={styles.sectionTitle}>Nome completo:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite seu nome"
                  placeholderTextColor="#000000"
                  value={name}
                  onChangeText={setName}
                />

                <Text style={styles.sectionTitle}>Telefone</Text>
                <TextInput
                  style={styles.input}
                  placeholder="(00) 00000-0000"
                  placeholderTextColor="#000000"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                />

                <View style={styles.modalButtons}>
                  <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                    <Text style={styles.modalButtonText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.modalButtonText}>Confirmar agendamento</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        {/* Resumo do agendamento */}
        <View style={styles.resumecard}>
          <ResumeCard selectedDate={selectedDate} selectedBarber={selectedBarber} selectedHour={selectedHour} selectedService={servicoSelecionado} />
        </View>
      </View>
    </View>
  );
}
