import { View, TextInput, KeyboardAvoidingView } from 'react-native';

const CustomInput = ({
  placeholder,
  value,
  setValue,
  keyboardType,
  secure = false,
  ref,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ padding: 30, flex: 1 }}>
        <TextInput
          style={{
            backgroundColor: '#F8F8F8',
            height: 61,
            borderRadius: 20,
            paddingHorizontal: 35,
            width: '100%',
            fontFamily: 'POPRegular',
          }}
          value={value}
          onChangeText={setValue}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={'#B4B4B4'}
          secureTextEntry={secure}
          ref={ref}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CustomInput;
