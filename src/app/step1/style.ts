import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#e6f0ff',
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
    },
    calendar: {
        borderRadius: 12,
        borderColor: '#000000',
    },
    header: {
        borderRadius: 12,
        borderColor: '#000000',
        backgroundColor: 'white',
        padding: 20,
        marginTop: 15,
    },
    subheader: {
        marginTop: 15,
        borderRadius: 12,
        borderColor: '#E8E8E8',
        borderWidth: 2,
    },
    resumecard: {
        marginTop: 10,
        width: '77%',
    }
})