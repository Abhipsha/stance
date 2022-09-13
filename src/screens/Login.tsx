import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import {facebook, google, logo} from '../assets/image';

export const Login = () => {
  return (
    <SafeAreaView style={{padding: 30, backgroundColor: '#FFF', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 30,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <AntIcon name="arrowleft" size={24} />
        </View>
        <View style={{flex: 2}}>
          <Image
            source={logo}
            style={{width: 150, height: 50}}
            resizeMode="contain"
          />
        </View>
        <View style={{flex: 1}} />
      </View>
      <View style={{flex: 1, margin: 30}}>
        <View style={{marginTop: 50}}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Sign In</Text>
        </View>
        <LinearGradient
          style={{alignItems: 'center', padding: 30, marginTop: 30}}
          colors={['#00CCCCCC', '#CC0099CC']}
          useAngle
          angleCenter={{x: 0.5, y: 0.5}}
          angle={-45}>
          <TextInput
            placeholder="Sign in with email"
            placeholderTextColor={'#000'}
            style={{
              height: 35,
              width: '80%',
              backgroundColor: '#FFF9',
              paddingHorizontal: 20,
              textAlign: 'center',
              marginTop: 20,
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#000'}
            style={{
              height: 35,
              width: '80%',
              backgroundColor: '#FFF9',
              paddingHorizontal: 20,
              textAlign: 'center',
              marginTop: 20,
            }}
          />
          <Text style={{fontSize: 16, fontWeight: '700', marginTop: 40}}>
            Sign in with
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Image
                source={google}
                style={{width: 50, height: 50, margin: 15}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={facebook}
                style={{width: 50, height: 50, margin: 15}}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 16}}>Forgot password ? / No account</Text>
        </View>
      </View>
      <View style={{margin: 40}}>
        <LinearGradient
          style={{padding: 1}}
          colors={['#00CCCCCC', '#CC0099CC']}
          useAngle
          angleCenter={{x: 0.5, y: 0.5}}
          angle={-45}>
          <View style={{backgroundColor: '#FFF'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFF',
                padding: 10,
                alignItems: 'center',
              }}>
              <Text>Log in</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};
