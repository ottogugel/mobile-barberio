import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginVertical: 24,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  active: {
    backgroundColor: "#3F88C5",
    borderColor: "#3F88C5",
  },
  number: {
    color: "#6B7280",
    fontWeight: "bold",
  },
  activeNumber: {
    color: "#fff",
  },
})

