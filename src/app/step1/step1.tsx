import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { Alert, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { ButtonBackHome } from "../../components/buttonBackHome";
import { ButtonNext } from "../../components/buttonNext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { useState } from "react";
import { ResumeCard } from "../../components/resumeCard";
import { StepHeader } from "../../components/stepHeader";
import { setupCalendarLocale } from '../../utils/calendarConfig';


type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

setupCalendarLocale(); // Configuração do Calendário

const today = new Date();
const todayString = today.toISOString().split('T')[0];
const initialDate: DateData = {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
    timestamp: today.getTime(),
    dateString: todayString,
};

export function Step1() {

    const [day, setDay] = useState<DateData>(initialDate);

    const navigation = useNavigation<NavigationProps>();


    function handleSetDate() {
        if (!day) {
            Alert.alert('Atenção', 'Por favor, selecione uma data antes de continuar.')
            return;
        }
        const selectedDate = `${day.day}/${day.month}/${day.year}`;
        navigation.navigate('step2', { selectedDate })
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center", paddingTop: 20 }}>
                    <Text style={styles.title}>Agende seu <Text style={{ color: '#3F88C5' }}>horário</Text></Text>
                </View>
                <StepHeader currentStep={1} />
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
                    <View style={styles.button}>
                        <View>
                            <ButtonBackHome title="Página Inicial" onPress={() => navigation.goBack()} />
                        </View>
                        <View>
                            <ButtonNext title="Próximo" onPress={handleSetDate} />
                        </View>
                    </View>
                </View>

                <View style={styles.resumecard}>
                    <ResumeCard selectedDate={day?.day && day?.month && day?.year ? `${day.day}/${day.month}/${day.year}` : undefined} />
                </View>
            </ScrollView>
        </View>
    )
}