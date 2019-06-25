'use strict'

const Role = use('Role')

class RoleController {
  async store ({ request }) {
    const data = request.only(['name', 'slug', 'description'])

    const role = await Role.create(data)

    return role
  }
}

module.exports = RoleController
