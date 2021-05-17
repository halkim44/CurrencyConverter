import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});
export const RowItem = ({
  about,
  rightIcon,
  onPress,
}: {
  about: string;
  rightIcon: any;
  onPress: any;
}) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{about}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeparator = () => <View style={styles.separator} />;
