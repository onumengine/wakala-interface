import React, {Fragment, useState, useEffect} from "react";
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
import {AntDesign} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

import {SIZES} from "../consts/theme";
import CountryInfo from "../utils/CountryInfo";
import {connect, useDispatch} from "react-redux";
import ContractMethods from "../utils/celo-integration/ContractMethods";


const CustomDrawer = (props) => {
    const [phone, setPhone] = useState("+254 706 427718");
    const [flag, setFlag] = useState("");
    const [loading, setloading] = useState(true);
    const [KSH, setKSH] = useState("0");
    const [cUSD, setCUSD] = useState("0");
    const dispatch = useDispatch();

    const [user, setUser] = React.useState("");


    function pickFlag() {
        const phone_split = phone.split(" ");
        const dial_code = phone_split[0];

        CountryInfo.forEach((element) => {
            if (element.dial_code === dial_code) {
                setFlag(element.flag);
            }
        });
    }

    const magic = props.magic;

    useEffect(() => {
        pickFlag();
        magic.user.getMetadata().then(userMetadata => {
            let {publicAddress} = userMetadata
            dispatch({type: "UPDATE_USER_METADATA", value: {userMetadata: userMetadata}})
            const contractMethods = new ContractMethods(magic)
            contractMethods.web3.eth.getBalance(publicAddress).then(balance => {
                let amount = contractMethods.web3.utils.fromWei(balance)
                setCUSD(amount)
                setKSH((amount*10).toString())
                setloading(false)
            }, error => {
                alert(error)
                setloading(false)
            })
        }, error => {
            alert(error)
            setloading(false)
        })


    }, [phone]);

    // Logout of Magic session
    function logout() {
        magic.user.logout().then(() => {
            setUser("");
            dispatch({type: 'LOGOUT', payload: {}})
        })
    }

    return (
        <Fragment>
            <SafeAreaView style={{flex: 0}}/>

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
                            <View style={styles.img}/>
                            <View style={styles.phoneStyle}>
                                <Text style={styles.smallText}>{flag} </Text>
                                <Text style={styles.smallText}>{phone}</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                            <AntDesign name="close" size={32} color="black"/>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <View style={stylesBalance.balance}>
                    {!loading?
                        <><View>
                            <Text style={stylesBalance.text}>Current Balance</Text>
                            <Text style={stylesBalance.ksh}>Ksh {KSH}</Text>
                        </View>
                            <Text style={stylesBalance.cusd}>{cUSD} cUSD</Text>
                    </> :
                        <>
                            <Text style={stylesBalance.ksh}>Loading...</Text>
                    </>}


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
                        />
                    </View>
                </DrawerContentScrollView>

                <View style={{padding: 20}}>
                    <Text style={styles.smallText}>Version 2.0.1</Text>
                </View>
                <magic.Relayer/>
            </SafeAreaView>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        magic: state.magic,
        userMetadata: state.userMetadata
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch: async (action) => {
            await dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);

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
        shadowOffset: {width: 0, height: 2.5},
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

