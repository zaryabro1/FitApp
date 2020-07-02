import Store from '../store';
import AsyncStorage from '@react-native-community/async-storage';

let {orderStore} = Store;

export async function setSex(val) {
  orderStore.aboutMe.identity.sex = val;
  try {
    await AsyncStorage.setItem("sex", val);
    console.warn(val);

  } catch (e) {
    console.warn(e);
  }
}

export async function setWeight(val){
  orderStore.aboutMe.identity.weight = val;

    try {
      await AsyncStorage.setItem("weight", val);
    } catch (e) {
      console.warn(e);
    }
  }


export async function setWeightType(val){
  orderStore.aboutMe.identity.weightType = val;
    try {
      await AsyncStorage.setItem("weightType", val);
    } catch (e) {
      console.warn(e);
    }
  }

