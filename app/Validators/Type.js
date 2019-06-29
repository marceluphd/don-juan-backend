'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Type extends BaseValidator {
  get rules () {
    return {
      name: 'required',
      image: 'required|url'
    }
  }
}

module.exports = Type
