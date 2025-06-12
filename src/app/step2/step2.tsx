import { Alert, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ButtonBack } from "../../components/buttonBack";
import { ButtonNext } from "../../components/buttonNext";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { ResumeCard } from "../../components/resumeCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Funcionario } from "../../api/funcionarios";
import { styles } from "./style";
import { StepHeader } from "../../components/stepHeader";
import { User } from "lucide-react-native";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, "step2">;

export function Step2() {

    const route = useRoute<RouteProps>();
    const { selectedDate } = route.params;
    const navigation = useNavigation<NavigationProps>();

    const [barbeiroSelecionado, setBarbeiroSelecionado] = useState<Funcionario | undefined>(undefined);

    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

    useEffect(() => {
        api.get('/funcionarios').then(response => {
            const barbeirosAtivos = response.data.filter((func: Funcionario) => func.ativo === true);
            setFuncionarios(barbeirosAtivos);
        });
    }, []);


    function handleSetBarber() {
        if(!barbeiroSelecionado) {
            Alert.alert('Atenção', 'Selecione um barbeiro antes de continuar.')
        } else {
            navigation.navigate('step3', {
                selectedDate, 
                selectedBarber: barbeiroSelecionado
            });
        }
    }


    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center", paddingTop: 20 }}>
            <Text style={styles.title}>
                Agende seu <Text style={{ color: '#3F88C5' }}>horário</Text>
            </Text>

            <StepHeader currentStep={2} />

            <View style={styles.card}>
                <Text style={styles.selectBarbeiroTitle}>Escolha um barbeiro</Text>
                <Text style={styles.selectBarbeiroSubtitle}>Selecione o profissional de sua preferência</Text>

                <FlatList
                    data={funcionarios}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                borderWidth: 1,
                                borderColor: barbeiroSelecionado?.id === item.id ? '#3F88C5' : '#ccc',
                                padding: 16,
                                margin: 8,
                                borderRadius: 8,
                                backgroundColor: barbeiroSelecionado?.id === item.id ? '#e0f0ff' : '#fff',
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 4,
                                alignItems: 'center',
                            }}
                            onPress={() => setBarbeiroSelecionado(item)}
                        >
                            <User size={20} color="black" />
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{item.nome}</Text>
                        </TouchableOpacity>
                    )}

                />
                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginTop: 10, justifyContent: 'space-between', }}>
                    <View>
                        <ButtonBack title="Voltar" onPress={() => navigation.goBack()} />
                    </View>
                    <View>
                        <ButtonNext title="Avançar" onPress={handleSetBarber} />
                    </View>
                </View>
            </View>

            <View style={styles.resumecard}>
                <ResumeCard selectedDate={selectedDate} selectedBarber={barbeiroSelecionado} />
            </View>
          </View>
        </View>
    )
}