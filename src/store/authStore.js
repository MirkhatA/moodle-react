import {makeAutoObservable} from 'mobx';

class AuthStore {
  message = '';

  constructor() {
    makeAutoObservable(this);
  }

  setMessage(message) {
    this.message = message;
  }

  setSessionExpired(message) {
    this.message = message;
  }
}

export default new AuthStore();
