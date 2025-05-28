import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#e6f0ff', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    schedule: {
        padding: 12,
    },
    serviceSection: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 24,
        width: '85%',
        maxWidth: 600,
        height: '55%',
        alignItems: 'center',
    },
    serviceTitle: {
        fontSize: 32, 
        fontWeight: 500, 
        paddingBottom: 32, 
    },
    servicesGrid: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
    },
    subtitle: {
        padding: 10,
        left: 30,
        color: '#7A7498',
    },
})