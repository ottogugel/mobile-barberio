import { Text, View } from "react-native";
import { styles } from "./style";
import { format, parse, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, User } from "lucide-react-native";
import { Funcionario } from "../../api/funcionarios";

type ResumeCardProps = {
  selectedDate?: string;
  selectedBarber?: Funcionario;
};

export function ResumeCard({ selectedDate, selectedBarber }: ResumeCardProps) {
  let formattedDate = null;

  if (selectedDate) {
    const parsed = parse(selectedDate, 'd/M/yyyy', new Date());
    if (isValid(parsed)) {
      formattedDate = format(parsed, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    }
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
    </View>
  );
}
