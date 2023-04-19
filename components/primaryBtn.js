import { View, TouchableOpacity, Text } from 'react-native';

const PrimaryBtn = ({ title, onClick }) => {
  return (
    <View style={{ width: '100%', paddingHorizontal: 35 }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#003049',
          borderRadius: 15,
        }}
        onPress={onClick}
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
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryBtn;
