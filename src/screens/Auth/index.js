import React, { useEffect, useState, useRef } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CountryFlag from "react-native-country-flag";
import { COLORS, FONTS, SIZES } from "../../consts/theme";
import { Feather } from "@expo/vector-icons";
import { Magic } from "@magic-sdk/react-native";
import { TextInputMask } from "react-native-masked-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeaderTitle from "../../components/HeaderTitle";
import PhoneInput from "react-native-phone-number-input";


export default function SignUpScreen({ navigation }) {
  const [countryCode, setCountryCode] = React.useState("+254");
  const [number, setNumber] = React.useState("");
  const [user, setUser] = React.useState("");
  // const inputRef = React.createRef();


  // phone number input
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef();

  const magic = new Magic("pk_live_5B2A9951805695BB", {
    network: {
      rpcUrl: "https://alfajores-forno.celo-testnet.org",
    },
  });

  // Trigger magic link for user to login / generate wallet
  const login = async () => {
    try {
      const checkValid = phoneInput.current?.isValidNumber();
      setValid(checkValid ? checkValid : false);
      await magic.auth.loginWithSMS({
        phoneNumber: value //pass the phone input value to get otp sms
      });
      // Consume decentralized identity (DID)
      magic.user.getMetadata().then(setUser);
      //TODO Navigate to Terms and Conditions Page
      navigation.navigate("ToC");

    } catch (err) {
      alert(err);
    }
  };

  // Logout of Magic session
  const logout = async () => {
    await magic.user.logout();
    setUser("");
    console.log("logged out");
  };

  // If user is logged in, fetch user wallet balance and the `message` variable value from the smart contract
  /*useEffect(() => {
    magic.user.isLoggedIn().then(isLoggedIn => {
      if (!isLoggedIn) return setUser('');
      magic.user.getMetadata().then(user => {
        setUser(user);
        fetchBalance(user.publicAddress);
        fetchContractMessage();
      });
    })
  }, [])*/
  const title = "A \ncommunity \nthat you \nwill love.";

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <LinearGradient
        style={styles.container}
        colors={["rgba(247, 239, 250, 1.0)", "rgba(252, 248, 237, 1.0)"]}
        start={[1, 0]}
        end={[1, 1]}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            <HeaderTitle navigation={navigation} title={title} />

            <View>

              <Text
                style={{ ...FONTS.body3, fontSize: 14, alignSelf: "center" }}
              >
                Enter Phone number to Login or sign up
              </Text>
              <View
                style={{
                  marginTop: 20,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                }}
              >
              <PhoneInput
                  ref={phoneInput}
                  defaultValue={value}
                  defaultCode="KE"
                  onChangeFormattedText={(text) => {
                    setValue(text);
                  }}
                  withDarkTheme
                  withShadow
                  autoFocus
              />


                {/* <View
                  style={[
                    styles.numberInputBlock,
                    {
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0,
                    },
                  ]}
                > */}
                  {/* <View
                    style={[
                      styles.countryInput,
                      {
                        borderTopLeftRadius: 10,
                        justifyContent: "center",
                      },
                    ]}
                  >
                    <CountryFlag isoCode="ke" size={21} />
                  </View> */}
                  {/* <View style={styles.border} /> */}
                  {/* <View
                    style={[
                      styles.numberInput,
                      {
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: 10,
                      },
                    ]}
                    placeholder="Type your phone number here!"
                  >
                    <TextInput
                      style={styles.countryInput}
                      placeholder="+254"
                      onChangeText={(text) => setCountryCode(text)}
                      defaultValue={countryCode}
                    />
                    <View style={styles.border} />
                    <TextInputMask
                      type={"custom"}
                      value={number}
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                        mask: "999 999 999 999",
                      }}
                      onChangeText={(formatted, extracted) => {
                        setNumber(formatted);
                      }}
                      keyboardType={"phone-pad"}
                      ref={inputRef}
                      style={styles.numberInput}
                      placeholder="Type here your phone number!"
                      placeholderTextColor={COLORS.black}
                    />
                  </View> */}
                {/* </View> */}
                {/* <View
                  style={[
                    styles.border,
                    {
                      width: SIZES.width * 0.75,
                      height: 1,
                    },
                  ]}
                /> */}
                {/* <View
                  style={[
                    styles.numberInputBlock,
                    { borderBottomRightRadius: 10, borderBottomLeftRadius: 10 },
                  ]}
                >
                  <TextInput
                    style={styles.countryInput}
                    placeholder="+254"
                    onChangeText={(text) => setCountryCode(text)}
                    defaultValue={countryCode}
                  />
                  <View style={styles.border} />
                  <TextInputMask
                    type={"custom"}
                    value={number}
                    options={{
                      maskType: "BRL",
                      withDDD: true,
                      mask: "(999) 999 999",
                    }}
                    onChangeText={(formatted, extracted) => {
                      setNumber(formatted);
                    }}
                    keyboardType={"phone-pad"}
                    ref={inputRef}
                    style={styles.numberInput}
                    placeholder="Type here your phone number!"
                    placeholderTextColor={COLORS.black}
                  />
                </View> */}
              </View>
            </View>

            <View style={styles.buttonWrapper}>
              <TouchableOpacity onPress={() => login()}>
                <LinearGradient
                  colors={COLORS.buttonGradient}
                  start={[1, 0]}
                  end={[0, 1]}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <magic.Relayer />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: SIZES.height,
  },

  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 40,
  },

  buttonWrapper: {
    width: "100%",
    justifyContent: "flex-start",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 56,
    width: "100%",
  },

  buttonText: {
    fontSize: 20,
    lineHeight: 23.3,
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Rubik_700Bold",
  },
  orText: {
    textAlign: "center",
    padding: 15,
    color: COLORS.textBlack,
  },
  numberInputBlock: {
    flexDirection: "row",
    width: SIZES.width * 0.8,
    height: 40,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
  },
  countryInput: {
    width: SIZES.width * 0.15,
    paddingLeft: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: COLORS.white,
  },
  numberInput: {
    width: "80%",
    paddingLeft: 5,
    backgroundColor: COLORS.white,
    borderBottomRightRadius: 10,
  },
  border: {
    backgroundColor: COLORS.backgroundColor,
    width: 1,
    height: 25,
    alignSelf: "center",
  },
  countrySelectorButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    backgroundColor: "#4840BB",
  },
});
