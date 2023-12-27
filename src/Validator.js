import StringSchema from './StringSchema.js';
import FunctionSchema from './FunctionSchema.js';

export default class Validator {
  constructor() {
    this.schema = null;
  }

  string() {
    this.schema = new StringSchema();
    return this.schema;
  }

  function() {
    this.schema = new FunctionSchema();
    return this.schema;
  }
}
