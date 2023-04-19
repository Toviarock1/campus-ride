import { useState } from 'react';
import { useRouter, Stack } from 'expo-router';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { logo } from '../assets';

const Home = () => {
  const router = useRouter();
  const [nextPage, setNextPage] = useState(false);

  setTimeout(() => {
    router.push('/login');
  }, 2000);

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
          padding: 50,
          marginTop: 70,
        }}
      >
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Image source={logo} />
        </View>
        <View
          style={{
            width: '100%',
          }}
        >
          <Text
            style={{
              fontSize: 40,
              textAlign: 'center',
              color: '#003049',
              marginTop: 20,
              fontFamily: 'POPBold',
            }}
          >
            Campus Ride
          </Text>
        </View>
        <View>
          <ActivityIndicator />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
