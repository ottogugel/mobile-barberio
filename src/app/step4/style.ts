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
        width: '93%',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalSubtitle: {
        marginBottom: 20,
        color: '#666',
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        padding: 10,
        marginBottom: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    cancelButton: {
        padding: 12,
        backgroundColor: '#e74c3c',
        borderRadius: 6,
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },
    confirmButton: {
        padding: 12,
        backgroundColor: '#3F88C5',
        borderRadius: 6,
        flex: 2,
        marginLeft: 10,
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})