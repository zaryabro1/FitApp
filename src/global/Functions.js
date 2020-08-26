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

export async function setFullBodyLevel(val) {
  orderStore.aboutMe.identity.fullBodyLevel = val;
  try {
    await AsyncStorage.setItem("fullBodyLevel", val);
    console.warn(val);

  } catch (e) {
    console.warn(e);
  }
}

export async function setAbsLevel(val) {
  orderStore.aboutMe.identity.absLevel = val;
  try {
    await AsyncStorage.setItem("absLevel", val);
    console.warn(val);

  } catch (e) {
    console.warn(e);
  }
}

export async function setButtLevel(val) {
  orderStore.aboutMe.identity.buttLevel = val;
  try {
    await AsyncStorage.setItem("buttLevel", val);
    console.warn(val);

  } catch (e) {
    console.warn(e);
  }
}

export async function setArmLevel(val) {
  orderStore.aboutMe.identity.armLevel = val;
  try {
    await AsyncStorage.setItem("armLevel", val);
    console.warn(val);

  } catch (e) {
    console.warn(e);
  }
}

export async function setLegLevel(val) {
  orderStore.aboutMe.identity.legLevel = val;
  try {
    await AsyncStorage.setItem("legLevel", val);
    console.warn(val);

  } catch (e) {
    console.warn(e);
  }
}
