import {observable,action} from 'mobx'
// import {getCurrentDate} from '../globals/functions';

class orderStore {

  @observable  aboutMe = {
    identity:{
     sex: '',
     weight: 0,
     weightType: '',
     fullBodyLevel: '',
     absLevel: '',
     buttLevel: '',
     armLevel: '',
     legLevel: '',
    }
  };


  @observable splash = null;
  @observable plans = {};
  @observable locale = 'ur';
  @observable tabLoaded = false;
  @observable clicked = false;

  setClicked(clicked){
    this.clicked = clicked;
  }
  setTabLoaded(tabLoaded){
    this.tabLoaded = tabLoaded;
  }

}


const store = new orderStore();

export default store;
