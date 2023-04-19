import { View, TouchableOpacity, Text } from 'react-native';

const SecondaryBtn = ({ title, onClick }) => {
  return (
    <View style={{ width: '100%', paddingHorizontal: 35 }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          borderColor: '#003049',
          borderWidth: 1,
        }}
        onPress={onClick}
      >
        <Text
          style={{
            color: '#003049',
            textAlign: 'center',
            paddingVertical: 20,
            fontSize: 16,
            fontFamily: 'POPMedium',
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondaryBtn;
