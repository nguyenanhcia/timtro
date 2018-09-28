import {AsyncStorage} from 'react-native'
export const checkLogin = async function () {
  const isLogin = await AsyncStorage.getItem('isLogin')
  if (isLogin === null) {
    return false
  }
  return JSON.parse(isLogin)
}