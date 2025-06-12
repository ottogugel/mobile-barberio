import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#e6f0ff',
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        margin: 16,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
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
    selectBarbeiroTitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 700,
    },
    selectBarbeiroSubtitle: {
        color: '#7A7498',
    },
    resumecard: {
        width: '92%',
    }
})