import { Calendar } from "lucide-react-native";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type ButtonProps = {
  title: string;
}

export function Button({ title}: ButtonProps) {

  return (
    <TouchableOpacity style={styles.button}>
      <Calendar size={20} color="white" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}