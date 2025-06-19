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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modalContent: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 24,
        width: "90%",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    modalSubtitle: {
        fontSize: 14,
        color: "#666",
        marginBottom: 16,
    },
    reviewBox: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#eee",
        padding: 12,
        marginBottom: 16,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        flex: 1,
    },
    itemText: {
        fontSize: 14,
        color: "#333",
    },
    valueText: {
        fontSize: 16,
        marginBottom: 20,
    },
    modalButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    modalButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: "#f0f0f0",
    },
    confirmButton: {
        backgroundColor: "#2979ff",
    },
    cancelText: {
        color: "#333",
        fontWeight: "600",
    },
    confirmText: {
        color: "#fff",
        fontWeight: "600",
    },
})