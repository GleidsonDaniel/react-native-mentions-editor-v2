import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  textContainer: {
    alignSelf: "stretch",
    position: "relative",
    minHeight: 50,
  },
  input: {
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
    paddingHorizontal: 7,
    minHeight: 40,
    position: "absolute",
    top: 0,
    color: "transparent",
    alignSelf: "stretch",
    width: "100%"
  },
  formmatedTextWrapper: {
    minHeight: 50,
    position: "absolute",
    top: 0,
    paddingHorizontal: 7,
    paddingVertical: 5,
    width: "100%",
  },
  formmatedText: {
    fontSize: 16,
    fontWeight: "400"
  },
  mention: {
    fontSize: 16,
    fontWeight: "400",
    backgroundColor: "rgba(36, 77, 201, 0.05)",
    color: "#4747d9"
  },
  placeholderText: {
    color: "rgba(0, 0, 0, 0.1)",
    fontSize: 16
  }
});
