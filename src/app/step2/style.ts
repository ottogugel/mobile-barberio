import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6f0ff",
    },
    card: {
        width: '90%',
        backgroundColor: 'white',
        padding: 16,
        margin: 10,
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
    selectBarbeiroTitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 700,
    },
    selectBarbeiroSubtitle: {
        color: '#7A7498',
        marginBottom: 10,
    },
    barbeiroItem: {
        width: '45%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 16,
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    resumecard: {
        width: '90%',
    },
    button: {
        display: 'flex',
        flexDirection: 'row', 
        gap: 20, 
        marginTop: 10, 
        justifyContent: 'space-between', 
    }
})