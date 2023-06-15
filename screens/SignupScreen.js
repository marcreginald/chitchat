import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import {CountryPicker} from "react-native-country-codes-picker";
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import COLORS from '../constants/colors';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

function ListHeaderComponent({ countries, lang, onPress }) {
    return (
      <View
        style={{
          paddingBottom: 20,
        }}
      >
        <CallingCodePicker
          selectedValue={selectedCallingCode}
          onValueChange={value => setSelectedCallingCode(value)}
          style={{
            paddingBottom: 20,
          }}
        />
        {countries?.map((country, index) => {
          return (
            <CountryButton key={index} item={country} name={country?.name?.[lang || 'en']} onPress={() => onPress(country)} />
          );
        })}
      </View>
    );
  }

const SignupScreen = () => {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+00');
    const [isPasswordShown, setIsPasswordShown] = useState('false');
    const [isChecked, setIsChecked] = useState('false');
    return(
        
       <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={{flex: 1, marginHorizontal: 22}}>
                <View style={{marginVertical: 22}}>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginVertical: 12,
                    color: COLORS.black,
                }}>
                    Create an Account
                </Text>

                <Text style={{

                }}>
                    Start ChitChatting with your friends today!
                </Text>
                </View>

                <View style={{
                    marginBottom: 12,
                }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8
                }}>
                    Email Address
                </Text>

                <View style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: 22
                }}>
                    <TextInput
                    placeholder='Enter your email address'
                    placeholderTextColor={COLORS.black}
                    keyboardType='email-address'
                    style={{
                        width: "100%"
                    }}
                    />
                </View>
                </View>

                <View style={{
                    marginBottom: 12,
                }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8
                }}>
                    Mobile Number
                </Text>

                
                <View style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: 'center',
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    paddingLeft: 22
                }}>
                
                    <TouchableOpacity onPress={() => setShow(true)}>
                    <Text style={{
                    color: COLORS.black,
                    width: "100%",
                    paddingRight: 22}}>
                    {countryCode}
                    </Text>
                    </TouchableOpacity>

                    <CountryPicker
                    show={show}
                     // when picker button press you will get the country object with dial code
                     style={{
                        countryButtonStyles: {height: 80},
                        modal: {height: 700,},
                    }}
                    pickerButtonOnPress={(item) => {
                    setCountryCode(item.dial_code);
                    setShow(false);
                    }}
                    ListHeaderComponent={ListHeaderComponent}
                    
                    />
                     <TextInput
                    placeholder='Enter your phone number'
                    placeholderTextColor={COLORS.black}
                    keyboardType='numeric'
                    style={{
                        width: "90%",
                        borderLeftWidth: 1,
                        borderBottomWidth: 0,
                        borderRightColor: COLORS.black,
                        height: "100%",
                        paddingLeft: 10

                    }}
                    />
                </View>
                </View>
                
                <View style={{
                    marginBottom: 12,
                }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8
                }}>
                    Password
                </Text>

                <View style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: 22
                }}>
                    <TextInput
                    placeholder='Enter your password'
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={true}
                    style={{
                        width: "100%"
                    }}
                    />

                    <TouchableOpacity 
                    onPress={()=>setIsPasswordShown(!isPasswordShown)}
                    style={{
                        position: "absolute",
                        right: 12
                    }}>
                    {
                        isPasswordShown == true ? (
                            <Ionicons name="eye-off" size={24} color={COLORS.black}
                        />
                        ) : (
                            <Ionicons name="eye" size={24} color={COLORS.black}
                        />
                        )
                    }
                       
                    </TouchableOpacity>
                </View>
                </View>

                    <View style={{
                        flexDirection: 'row',
                        marginVertical: 6
                    }}>
                    <Checkbox
                        style={{marginRight: 8,}}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.black : undefined}
                    />
                    <Text>I agree to the terms and conditions</Text>
                    </View>

                    <Button
                        title="Sign Up"
                        filled
                        style={
                            {
                                marginTop: 18,
                                marginBottom: 4,
                            }
                        }
                    />

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 20
                    }}>
                        <View style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}/>
                        
                        <Text style={{fontSize: 14}}>Or Sing up with </Text>
                        <View style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}/>
                    </View>
            </View>
       </SafeAreaView>
    )
}

export default SignupScreen;