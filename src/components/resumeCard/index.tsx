import { Text, View } from "react-native";
import { styles } from "./style";

type ResumeCardProps = {
    selectedDate?: string;
}

export function ResumeCard({ selectedDate }: ResumeCardProps) {
    return (
        <View style={styles.CardItem}>
            <Text style={styles.CardTitle}>Resumo do agendamento</Text>
            {selectedDate ? (
                <Text style={styles.CardItem}>Data selecionada: {selectedDate}</Text>
            ): (
               ""
            )}
        </View>
    )
}