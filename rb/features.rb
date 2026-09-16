# StoicismQuote SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module StoicismQuoteFeatures
  def self.make_feature(name)
    case name
    when "base"
      StoicismQuoteBaseFeature.new
    when "ratelimit"
      StoicismQuoteRatelimitFeature.new
    when "retry"
      StoicismQuoteRetryFeature.new
    when "test"
      StoicismQuoteTestFeature.new
    when "timeout"
      StoicismQuoteTimeoutFeature.new
    else
      StoicismQuoteBaseFeature.new
    end
  end
end
