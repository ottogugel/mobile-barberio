import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useState } from "react";
import { styles } from "./style";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: (data: { nome: string; telefone: string }) => void;
};

export function ModalAgendamento({ visible, onClose, onConfirm }: Props) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  function handleConfirmar() {
    if (!nome || !telefone) {
      Alert.alert('Atenção', "Preencha as informações para confirmar o agendamento.");
      return;
    }

    onConfirm({ nome, telefone });
    setNome("");
    setTelefone("");
  }

  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.modalOverlay}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Finalize seu agendamento</Text>
          <Text style={styles.modalSubtitle}>
            Preencha seus dados para confirmar o agendamento
          </Text>

          <Text style={styles.sectionTitle}>Nome completo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#000000"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.sectionTitle}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder="(00) 00000-0000"
            placeholderTextColor="#000000"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />

          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmar}>
              <Text style={styles.modalButtonText}>Confirmar agendamento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}