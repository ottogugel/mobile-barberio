import { Text, View } from "react-native";
import { styles } from "./style";
import { format, parse, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, Clock, Scissors, User } from "lucide-react-native";
import { Funcionario } from "../../api/funcionarios";
import { Servicos } from "../../api/servico";

type ResumeCardProps = {
  selectedDate?: string;
  selectedBarber?: Funcionario;
  selectedHour?: string | null;
  selectedService?: Servicos;
};

export function ResumeCard({ selectedDate, selectedBarber, selectedHour, selectedService }: ResumeCardProps) {
  let formattedDate = null;
  let formattedHour = null;

  if (selectedDate) {
    const parsed = parse(selectedDate, 'd/M/yyyy', new Date());
    if (isValid(parsed)) {
      formattedDate = format(parsed, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    }

  if (selectedHour) {
    formattedHour = selectedHour;
  }

  return (
    <View style={styles.CardItem}>
      <Text style={styles.CardTitle}>Resumo do agendamento</Text>
      {formattedDate && (
        <View style={styles.cardContainer}>
          <Calendar size={20} color="#4a90e2" />
          <Text style={styles.CardDesc}>{formattedDate}</Text>
        </View>
      )}
      {selectedBarber && (
        <View style={styles.cardContainer}>
          <User size={20} color="#4a90e2" />
          <Text style={styles.CardDesc}>{selectedBarber.nome}</Text>
        </View>
      )}
      {selectedHour && (
          <View style={styles.cardContainer}>
          <Clock size={20} color="#4a90e2" />
          <Text style={styles.CardDesc}>{formattedHour}</Text>
        </View>
      )}
      {selectedService && (
          <View style={styles.cardContainer}>
          <Scissors size={20} color="#4a90e2" />
          <Text style={styles.CardDesc}>{selectedService.nome} - R${selectedService.preco}.00</Text>
        </View>
      )}
    </View>
  );
 }
}