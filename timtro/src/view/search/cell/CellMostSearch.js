import React, {Component} from 'react'
import {View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native'
import {colors} from "../../../constants/colors";

const {width, height} = Dimensions.get('window');

export default class CellMostSearch extends Component {
  render() {
    const {data} = this.props
    
    return (
      <View style={{flex: 1, borderRadius: 20, alignItems: 'center'}}>
        <Image style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', borderRadius: 5, width: 0.9*width/3, height: 0.9*width/3}}
                         source={data.image} />

          <Text style={{fontSize: 13, textAlign: 'center', color: colors.white, position: 'absolute', bottom: 5, fontWeight: 'bold'}}>{data.name}</Text>
      </View>
    )
  }

}