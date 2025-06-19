import { House } from "lucide-react-native";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type ButtonProps = {
  title: string;
  onPress?: () => void;
}

export function ButtonBackHome({ title, onPress}: ButtonProps) {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <House size={16} color="white" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}