import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef5ff",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    marginBottom: 30,
  },
  selectBarbeiroTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  selectBarbeiroSubtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
    marginBottom: 12,
  },
  serviceList: {
    marginBottom: 16,
  },
  serviceItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  selectedServiceItem: {
    borderColor: "#3F88C5",
    backgroundColor: "#e6f0fa",
  },
  serviceTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  serviceDesc: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },
  serviceInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  servicePrice: {
    color: "#333",
    fontWeight: "600",
  },
  serviceDuration: {
    color: "#666",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    gap: 20,
  },
  resumecard: {
    width: "100%",
    marginBottom: 30,
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
  reviewBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eee",
    padding: 12,
    marginBottom: 16,
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
});
