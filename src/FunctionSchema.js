export default class FunctionSchema {
  constructor() {
    this.expectResult = null;
    this.callWithContext = null;
  }

  isValid(func) {
    if (typeof func === 'function') {
      if (this.expectResult !== null) {
        return this.expectResult === func.call(this.callWithContext);
      }
      return true;
    }
    return false;
  }

  expect(expectedValue) {
    this.expectResult = expectedValue;
    return this;
  }

  callWith(context) {
    this.callWithContext = context;
    return this;
  }
}
