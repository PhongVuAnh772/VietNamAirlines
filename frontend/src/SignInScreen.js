import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import bg from './assets/bg-signIn.jpg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import banner from './assets/bannerSignIn.jpg.png';
import DropDownPicker from 'react-native-dropdown-picker';
import logo from './assets/logo.png';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SignInScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Số thẻ hội viên', value: 'accountID'},
    {label: 'Email', value: 'email'},
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.bgBackgroundContainer}>
        <Image source={bg} style={styles.bgImage} />
      </View>
      <View style={styles.headerContainer}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={logo} style={styles.logoImage} />
        </View>
      </View>
      <KeyboardAvoidingView
        style={styles.contentInput}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <Image source={banner} style={styles.bannerImage} />
            <View style={[styles.card, styles.elevation]}>
              <View style={styles.inputFormatContainer}>
                <Text style={styles.label}>Đăng nhập bằng</Text>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="Chọn"
                  placeholderStyle={{fontWeight: 'bold', fontSize: 15}}
                  style={{
                    marginVertical: 5,
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'gray',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    fontWeight: 'bold',
                  }}
                  arrowStyle={{fontWeight: 'bold'}}
                />
              </View>
              <View style={styles.inputFormatContainer}>
                <Text style={styles.label}>Số thẻ hội viên</Text>
                <TextInput
                  style={styles.input}
                  placeholder="useless placeholder"
                />
              </View>
              <View style={styles.inputFormatContainer}>
                <Text style={styles.label}>Mật khẩu</Text>
                <TextInput
                  style={styles.input}
                  placeholder="useless placeholder"
                />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('QRgenerator')}
                style={styles.touchableOpacity}>
                <Text style={styles.label}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('QRgenerator')}
              style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Quên mật khẩu?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('QRgenerator')}
              style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Quên mật khẩu?</Text>
            </TouchableOpacity>
            <Text style={styles.otherText}>
              Thông tin chương trinh bông sen vàng --{'>'}
            </Text>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  bgBackgroundContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '50%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: '5%',
  },
  bannerImage: {
    width: 130,
    height: 100,
    resizeMode: 'contain',
  },
  logoImage: {
    width: 250,
    height: 50,
    resizeMode: 'cover',
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 17,
    color: 'black',
    fontWeight: '500',
  },
  textTouchableOpacity: {
    paddingLeft: 5,
    color: 'rgb(64, 132, 96)',
    fontSize: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    width: '90%',
    marginVertical: 20,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  elevation: {
    elevation: 10,
    shadowColor: 'rgb(57, 51, 45)',

    alignItems: 'center',
  },
  contentInput: {
    width: '100%',
    height: screenHeight * 1,
    paddingTop: screenHeight * 0.15,
    alignItems: 'center',
  },
  inputFormatContainer: {
    width: '100%',
    paddingVertical: 5,
  },
  label: {
    color: 'rgb(168, 168, 168)',
    fontSize: 13,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(243, 243, 243)',
    width: '100%',
    height: 40,
  },
  submitButton: {
    width: '90%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  },
  submitButtonText: {
    fontSize: 15,
    color: 'black',
  },
  otherText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 10,
  },
});
