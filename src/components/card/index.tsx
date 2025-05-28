import { Text, View } from "react-native";
import { styles } from "./style";

type CardProps = {
    title: string;
    description: string;
}

export function Card({ title, description }: CardProps) {
    return (
        <View style={styles.serviceItem}>
            <Text style={styles.serviceTitle}>{title}</Text>
            <Text style={styles.serviceDesc}>{description}</Text>
        </View>
    )
}