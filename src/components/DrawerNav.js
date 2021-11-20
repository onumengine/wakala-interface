import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import {COLORS, SIZES} from "../consts/theme";
import CustomDrawer from "./CustomDrawer";
import HomeScreen from "../screens/Home";
import PinSuccessScreen from "../screens/Settings/PinSuccessScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import HelpScreen from "../screens/Help/HelpScreen";
import ContactScreen from "../screens/Help/ContactScreen";
import SelectCurrencyScreen from "../screens/Settings/SelectCurrencyScreen";
import AccountAddress from "../screens/Settings/AccountAddress";
import PinDoNotMatch from "../screens/Settings/PinDoNotMatch";
import ContactSupportScreen from "../screens/Help/ContactSupportScreen";
import CardInfo from "../screens/Governance/CardInfo";



const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: "front",
                drawerActiveTintColor: COLORS.primary,
                drawerActiveBackgroundColor: "#F5F5F5",
                drawerInactiveTintColor: COLORS.primary,
                drawerInactiveBackgroundColor: "#F5F5F5",
                drawerStyle: {
                    width: SIZES.width * 0.7,
                },
                drawerItemStyle: {
                    borderTopColor: "#444444",
                    borderTopWidth: 0.25,
                    borderBottomColor: "#444444",
                    borderBottomWidth: 0.25,
                    paddingVertical: 5,
                    paddingHorizontal: 30,
                    marginBottom: 0,
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                },
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Home Screen" component={HomeScreen} />
            <Drawer.Screen name="PinSuccess" component={PinSuccessScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="HelpScreen" component={HelpScreen} />
            <Drawer.Screen name="Contact" component={ContactScreen} />
            <Drawer.Screen name="SelectCurrency" component={SelectCurrencyScreen} />
            <Drawer.Screen name="Account Address" component={AccountAddress} />
            <Drawer.Screen name="Pin" component={PinDoNotMatch} />
            <Drawer.Screen name="Support" component={ContactSupportScreen} />
            <Drawer.Screen name="Governance" component={CardInfo} />
        </Drawer.Navigator>
    );
};