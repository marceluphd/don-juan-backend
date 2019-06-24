'use strict'

const Env = use('Env')
const Youch = use('youch')
const BaseExceptionHandler = use('BaseExceptionHandler')
const Sentry = use('Sentry')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   */
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }

    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request.request)
      const errorJson = await youch.toJSON()

      response.status(error.status).send(errorJson)
    }

    return response.status(error.status)
  }

  /**
   * Report exception for logging or debugging.
   */
  async report (error) {
    Sentry.captureException(error)
  }
}

module.exports = ExceptionHandler
