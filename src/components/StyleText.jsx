import React, { Children } from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSize.body,
    color: theme.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.secondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSize,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default function StyleText({
  align,
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    align === "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    style,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}

// const StyleText = () => {
//   return <div>StyleText</div>;
// };

// export default StyleText;
