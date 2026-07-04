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
              "active" => true,
              "name" => "data",
              "req" => true,
              "type" => "`$OBJECT`",
              "index$" => 0,
            },
          ],
          "name" => "stoic_quote",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/stoic-quote",
                  "parts" => [
                    "stoic-quote",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
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
