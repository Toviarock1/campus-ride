import { useCallback, useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import TextInput from '../components/textInput';
import {
  Link,
  Stack,
  useRouter,
  useRootNavigation,
  useNavigation,
} from 'expo-router';
import { logo } from '../assets';
import PrimaryBtn from '../components/primaryBtn';
import SecondaryBtn from '../components/secondaryBtn';

const login = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const textInputRef = useRef(null);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [auth, setAuth] = useState(false);

  const handleChange = useCallback((e, setdata) => {
    setdata(e);
  }, []);

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      // console.log('onback');
      // Do your stuff here
      navigation.dispatch(e.data.action);
    });
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerStyle: { backgroundColor: 'white' },
          headerShadowVisible: false,
          headerLeft: () => false,
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
                Welcome Back
              </Text>
            </View>
            <TextInput
              placeholder={'E-mail'}
              value={email}
              setValue={(e) => setEmail(e)}
              keyboardType="email-address"
            />
            <View
              style={{
                marginTop: 30,
              }}
            >
              <TextInput
                placeholder={'Password'}
                value={password}
                setValue={(e) => setPassword(e)}
                secure={true}
              />
            </View>
            <View style={{ width: '100%' }}>
              <Link
                href={'/forgot-password'}
                style={{
                  fontFamily: 'POPRegular',
                  fontSize: 14,
                  color: '#9B9595',
                  paddingHorizontal: 35,
                  textAlign: 'right',
                  marginTop: 40,
                }}
              >
                Forgot password?
              </Link>
            </View>
            <View style={{ marginTop: 30 }}>
              <PrimaryBtn
                title={'Login'}
                onClick={() => {
                  if (email == 'Noble@gmail.com' && password == 'Nob') {
                    router.push('/dashboard');
                  } else {
                    alert('wrong credentials');
                  }
                }}
              />
            </View>
            <View style={{ marginTop: 17 }}>
              <SecondaryBtn
                title={'Create account'}
                onClick={() => router.push('/signup')}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;
