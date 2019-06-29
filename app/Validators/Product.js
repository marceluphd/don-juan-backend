'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Product extends BaseValidator {
  get rules () {
    return {
      name: 'required',
      description: 'required',
      time: 'required',
      image: 'required|url'
    }
  }
}

module.exports = Product
