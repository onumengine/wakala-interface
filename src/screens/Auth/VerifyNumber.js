import React from "react";
import {Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS, FONTS, SIZES} from "../../consts/theme";
import ConfirmationCodeInput from "../../components/ConfirmationCodeInput";

export default function VerifyNumber({ navigation }) {
    const [code, setCode] = React.useState('')
    const [totalDuration, setTotalDuration] = React.useState(0);

    const ref = React.createRef()

    React.useEffect(() => {

        setTotalDuration(30);
        /*const decrementClock = () => {
            if(totalDuration > 0) setTotalDuration(totalDuration - 1 );
        }
        setInterval(() => {
            decrementClock()
        }, 1000)*/
    }, []);


    const _onFinishCheckingCode1 = function (isValid) {
        //alert("Yeah, nice guess!")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <View >
                        <Text style={styles.title}>
                            Verify your phone number
                        </Text>
                    </View>
                    <View style={{height: 70, marginBottom: 50}}>
                        <ConfirmationCodeInput
                            ref={ref}
                            codeLength={6}
                            compareWithCode='123456'
                            activeColor='rgba(49, 180, 4, 1)'
                            inactiveColor='rgba(49, 180, 4, 1.3)'
                            autoFocus={false}
                            ignoreCase={true}
                            keyboardType="numeric"
                            inputPosition='center'
                            size={50}
                            onFulfill={(isValid) => _onFinishCheckingCode1(isValid)}
                            containerStyle={{ width: SIZES.width * 0.8, height: 70, justifyContent: "space-around" }}
                            codeInputStyle={styles.numberInput}
                            onCodeChange={(code) => setCode(code)}
                        />
                    </View>
                </View>
                <View style={{marginBottom: 150}}>
                    <View style={{width: SIZES.width * 0.8, justifyContent: "space-around", marginTop: 30, alignContent: "center"}}>
                        <Text style={{...FONTS.body4, textAlign: "center"}}>A 6 digit code has been sent to </Text>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <Text style={{fontWeight: "bold"}}>+254 736 427 718</Text>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={{marginLeft: 10}}><Text style={{color: COLORS.primary}}>Change?</Text></TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{...FONTS.body4, textAlign: "center", marginTop: 30}}>New code available in {totalDuration.toString()}s </Text>
                </View>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate("ToC")}>
                        <LinearGradient
                            colors={COLORS.buttonGradient}
                            start={[1, 0]}
                            end={[0, 1]}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Verify</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5E5E5",
    },

    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 40,
    },

    titleWrapper: {
        width: "100%",
        marginTop: 80,
        alignItems: "center"
    },

    title: {
        ...FONTS.h1,
        textAlign: "center",
        color: "#4840BB",
        lineHeight: 28.44,
        fontFamily: "Rubik_500Medium",
        marginBottom: 10,
    },

    buttonWrapper: {
        width: "100%",
        justifyContent: "flex-start",
        marginBottom: 40
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        height: 56,
        width: "100%",
        marginBottom: 40,
    },
    numberInput: {
        ...FONTS.body1,
        color: COLORS.primary,
        backgroundColor: COLORS.white,
        height: 50,
        width: 35,
        borderRadius: 6,
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderColor: COLORS.backgroundColor
    },
    buttonText: {
        fontSize: 20,
        lineHeight: 23.3,
        textAlign: "center",
        color: "#FFF",
        fontFamily: "Rubik_700Bold",
    },
});