const { Magic } = require('@magic-sdk/react-native');

// magic sdk instance
const magicClient = new Magic('pk_live_04940F0EFB35EAE9'); 


function App() {
    return (
      <View>
        {/* Remember to render the `Relayer` component into your app! */}
        <m.Relayer />
      </View>
    );
  }
  
  const DID = await magicClient.auth.loginWithSMS({
    phoneNumber: '+254726111690',//pass the phone input value to get otp sms
  });
  // Consume decentralized identity (DID)
  