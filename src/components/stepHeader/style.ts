import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#e9f0f7", // borda ao redor de todos
    padding: 8,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  container: {
    flexDirection: "row",
    gap: 12,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  circleCompleted: {
    backgroundColor: "#3F88C5",
    borderColor: "#3F88C5",
  },
  circlePending: {
    backgroundColor: "#fff",
    borderColor: "#A4C8E9",
  },
  number: {
    fontWeight: "bold",
  },
  numberCompleted: {
    color: "#fff",
  },
  numberPending: {
    color: "#3F88C5",
  },
});
