class HttpError extends Error {
  constructor (message: string, public statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

module.exports = HttpError;