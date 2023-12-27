export default class StringSchema {
  constructor() {
    this.hasSpacesResult = false;
  }

  isValid(str) {
    if (typeof str === 'string') {
      if (this.hasSpacesResult === true) {
        return str.includes(' ');
      }
      return true;
    }
    return false;
  }

  hasSpaces() {
    this.hasSpacesResult = true;
    return this;
  }
}
