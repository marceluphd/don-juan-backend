'use strict'

const Mail = use('Mail')

class CreateUserMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'CreateUserMail-job'
  }

  // This is where the work is done.
  async handle ({ email, name }) {
    await Mail.send(
      ['emails.user_creation'],
      { name },
      message => {
        message.to(email)
          .from('contato@donjuan.com.br', 'Luiz | Don Juan Pizza')
          .subject('Welcome')
      }
    )
  }
}

module.exports = CreateUserMail
