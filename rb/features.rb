# StoicismQuote SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module StoicismQuoteFeatures
  def self.make_feature(name)
    case name
    when "base"
      StoicismQuoteBaseFeature.new
    when "test"
      StoicismQuoteTestFeature.new
    else
      StoicismQuoteBaseFeature.new
    end
  end
end
