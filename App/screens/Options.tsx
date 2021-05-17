import React from "react";
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { RowItem, RowSeparator } from "../components/RowItem";

const styles = StyleSheet.create({
  bigPadding: {
    paddingTop: 30,
  },
});

const openUrl = (url: string) => {
  Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, something went wrong.", "Please try Again later.");
  });
};
export default () => {
  return (
    <SafeAreaView style={styles.bigPadding}>
      {/* dont use scrollview if have many items */}
      <ScrollView>
        <RowItem
          about="Themes"
          onPress={() =>
            openUrl(
              "https://www.typescriptlang.org/docs/handbook/2/objects.html"
            )
          }
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />
        <RowSeparator />
        <RowItem
          onPress={() => openUrl("Boo!")}
          about="React Native Basics"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
        <RowSeparator />
        <RowItem
          onPress={() => openUrl("Boo!")}
          about="React Native By Example"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
