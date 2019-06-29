'use strict'

const Drive = use('Drive')
const File = use('App/Models/File')

/**
 * Resourceful controller for interacting with files
 */
class FileController {
  /**
   * Create/save a new file.
   * POST files
   *
   */
  async store ({ request, response }) {
    await request.multipart
      .file('image', {}, async file => {
        try {
          const ContentType = file.headers['content-type']
          const ACL = 'public-read'
          const Key = `${(Math.random() * 1000).toString(32)}-${file.clientName}`

          const url = await Drive.put(Key, file.stream, {
            ContentType,
            ACL
          })

          await File.create({
            name: file.clientName,
            key: Key,
            url,
            content_type: ContentType
          })
        } catch (err) {
          return response.status(err.status).json({
            error: {
              message: 'Error when trying to send file',
              err_message: err.message
            }
          })
        }
      })
      .process()
  }

  /**
   * Display a single file.
   * GET files/:id
   *
   */
  async show ({ params, request, response, view }) {
    const { id: name } = params

    try {
      const file = await File.findByOrFail('name', name)

      response.implicitEnd = false
      response.header('Content-Type', file.content_type)

      const stream = await Drive.getStream(file.key)

      stream.pipe(response.response)
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'File not found',
          err_message: err.message
        }
      })
    }
  }

  /**
   * Delete a file with id.
   * DELETE files/:id
   *
   */
  async destroy ({ params, response }) {
    const { id: name } = params

    try {
      const file = await File.findByOrFail('name', name)

      await Drive.delete(file.key)

      await file.delete()
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'File not found and can not be removed',
          err_message: err.message
        }
      })
    }
  }
}

module.exports = FileController
