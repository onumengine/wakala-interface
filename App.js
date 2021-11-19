import "node-libs-react-native/globals";
import * as React from "react";
import "./global";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import { DMSans_700Bold, DMSans_400Regular } from "@expo-google-fonts/dm-sans";

import OnboardingScreen from "./src/screens/Onboarding";
import HomeScreen from "./src/screens/Home";
import SignUpScreen from "./src/screens/Auth";
import CustomDrawer from "./src/components/CustomDrawer";
import { COLORS, SIZES } from "./src/consts/theme";
import VerifyNumber from "./src/screens/Auth/VerifyNumber";
import ToC from "./src/screens/Auth/ToC";
import AccountAddress from "./src/screens/Settings/AccountAddress";
import PinDoNotMatch from "./src/screens/Settings/PinDoNotMatch";
import ContactSupportScreen from "./src/screens/Help/ContactSupportScreen";
import PinSuccessScreen from "./src/screens/Settings/PinSuccessScreen";
import RecoveryPhrase from "./src/screens/Settings/RecoveryPhrase";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";
import HelpScreen from "./src/screens/Help/HelpScreen";
import ResetAccountScreen from "./src/screens/Settings/ResetAccountScreen";
import SelectCurrencyScreen from "./src/screens/Settings/SelectCurrencyScreen";
import ContactScreen from "./src/screens/Help/ContactScreen";

import NavHeader from "./src/components/NavHeader";
import SetPIN from "./src/screens/Auth/SetPIN";
import ConnectPhone from "./src/screens/Auth/ConnectPhone";
import PhoneVerificationLoader from "./src/screens/Auth/PhoneVerification";
import VerifyCeloCodes from "./src/screens/Auth/VerifyCeloCodes";

import SelectOperation from "./src/screens/PerformRequest/SelectOperation";
import SelectPaymentMethod from "./src/screens/PerformRequest/SelectPaymentMethod";
import AddFunds from "./src/screens/PerformRequest/AddFunds";
import ConfirmFunds from "./src/screens/PerformRequest/ConfirmFunds";
import ConfirmRequest from "./src/screens/PerformRequest/ConfirmRequest";
import Success from "./src/components/Success";

import AcceptRequest from "./src/screens/FulfillRequest/AcceptRequest";
import ConfirmPayment from "./src/screens/FulfillRequest/ConfirmPayment";

import CardInfo from "./src/screens/Governance/CardInfo";
import Join from "./src/screens/Governance/Join";

import Rate from "./src/components/Rate";

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

LogBox.ignoreLogs([
  "Warning: The provided value 'moz",
  "Warning: The provided value 'ms-stream",
]);

const DrawerNav = () => {
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

const App = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    DMSans_700Bold,
    DMSans_400Regular,
  });

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const handleSignIn = () => {
    // TODO implement real sign in mechanism
    setIsAuthenticated(true);
  };
  const handleSignOut = () => {
    // TODO implement real sign in mechanism
    setIsAuthenticated(false);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="Landing" component={OnboardingScreen} />
          <RootStack.Screen name="Signup">
            {(props) => <SignUpScreen {...props} onSignIn={handleSignIn} />}
          </RootStack.Screen>
          <RootStack.Screen name="VerifyNumber" component={VerifyNumber} />
          <RootStack.Screen name="ToC">
            {(props) => <ToC {...props} onSignIn={handleSignIn} />}
          </RootStack.Screen>
          <RootStack.Screen name="RecoveryPhrase" component={RecoveryPhrase} />
          <RootStack.Screen name="Home Screen" component={HomeScreen} />
          <RootStack.Screen name="PinDoNotMatch" component={PinDoNotMatch} />
          <RootStack.Screen name="Account Address" component={AccountAddress} />
          <RootStack.Screen
            name="ResetAccount"
            component={ResetAccountScreen}
          />
          <RootStack.Screen name="SetPIN" component={SetPIN} />
          <RootStack.Screen name="ConnectPhone" component={ConnectPhone} />
          <RootStack.Screen
            name="PhoneVerificationLoader"
            component={PhoneVerificationLoader}
          />
          <RootStack.Screen
            name="VerifyCeloCodes"
            component={VerifyCeloCodes}
          />
          <RootStack.Screen name="Drawer Nav" component={DrawerNav} />
          <RootStack.Screen
            name="Select Operation"
            component={SelectOperation}
          />
          <RootStack.Screen
            name="Select Payment Method"
            component={SelectPaymentMethod}
          />
          <RootStack.Screen name="Add Funds" component={AddFunds} />
          <RootStack.Screen name="Confirm Funds" component={ConfirmFunds} />
          <RootStack.Screen name="Confirm Request" component={ConfirmRequest} />
          <RootStack.Screen name="Accept Request" component={AcceptRequest} />
          <RootStack.Screen name="Confirm Payment" component={ConfirmPayment} />
          <RootStack.Screen name="Success" component={Success} />
          <RootStack.Screen name="Rate" component={Rate} />

          <RootStack.Screen name="Join" component={Join} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
