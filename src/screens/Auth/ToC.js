import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, SIZES } from "../../consts/theme";

export default function ToC({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <View>
            <Text style={styles.title}>Terms & Conditions</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={{ ...FONTS.body4, lineHeight: 24 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever{" "}
            </Text>
            <Text style={styles.paragraphTitle}>Data and Privacy</Text>
            <Text style={{ ...FONTS.body4, lineHeight: 24 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem standard dummy text ever. Learn more at
              wakala.xyz/terms.
            </Text>
            <Text style={styles.paragraphTitle}>
              Celo Assets and Kukuza Account
            </Text>
            <Text style={{ ...FONTS.body4, lineHeight: 24 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem standard dummy text ever. Learn more at
              wakala.xyz/terms.
            </Text>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <LinearGradient
              colors={COLORS.buttonGradient}
              start={[1, 0]}
              end={[0, 1]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Accept</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  titleWrapper: {
    width: "100%",
    marginTop: 80,
    marginBottom: 0,
    alignItems: "flex-start",
  },

  title: {
    ...FONTS.h1,
    color: "#4840BB",
    lineHeight: 28.44,
    fontFamily: "Rubik_500Medium",
    marginBottom: 10,
  },
  contentWrapper: {
    marginBottom: 150,
    marginTop: 10,
    padding: 0,
    alignItems: "flex-start",
    width: "100%",
    maxHeight: SIZES.height * 0.75,
  },
  buttonWrapper: {
    width: "100%",
    justifyContent: "flex-start",
    marginBottom: 40,
  },
  paragraphTitle: {
    ...FONTS.body2,
    fontSize: 18,
    color: COLORS.primary,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 56,
    width: "100%",
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 23.3,
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Rubik_700Bold",
  },
});
