import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { Alert, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { ButtonBack } from "../../components/buttonBack";
import { ButtonNext } from "../../components/buttonNext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { useState } from "react";
import { ResumeCard } from "../../components/resumeCard";
import { StepHeader } from "../../components/stepHeader";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abril', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: "Hoje"
};

LocaleConfig.defaultLocale = 'pt-br';

export function Step1() {

    const [day, setDay] = useState<DateData>()

    const navigation = useNavigation<NavigationProps>();
    

    function handleSetHour() {
        if(!day) {
            Alert.alert('Atenção', 'Por favor, selecione uma data antes de continuar.')
            return;
        }
        const selectedDate = `${day.day}/${day.month}/${day.year}`;
        navigation.navigate('step2', {selectedDate})
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Agende seu <Text style={{ color: '#3F88C5' }}>horário</Text></Text>
            <StepHeader currentStep={1}  />
            <View style={styles.header}>
                <Text style={styles.selectDateTitle}>Selecione uma data</Text>
                <Text style={styles.selectDateSubtitle}>Selecione uma data disponível no calendário</Text>
                <View style={styles.subheader}>
                    <Calendar
                        style={styles.calendar}
                        headerStyle={{
                            borderBottomWidth: 0.5,
                            borderBottomColor: "#E8E8E8",
                            paddingBottom: 10,
                            marginBottom: 10
                        }}
                        theme={{
                            textMonthFontSize: 18,
                            monthTextColor: "#00000",
                            todayTextColor: "#85B8FF",
                            selectedDayBackgroundColor: "#e6f0ff",
                            selectedDayTextColor: "#00000",
                        }}
                        onDayPress={setDay}
                        markedDates={
                            day && {
                                [day.dateString]: { selected: true },
                            }}
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginTop: 10, justifyContent: 'space-between', }}>
                    <View>
                        <ButtonBack title="Voltar" onPress={() => navigation.goBack()} />
                    </View>
                    <View>
                        <ButtonNext title="Avançar" onPress={handleSetHour} />
                    </View>
                </View>
            </View>

            <View style={styles.resumecard}>
                <ResumeCard selectedDate={day?.day && day?.month && day?.year ?`${day.day}/${day.month}/${day.year}` : undefined}  />
            </View>
            </ScrollView>
        </View>
    )
}