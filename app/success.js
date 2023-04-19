import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import TextInput from '../components/textInput';
import { Link, Stack, useRouter } from 'expo-router';
import { logo } from '../assets';
import PrimaryBtn from '../components/primaryBtn';
import SecondaryBtn from '../components/secondaryBtn';
import circle from './../assets/circle.png';
import group from './../assets/group.png';
import warning from './../assets/Vector.png';
import confirm from './../assets/confirmed.png';
import driving from './../assets/drivinghistory.png';

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
            source={confirm}
            style={{
              width: '80%',
            }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'POPMedium',
              textAlign: 'center',
              marginTop: 30,
            }}
          >
            Thank you!
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'POPRegular',
              textAlign: 'center',
              marginTop: 10,
            }}
          >
            We hope you enjoyed the ride
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Image
            source={driving}
            style={{
              width: '80%',
            }}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <PrimaryBtn
            title={'Close'}
            onClick={() => router.push('/dashboard')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RideAndPay;
