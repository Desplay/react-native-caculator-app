import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
  },
  textSecondary: {
    color: "#060606",
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
  },
});

export default ({ onPress, text, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];
  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  }
  if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
