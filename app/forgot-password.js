import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import TextInput from '../components/textInput';
import { Link, Stack, useRouter } from 'expo-router';
import { logo } from '../assets';
import PrimaryBtn from '../components/primaryBtn';
import SecondaryBtn from '../components/secondaryBtn';

const ForgotPassword = () => {
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'flex-end',
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
                Trouble Logging in?
              </Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingHorizontal: 35,
                  fontSize: 16,
                  fontFamily: 'POPRegular',
                }}
              >
                Don’t worry it happens to the best of us Input your email or
                phone number to recover your account
              </Text>
            </View>
            <View
              style={{
                marginTop: 40,
              }}
            >
              <TextInput placeholder={'E-mail or Number'} />
            </View>

            <View style={{ marginTop: 50 }}>
              <PrimaryBtn title={'Send Code'} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
