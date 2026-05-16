# StoicismQuote SDK utility: make_context
require_relative '../core/context'
module StoicismQuoteUtilities
  MakeContext = ->(ctxmap, basectx) {
    StoicismQuoteContext.new(ctxmap, basectx)
  }
end
