import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import TextInput from '../components/textInput';
import { Stack, useRouter } from 'expo-router';
import { logo } from '../assets';
import PrimaryBtn from '../components/primaryBtn';
import SecondaryBtn from '../components/secondaryBtn';

const Signup = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({ email: '', password: '' });

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerStyle: { backgroundColor: 'white' },
          headerShadowVisible: false,
        }}
      />
      <View
        style={{
          marginTop: 20,
        }}
      >
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Image
            source={logo}
            style={{
              width: '80%',
            }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            width: '100%',
          }}
        >
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              color: '#003049',
              marginTop: 20,
              fontFamily: 'POPBold',
            }}
          >
            Create Account
          </Text>
        </View>
        <View
          style={{
            marginTop: 8,
          }}
        >
          <TextInput placeholder={'Phone Number'} />
        </View>
        <View
          style={{
            marginTop: 18,
          }}
        >
          <TextInput
            placeholder={'E-mail'}
            value={userDetails.email}
            setValue={(e) => {
              setUserDetails({ ...userDetails, email: e });
            }}
          />
        </View>
        <View
          style={{
            marginTop: 18,
          }}
        >
          <TextInput placeholder={'Password'} secure={true} />
        </View>

        <View style={{ marginTop: 60 }}>
          <PrimaryBtn title={'Create account'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
