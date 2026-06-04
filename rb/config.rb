# StoicismQuote SDK configuration

module StoicismQuoteConfig
  def self.make_config
    {
      "main" => {
        "name" => "StoicismQuote",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://stoic.tekloon.net",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "stoic_quote" => {},
        },
      },
      "entity" => {
        "stoic_quote" => {
          "fields" => [
            {
              "name" => "data",
              "req" => true,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 0,
            },
          ],
          "name" => "stoic_quote",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "method" => "GET",
                  "orig" => "/stoic-quote",
                  "parts" => [
                    "stoic-quote",
                  ],
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "select" => {},
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    StoicismQuoteFeatures.make_feature(name)
  end
end
