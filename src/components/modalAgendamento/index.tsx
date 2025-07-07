import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
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
  const [nomeError, setNomeError] = useState("");
  const [telefoneError, setTelefoneError] = useState("");

  function handleConfirmar() {
    let valid = true;

    if (nome.trim().length < 4) {
      setNomeError("O nome deve ter no mínimo 4 caracteres.");
      valid = false;
    } else {
      setNomeError("");
    }

    if (telefone.trim().length !== 11) {
      setTelefoneError("O telefone deve conter exatamente 11 dígitos.");
      valid = false;
    } else {
      setTelefoneError("");
    }

    if (!valid) return;

    onConfirm({ nome, telefone });
    setNome("");
    setTelefone("");
    setNomeError("");
    setTelefoneError("");
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
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
            style={[styles.input, nomeError ? { borderColor: "red" } : {}]}
            placeholder="Digite seu nome"
            placeholderTextColor="#000000"
            value={nome}
            onChangeText={(text) => {
              setNome(text);
              if (text.trim().length >= 4) setNomeError("");
            }}
          />
          {nomeError ? (
            <Text style={localStyles.errorText}>{nomeError}</Text>
          ) : null}

          <Text style={styles.sectionTitle}>Telefone</Text>
          <TextInput
            style={[styles.input, telefoneError ? { borderColor: "red" } : {}]}
            placeholder="(00) 00000-0000"
            placeholderTextColor="#000000"
            keyboardType="phone-pad"
            maxLength={11}
            value={telefone}
            onChangeText={(text) => {
              setTelefone(text.replace(/\D/g, ""));
              if (text.trim().length === 11) setTelefoneError("");
            }}
          />
          {telefoneError ? (
            <Text style={localStyles.errorText}>{telefoneError}</Text>
          ) : null}

          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirmar}
            >
              <Text style={styles.modalButtonText}>Confirmar agendamento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const localStyles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
  },
});
