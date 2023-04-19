import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import TextInput from '../components/textInput';
import { Link, Stack, useRouter } from 'expo-router';
import { logo } from '../assets';
import PrimaryBtn from '../components/primaryBtn';
import SecondaryBtn from '../components/secondaryBtn';
import circle from './../assets/circle.png';
import group from './../assets/group.png';
import warning from './../assets/Vector.png';

const RideAndPay = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({ email: '', password: '' });

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
      <View
        style={{
          marginTop: 10,
        }}
      >
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Image
            source={circle}
            style={{
              width: '80%',
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Image
            source={group}
            style={{
              width: '80%',
            }}
          />
        </View>

        <View style={{ marginTop: 30, flexDirection: 'row' }}>
          <View style={{ width: '70%', paddingHorizontal: 35 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#003049',
                borderRadius: 15,
              }}
              onPress={() => router.push('/success')}
            >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  paddingVertical: 20,
                  fontSize: 16,
                  fontFamily: 'POPMedium',
                }}
              >
                End the Ride and Pay
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: '40%', paddingRight: 35 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FC6949',
                borderRadius: 15,
                marginRight: 35,
                height: 60,
                flex: 1,
              }}
              onPress={() => {}}
            >
              <View
                style={{
                  width: '100%',
                  // flexDirection: 'row',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  flex: 1,
                  // paddingTop: 10,
                  paddingHorizontal: Platform.OS == 'ios' ? 35 : 27,
                }}
              >
                <Image source={warning} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RideAndPay;
