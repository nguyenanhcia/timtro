import React, {Component} from 'react'
import {View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native'
import {colors} from "../../../constants/colors";

const {width, height} = Dimensions.get('window');

export default class CellNewRoomDetail extends Component {
  render() {
    const {data} = this.props
    return (
      <View style={{flex: 1, width, alignItems: 'center',flexDirection: 'row'}}>
        <Image source={data.image} style={{width: 100, height: '100%'}} resizeMode={'contain'}/>

        <View style={{flex: 1, marginLeft: 5, justifyContent: 'space-between'}}>
          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 13}}>{'TÌM Ở GHÉP.' + data.number}</Text>
            <Text style={{fontSize: 12}}>{data.price}</Text>
          </View>

          <Text style={{marginTop: 10, fontWeight: 'bold'}}>{data.title}</Text>

          <Text style={{marginVertical: 10, fontSize: 12}}>{data.address}</Text>

          <View style={{width: '100%', backgroundColor: 'black', height: 0.5}}/>
        </View>
      </View>
    )
  }

}