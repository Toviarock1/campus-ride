import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import TextInput from '../components/textInput';
import { Link, Stack, useRouter } from 'expo-router';
import { logo } from '../assets';
import PrimaryBtn from '../components/primaryBtn';
import SecondaryBtn from '../components/secondaryBtn';
import back from './../assets/back.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import card from './../assets/card.png';
import transaction from './../assets/Transaction.png';
import CustomInput from '../components/textInput';
import notrans from './../assets/notrans.png';

const Wallet = () => {
  const router = useRouter();
  const [addCard, setaddCard] = useState(false);
  const trans = [transaction, transaction, transaction];

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: 'Wallet',
          headerStyle: { backgroundColor: 'white' },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Image source={back} />
            </TouchableOpacity>
          ),
        }}
      />
      {!addCard ? (
        <>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <View style={{ width: '100%', alignItems: 'center' }}>
              <Image
                source={card}
                style={{
                  width: '80%',
                }}
                resizeMode="contain"
              />
            </View>

            <View style={{ marginTop: 30 }}>
              <PrimaryBtn
                title={'Add New Card'}
                onClick={() => setaddCard(true)}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 35,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#191A23',
                fontFamily: 'POPMedium',
                fontWeight: 600,
              }}
            >
              Recent Transactions
            </Text>
          </View>
          <View>
            <FlatList
              data={trans}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 20,
                  }}
                >
                  <Image source={item} />
                </View>
              )}
            />
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <View>
              <View
                style={{
                  paddingHorizontal: 39,
                  marginBottom: -20,
                }}
              >
                <Text
                  style={{
                    color: '#808080',
                  }}
                >
                  Card Holder
                </Text>
              </View>
              <CustomInput placeholder={'Card Holder Name'} />
            </View>
            <View>
              <View
                style={{
                  paddingHorizontal: 39,
                  marginBottom: -20,
                  paddingTop: 40,
                }}
              >
                <Text
                  style={{
                    color: '#808080',
                  }}
                >
                  Card Number
                </Text>
              </View>
              <CustomInput placeholder={'**** **** **** ****'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 30,
              }}
            >
              <View
                style={{
                  width: '60%',
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 39,
                    marginBottom: -20,
                    paddingTop: 40,
                  }}
                >
                  <Text
                    style={{
                      color: '#808080',
                    }}
                  >
                    Date Expire
                  </Text>
                </View>
                <CustomInput placeholder={'**/****'} />
              </View>
              <View
                style={{
                  width: '40%',
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 39,
                    marginBottom: -20,
                    paddingTop: 40,
                  }}
                >
                  <Text
                    style={{
                      color: '#808080',
                    }}
                  >
                    CVV
                  </Text>
                </View>
                <CustomInput placeholder={'***'} />
              </View>
            </View>

            <View style={{ marginTop: 30 }}>
              <PrimaryBtn
                title={'Add Card'}
                onClick={() => alert('sorry we are under maintenance')}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 35,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#191A23',
                fontFamily: 'POPMedium',
                fontWeight: 600,
              }}
            >
              Recent Transactions
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 100,
            }}
          >
            <Image source={notrans} />
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: '#BFBFBF',
              }}
            >
              No transactions found
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Wallet;
