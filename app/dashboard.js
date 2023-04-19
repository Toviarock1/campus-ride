import { useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';
import { CustomInput, PrimaryBtn } from './../components';
import topbar from './../assets/topbar.jpg';
import car1 from './../assets/car1.png';
import visa from './../assets/visa.png';
import stroke from './../assets/stroke.png';
import back from './../assets/back.jpg';
import starttrip from './../assets/starttrip.png';
import avater from './../assets/Avatar.png';
import message from './../assets/message.png';
import x from './../assets/x.png';
import bookmark from './../assets/bookmark.png';
import wallet from './../assets/wallet.png';
import star from './../assets/star.png';
import phone from './../assets/phone.png';
import box from './../assets/box.png';
import logout from './../assets/exit.png';

export default function Dashboard() {
  const [Search, setSearch] = useState(false);
  const [startTrip, setStartTrip] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const { width, height } = Dimensions.get('window');
  const availableCars = [car1, car1, car1];
  const menu = [
    { icon: message, text: 'Messages', link: '' },
    { icon: bookmark, text: 'Driving History', link: '' },
    { icon: wallet, text: 'Wallet', link: '/wallet' },
    { icon: star, text: 'Discount', link: '' },
    { icon: phone, text: 'Support', link: '' },
    { icon: box, text: 'Setting', link: '' },
    { icon: logout, text: 'Log Out', link: '/login' },
  ];

  const router = useRouter();

  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.02;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const INITIAL_POSITION = {
    latitude: 8.98138,
    longitude: 7.17949,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerStyle: { backgroundColor: '#00000000' },
          headerShadowVisible: false,
          headerLeft: () =>
            openNav ? (
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderRadius: 100,
                }}
                onPress={() => setOpenNav(false)}
              >
                <Image
                  source={x}
                  style={{
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 100,
                }}
                onPress={() => {
                  Search ? setSearch(false) : setOpenNav(true);
                }}
              >
                <Image
                  source={Search ? back : topbar}
                  style={{
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            ),
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: openNav ? 'rgba(52, 52, 52, 0.8)' : 'transparent',
          }}
        >
          {openNav && (
            <View
              style={{
                backgroundColor: 'white',
                height: '100%',
                width: '80%',
              }}
            >
              <View
                style={{
                  width: 200,
                  height: 200,
                  backgroundColor: '#003049',
                  top: 0,
                  height: 210,
                  width: '100%',
                  paddingHorizontal: 20,
                }}
              >
                <SafeAreaView>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 20,
                      alignItems: 'center',
                      marginTop: Platform.OS == 'ios' ? 30 : 100,
                    }}
                  >
                    <Image source={avater} />
                    <View>
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'white',
                          fontWeight: 600,
                        }}
                      >
                        Achebe, Noble
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'rgba(255, 255, 255, 0.48)',
                          fontWeight: 600,
                        }}
                      >
                        ⭐️ 4,8
                      </Text>
                    </View>
                  </View>
                </SafeAreaView>
              </View>
              <FlatList
                data={menu}
                renderItem={({ item }) => (
                  <View
                    style={{
                      paddingHorizontal: 30,
                      flexDirection: 'row',
                      gap: 10,
                      width: '80%',
                      alignItems: 'center',
                      marginTop: 30,
                    }}
                  >
                    <Image source={item.icon} />
                    <View>
                      <Link href={item.link} style={{ fontSize: 20 }}>
                        {item.text}
                      </Link>
                    </View>
                  </View>
                )}
              />
            </View>
          )}

          <View style={styles.container}>
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              initialRegion={INITIAL_POSITION}
            />
          </View>

          {Search ? (
            startTrip ? (
              <View
                style={{
                  flex: 1,
                  height: 419,
                  backgroundColor: 'white',
                  width: '100%',
                  bottom: 0,
                  borderTopEndRadius: 30,
                  borderTopStartRadius: 30,
                }}
              >
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 40,
                  }}
                >
                  <Image source={starttrip} />
                </View>
                <View style={{ marginTop: 30 }}>
                  <PrimaryBtn
                    title={"Let's hit the road"}
                    onClick={() => {
                      setSearch(false);
                      setStartTrip(false);
                      router.push('/rideandpay');
                    }}
                  />
                </View>
              </View>
            ) : (
              <View
                style={{
                  height: 500,
                  backgroundColor: 'white',
                  width: '100%',
                  bottom: 0,
                  borderTopEndRadius: 30,
                  borderTopStartRadius: 30,
                }}
              >
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
                      marginTop: 30,
                      fontFamily: 'POPBold',
                    }}
                  >
                    Cars in Your area
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                  }}
                >
                  <FlatList
                    style={{
                      paddingBottom: 10,
                    }}
                    data={availableCars}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <View
                        style={{
                          padding: 7,
                          flex: 1,
                        }}
                      >
                        <Image source={item} />
                      </View>
                    )}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: '#F8F8F8',
                    marginHorizontal: 35,
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 25,
                    borderRadius: 15,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                    }}
                  >
                    <Image source={visa} />
                  </View>

                  <View
                    style={{
                      flex: 2,
                    }}
                  >
                    <Text>**** 1234</Text>
                  </View>
                  <View>
                    <Image source={stroke} />
                  </View>
                </View>
                <View style={{ marginTop: 30 }}>
                  <PrimaryBtn
                    title={'Go next'}
                    onClick={() => setStartTrip(true)}
                  />
                </View>
              </View>
            )
          ) : (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View
                style={{
                  flex: 1,
                  height: 351,
                  backgroundColor: 'white',
                  width: '100%',
                  bottom: 0,
                  borderTopEndRadius: 30,
                  borderTopStartRadius: 30,
                }}
              >
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
                    Where are you?
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 0,
                  }}
                >
                  <CustomInput placeholder={'Your Location'} />
                </View>
                <View
                  style={{
                    marginTop: 20,
                  }}
                >
                  <CustomInput placeholder={'Number of people'} />
                </View>
                <View style={{ marginTop: 50 }}>
                  <PrimaryBtn
                    title={'Search cars'}
                    onClick={() => setSearch(true)}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
