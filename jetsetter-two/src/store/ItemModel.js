import uniqueId from 'lodash/uniqueId';
import { observable, action, computed } from 'mobx';

export default class Item {
  id = uniqueId();
  list;
  @observable value = '';
  @observable packed = false;

  constructor( value, list ) {
    this.value = value;
    this.list = list;
  }

  @computed
  get unpacked() {
    return !this.packed;
  }

  @action.bound 
  toggle() {
    return (this.packed = !this.packed);
  }

  @action.bound 
  remove() {
    this.list.removeItem(this);
  }
}
