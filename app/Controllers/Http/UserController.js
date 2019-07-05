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

  /**
  * Display a single user.
  * GET users/:id
  *
  */
  async show ({ auth, response }) {
    if (!auth.user) {
      return response.status(401).send({
        error: {
          message: 'Only the user himself can see the own data.'
        }
      })
    }

    return auth.user
  }
}

module.exports = UserController
