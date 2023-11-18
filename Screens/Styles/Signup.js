import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  signup: {
    width: "100%",
    height: "100%",
  },
  ellipse: {
    backgroundColor: "#1185BA",
    width: 400,
    height: 400,
    borderRadius: 200,
    position: "absolute",
    top: -185,
    left: -50,
    transform: [{ scaleX: 1.4 }, { rotate: "-20deg" }],
  },
  form: {
    marginTop: "20%",
    marginHorizontal: 30,
  },
  input: {
    marginVertical: 8,
  },
  buttonContainer: {
    marginTop: 15,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#1185BA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  button: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  member: {
    marginTop: 25,
    marginHorizontal: 32,
    color: "#1E1E1E",
    fontWeight: "bold",
    fontSize: 18,
  },
  login: {
    marginTop: 15,
    color: "#1185BA",
    marginHorizontal: 32,
    fontWeight: "bold",
    fontSize: 18,
  },
  heading: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    marginHorizontal: 32,
    marginTop: "25%"
  },
});

export default styles;