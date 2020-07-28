class MongooseErrorHandler{
  static getErrorMessage(err) {
    return Object.values(err.errors).map((obj) => {
      return obj.properties.message
    });
  }
}

module.exports = MongooseErrorHandler