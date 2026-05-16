# StoicismQuote SDK utility: feature_add
module StoicismQuoteUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
