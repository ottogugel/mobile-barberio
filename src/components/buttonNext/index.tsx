import { Calendar } from "lucide-react-native";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type ButtonProps = {
  title: string;
  onPress?: () => void;
}

export function ButtonNext({ title, onPress}: ButtonProps) {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}