import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Dimensions} from 'react-native'
import ImageSlider from 'react-native-image-slider'
import {colors} from "../../constants/colors";

const {width, height} = Dimensions.get('window');

export default class SignIn extends Component {
  render() {
    const images = [
      {url: 'https://placeimg.com/640/640/nature'},
      {url: 'https://placeimg.com/640/640/people'},
      {url: 'https://placeimg.com/640/640/animals'},
      {url: 'https://placeimg.com/640/640/beer'},
    ];
    return (
      <View style={{flex: 1}}>
        <ImageSlider
          loopBothSides
          images={images}/>

        <View style={{position: 'absolute', bottom: 50, width, justifyContent: 'center', alignItems: 'center'}}>

          <TouchableOpacity style={{
            width: 0.8 * width,
            height: 50,
            backgroundColor: colors.facebook,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }} onPress={() => {
            this.props.navigation.navigate('Screen_Login')
          }}>
            <Text style={{color: colors.white}}>ĐĂNG NHẬP BẰNG FACEBOOK</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            width: 0.8 * width,
            height: 50,
            backgroundColor: colors.google,
            borderRadius: 10,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }} onPress={() => {
            this.props.navigation.navigate('Screen_Login')
          }}>

            <Text style={{color: colors.white}}>ĐĂNG NHẬP BẰNG GOOGLE</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}