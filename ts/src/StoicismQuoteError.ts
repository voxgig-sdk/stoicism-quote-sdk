
import { Context } from './Context'


class StoicismQuoteError extends Error {

  isStoicismQuoteError = true

  sdk = 'StoicismQuote'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  StoicismQuoteError
}

