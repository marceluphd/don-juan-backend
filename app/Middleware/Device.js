'use strict'

const User = use('App/Models/User')

class Device {
  async handle ({ request, response }, next) {
    const device = request.header('DEVICE')

    const { email } = request.only(['email'])
    const user = await User.findByOrFail('email', email)

    if (
      (!device) ||
      (await user.is('user') && device === 'web') ||
      (await user.is('administrator') && device === 'mobile')
    ) {
      return response.status(401).send({ message: 'You are not authorized to sign in' })
    }

    await next()
  }
}

module.exports = Device
