import { Text, View } from "react-native";
import { styles } from "./style";
import { Button } from "../components/buttonHome";
import { Card } from "../components/card";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../@types/navigation";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Home() {

    const navigation = useNavigation<NavigationProps>();
 
    function handleSetSchedule() {
        navigation.navigate('step1')
    }

    return (
        <View style={styles.container}>     
            <View style={styles.header}>
                <Text style={styles.title}>Bem-Vindo à <Text style={{ color: '#3F88C5'}}>Barber</Text> iO</Text>
                <Text style={styles.subtitle}>
                Agende seu horário de forma rápida e fácil com os 
                melhores barbeiros da cidade.
                </Text>
            </View>

            <View style={styles.schedule}>
                <Button title="Agendar Horário" onPress={handleSetSchedule} />        
            </View>

            <View style={styles.serviceSection}>
                <Text style={styles.serviceTitle}>Nossos Serviços</Text>
                <View style={styles.servicesGrid}>
                    <Card title="Corte de Cabelo" description="Estilo personalizado para seu tipo de cabelo" />
                    <Card title="Barba" description="Modelagem e tratamento completo" />
                    <Card title="Combo (Cabelo + Barba)" description="Pacote completo com preço especial" />
                    <Card title="Tratamento Especiais" description="Hidratação, relaxamento e mais" />
                </View>
            </View>
        
        </View>
    )
}