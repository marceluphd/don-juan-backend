'use strict'

const Model = use('Model')

const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })

    this.addHook('afterCreate', 'UserHook.sendUserCreationEmail')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  orders () {
    return this.hasMany('App/Models/Order')
  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }
}

module.exports = User
