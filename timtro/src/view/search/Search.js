import React, {Component} from 'react'
import {View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity, FlatList} from 'react-native'
import ImageSlider from 'react-native-image-slider'
import {colors} from "../../constants/colors";
import CellQuickSearch from "./cell/CellQuickSearch";
import CellMostSearch from "./cell/CellMostSearch";

const {width, height} = Dimensions.get('window');

export default class Search extends Component {
  render() {
    const images = [
      {url: 'https://placeimg.com/640/640/nature'},
      {url: 'https://placeimg.com/640/640/people'},
      {url: 'https://placeimg.com/640/640/animals'},
      {url: 'https://placeimg.com/640/640/beer'},
    ];
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{width, height: 0.3 * height}}>
            <ImageSlider
              loopBothSides
              images={images}/>
          </View>
          <View style={{
            flex: 1,
            width,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0.25 * height
          }}>
            <View style={{
              width: 0.9 * width,
              borderRadius: 8,
              borderWidth: 0.5,
              borderColor: 'gray',
              alignItems: 'center',
              backgroundColor: colors.white,
              justifyContent: 'space-between'
            }}>
              <View style={{
                width: '90%',
                flexDirection: 'row',
                backgroundColor: colors.gray70,
                top: 10,
                height: 30,
                borderRadius: 5
              }}>
                <TouchableOpacity style={{
                  width: 40,
                  backgroundColor: colors.gray50,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text>HCM</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                  <Text>Tìm quận, tên đường</Text>

                </TouchableOpacity>

              </View>

              <View style={{height: 100, width: 0.9 * width, marginTop: 25}}>
                <FlatList
                  horizontal={true}
                  data={[1, 2, 3, 4]}
                  renderItem={({item}) => <TouchableOpacity style={{
                    marginLeft: 5,
                    width: 0.85 * width / 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                  }} onPress={() => {
                  }}>
                    <CellQuickSearch/>

                  </TouchableOpacity>}
                  keyExtractor={(item, index) => index.toString()}/>
              </View>
            </View>

            <View style={{flex: 1, width: 0.9 * width}}>
              <Text style={{marginVertical: 20, fontSize: 16}}>Xu hướng tìm kiếm</Text>
              <View style={{width, flexDirection: 'row'}}>
                <View style={{width: 0.9 * width / 3, height: 0.9 * width / 3}}>
                  <CellMostSearch/>
                </View>
                <View style={{width: 0.9 * width / 3, height: 0.9 * width / 3, marginLeft: 5}}>
                  <CellMostSearch/>
                </View>
                <View style={{width: 0.9 * width / 3, height: 0.9 * width / 3, marginLeft: 5}}>
                  <CellMostSearch/>
                </View>

              </View>

              <View style={{width, flexDirection: 'row', marginTop: 5}}>
                <View style={{width: 0.9 * width / 3, height: 0.9 * width / 3}}>
                  <CellMostSearch/>
                </View>
                <View style={{width: 0.9 * width / 3, height: 0.9 * width / 3, marginLeft: 5}}>
                  <CellMostSearch/>
                </View>
                <View style={{width: 0.9 * width / 3, height: 0.9 * width / 3, marginLeft: 5}}>
                  <CellMostSearch/>
                </View>

              </View>


              <Text style={{marginVertical: 20, fontSize: 16}}>Phòng mới</Text>
            </View>


          </View>

        </View>

      </ScrollView>
    )
  }

}