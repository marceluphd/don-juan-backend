'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Size extends BaseValidator {
  get rules () {
    return {
      name: 'required',
      image: 'required|url'
    }
  }
}

module.exports = Size
