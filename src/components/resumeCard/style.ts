import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    CardItem: {
        backgroundColor: 'white',
        borderColor: '#E8E8E8',
        borderRadius: 12,
        borderWidth: 2,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

    CardTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#222',
        marginBottom: 4,
    },
    cardContainer: {
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'row', 
        gap: 4
    },
    CardDesc: {
        fontSize: 15,
        color: '#555',
    },
})

