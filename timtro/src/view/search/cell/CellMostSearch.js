import React, {Component} from 'react'
import {View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native'
import {colors} from "../../../constants/colors";

const {width, height} = Dimensions.get('window');

export default class CellMostSearch extends Component {
  render() {
    const images = [
      require('../../../assets/images/buiding.jpg'),
      require('../../../assets/images/buiding.jpg'),
      require('../../../assets/images/buiding.jpg'),
      require('../../../assets/images/buiding.jpg'),
    ];

    const texts = [
      'Quận 1',
      'Quận 2',
      'Quận 3',
      'Quận 4',
    ];
    return (
      <View style={{flex: 1, borderRadius: 20, alignItems: 'center'}}>
        <Image style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', borderRadius: 5, width: 0.9*width/3, height: 0.9*width/3}}
                         source={images[0]} />

          <Text style={{fontSize: 13, textAlign: 'center', color: colors.white, position: 'absolute', bottom: 10}}>{texts[0]}</Text>
      </View>
    )
  }

}