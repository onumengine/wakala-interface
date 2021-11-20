import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'
import PINInterface from "../../components/PINInterface";
import {LinearGradient} from "expo-linear-gradient";
import HeaderTitle from "../../components/HeaderTitle";

function SetPIN({navigation}) {
    const [pin, setPin] = React.useState("")
    const [title, setTitle] = React.useState("Create a PIN")
    const pinSetCallback = (value) => {
        if(pin !== "" && pin === value){
            navigation.navigate("ConnectPhone")
        }else {
            setPin(value)
            setTitle("Confirm PIN")
        }

    }
    return (
        <LinearGradient style={styles.container}
                        colors={["rgba(247, 239, 250, 1.0)", "rgba(252, 248, 237, 1.0)"]}
                        start={[1, 0]}
                        end={[1, 1]}>
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>
                    <HeaderTitle navigation={navigation} title={title} titleStyle={{alignSelf: "center", paddingTop: 80}} />
                    <PINInterface style={{width: "100%"}} callback={pinSetCallback} />
                </View>
            </SafeAreaView>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 25,
    },
});


export default SetPIN;