'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Type extends BaseValidator {
  get rules () {
    return {
      name: 'required',
      file_id: 'required'
    }
  }
}

module.exports = Type
