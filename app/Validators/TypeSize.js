'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class TypeSize extends BaseValidator {
  get rules () {
    return {
      // validation rules
      size_id: 'required',
      price: 'required'
    }
  }
}

module.exports = TypeSize
