'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/CreateUserMail')

const UserHook = exports = module.exports = {}

UserHook.sendUserCreationEmail = async (user) => {
  const { email, name } = user

  Kue.dispatch(Job.key, { email, name }, { attempts: 3 })
}
