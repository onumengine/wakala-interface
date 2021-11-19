import React, { Fragment, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { SIZES } from "../consts/theme";
import CountryInfo from "../utils/CountryInfo";
import { Magic } from "@magic-sdk/react-native";


const CustomDrawer = (props) => {
  const [phone, setPhone] = useState("+254 706 427718");
  const [flag, setFlag] = useState("");
  const [KSH, setKSH] = useState("567.37");
  const [cUSD, setCUSD] = useState("5.67");

  const [user, setUser] = React.useState("");


  function pickFlag() {
    var phone_split = phone.split(" ");
    var dial_code = phone_split[0];

    CountryInfo.forEach((element) => {
      if (element.dial_code == dial_code) {
        setFlag(element.flag);
      }
    });
  }

  const magic = new Magic("pk_live_5B2A9951805695BB");

  useEffect(() => {
    pickFlag();
  }, [phone]);

    // Logout of Magic session
    const logout = async () => {
      await magic.user.logout();
      setUser("");
      console.log("logged out");

    };

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0 }} />

      <SafeAreaView style={styles.container}>
        <View>
          <LinearGradient
            colors={[
              "rgba(255, 140, 161, 0.08)",
              "rgba(252, 207, 47, 0.08)",
              "rgba(255, 255, 255, 0.08)",
              "rgba(248, 48, 180, 0.08)",
              "rgba(47, 68, 252, 0.08)",
            ]}
            start={[0, 1]}
            end={[1, 0]}
            style={styles.header}
          >
            <View>
              <View style={styles.img} />
              <View style={styles.phoneStyle}>
                <Text style={styles.smallText}>{flag} </Text>
                <Text style={styles.smallText}>{phone}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
              <AntDesign name="close" size={32} color="black" />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={stylesBalance.balance}>
          <View>
            <Text style={stylesBalance.text}>Current Balance</Text>
            <Text style={stylesBalance.ksh}>Ksh {KSH}</Text>
          </View>
          <Text style={stylesBalance.cusd}>{cUSD} cUSD</Text>
        </View>

        <DrawerContentScrollView {...props}>
          <View
            style={{
              borderTopWidth: 0.2,
              borderTopColor: "#444444",
              borderBottomWidth: 0.2,
              borderBottomColor: "#444444",
            }}
          >
            <DrawerItemList {...props} />
            <DrawerItem
              label="Sign out"
              onPress={() => logout()}
            ></DrawerItem>
          </View>
        </DrawerContentScrollView>

        <View style={{ padding: 20 }}>
          <Text style={styles.smallText}>Version 2.0.1</Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    height: 220,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingTop: 40,
  },

  img: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
  },

  phoneStyle: {
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
  },

  smallText: {
    fontFamily: "Rubik_400Regular",
    color: "#333333",
    fontSize: 10,
  },
});

const stylesBalance = StyleSheet.create({
  balance: {
    width: SIZES.width * 0.6,
    height: 100,
    marginLeft: (SIZES.width * 0.1) / 2,
    marginTop: -50,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    padding: 10,
    justifyContent: "space-between",

    shadowColor: "#7a5dba",
    shadowOffset: { width: 0, height: 2.5 },
    shadowOpacity: 0.25,
    shadowRadius: 25,
  },

  text: {
    fontSize: 12,
    fontFamily: "Rubik_400Regular",
    color: "#333333",
  },

  ksh: {
    fontSize: 24,
    fontFamily: "Rubik_500Medium",
    color: "#333333",
  },

  cusd: {
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    color: "#333333",
  },
});

export default CustomDrawer;
