import "node-libs-react-native/globals";
import * as React from "react";
import "./global";
import { LogBox,
    // Expo workaround... will be removed in build
  AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AppLoading from "expo-app-loading";
// Expo workaround... will be used in build
//import AsyncStorage from '@react-native-async-storage/async-storage';
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
import SignUpScreen from "./src/screens/Auth";
import VerifyNumber from "./src/screens/Auth/VerifyNumber";
import ToC from "./src/screens/Auth/ToC";
import AccountAddress from "./src/screens/Settings/AccountAddress";
import PinDoNotMatch from "./src/screens/Settings/PinDoNotMatch";
import RecoveryPhrase from "./src/screens/Settings/RecoveryPhrase";
import ResetAccountScreen from "./src/screens/Settings/ResetAccountScreen";

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

import Join from "./src/screens/Governance/Join";

import Rate from "./src/components/Rate";
import DrawerNav from "./src/components/DrawerNav";
import globalStore from "./src/redux/GlobalStore";


const store = createStore(globalStore);


const RootStack = createStackNavigator();

LogBox.ignoreLogs([
  "Warning: The provided value 'moz",
  "Warning: The provided value 'ms-stream",
]);


const loadAppSession = async () => {
  try {
    let user = await AsyncStorage.getItem('user')
    let data = JSON.parse(user)
    let action = {type: "INIT", value: data}
    store.dispatch(action)
    return true
  } catch (err) {
    console.log(err)
  }
}

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

  let [isReady, setReady] = React.useState(false)
  if (!isReady || !fontsLoaded) {
    return <AppLoading startAsync={loadAppSession}
                       onFinish={() => setReady(true)}
                       onError={console.warn}
                       autoHideSplash={true}
    />;
  } else {
    return (
        <Provider store={store}>
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
              <RootStack.Screen name="SetPIN" component={SetPIN} />
              <RootStack.Screen name="ConnectPhone" component={ConnectPhone} />
              <RootStack.Screen name="PhoneVerificationLoader" component={PhoneVerificationLoader}/>
              <RootStack.Screen name="VerifyCeloCodes" component={VerifyCeloCodes}/>


              <RootStack.Screen name="RecoveryPhrase" component={RecoveryPhrase} />
              <RootStack.Screen name="PinDoNotMatch" component={PinDoNotMatch} />
              <RootStack.Screen name="Account Address" component={AccountAddress} />
              <RootStack.Screen name="ResetAccount" component={ResetAccountScreen}/>
              <RootStack.Screen name="Drawer Nav" component={DrawerNav} />
              <RootStack.Screen name="Select Operation" component={SelectOperation}/>
              <RootStack.Screen name="Select Payment Method" component={SelectPaymentMethod} />
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
        </Provider>
    );
  }
};

export default App;
