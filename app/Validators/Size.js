'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Size extends BaseValidator {
  get rules () {
    return {
      name: 'required',
      file_id: 'required'
    }
  }
}

module.exports = Size
