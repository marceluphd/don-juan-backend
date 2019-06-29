'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Order extends BaseValidator {
  get rules () {
    return {
      zip_code: 'required',
      street: 'required',
      number: 'required|number',
      district: 'required'
    }
  }
}

module.exports = Order
