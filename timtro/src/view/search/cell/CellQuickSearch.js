import React, {Component} from 'react'
import {View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity, Image} from 'react-native'
import {colors} from "../../../constants/colors";

const {width, height} = Dimensions.get('window');

export default class CellQuickSearch extends Component {
  render() {
    const images = [
      require('../../../assets/images/quick_search.png'),
      require('../../../assets/images/quick_search.png'),
      require('../../../assets/images/quick_search.png'),
      require('../../../assets/images/quick_search.png'),
    ];

    const texts = [
      'Tìm phòng gấp',
      'Tìm bạn ở ghép',
      'Không chung chủ',
      'Đăng phòng dễ',
    ];
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: 50, height: 50, backgroundColor: colors.yellowGray, borderRadius: 20, padding: 5}}>
          <Image source={images[0]} sizeMode={'covert'} style={{width: 40, height: 40}}/>
        </View>
        <Text style={{fontSize: 13, textAlign: 'center', marginTop: 5}}>{texts[0]}</Text>
      </View>
    )
  }

}