# StoicismQuote SDK utility: prepare_body
require_relative 'media'
module StoicismQuoteUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return StoicismQuoteUtilities.raw_body(ctx.reqdata) if StoicismQuoteUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
