'use strict'

const User = use('App/Models/User')
const Role = use('Role')

class UserController {
  async store ({ request, auth }) {
    const data = request.only(['name', 'email', 'password'])

    const user = await User.create(data)

    const userRole = await Role.findByOrFail('slug', 'user')

    user.roles().attach([userRole.id])

    const token = await auth.attempt(data.email, data.password)

    return token
  }
}

module.exports = UserController
