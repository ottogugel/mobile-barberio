import { Text, View } from "react-native";
import { ButtonBack } from "../../components/buttonBack";
import { ButtonNext } from "../../components/buttonNext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { ResumeCard } from "../../components/resumeCard";
import { styles } from "../style";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Step2() {

    const navigation = useNavigation<NavigationProps>();
     
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agende seu <Text style={{ color: '#3F88C5' }}>horário</Text></Text>
            <View >
                <Text>Escolha um horário</Text>
                <Text>Escolha um horário disponível para o seu atendimento</Text>
                <View >
                    Horários
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginTop: 10, justifyContent: 'space-between', }}>
                    <View>
                        <ButtonBack title="Voltar" onPress={() => navigation.goBack()} />
                    </View>
                    <View>
                        <ButtonNext title="Avançar" />
                    </View>
                </View>
            </View>

            <View>
                <ResumeCard  />
            </View>
        </View>
    )
}