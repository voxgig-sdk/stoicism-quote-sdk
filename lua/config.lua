-- StoicismQuote SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "StoicismQuote",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://stoic.tekloon.net",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["stoic_quote"] = {},
      },
    },
    entity = {
      ["stoic_quote"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "quote",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "stoic_quote",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/stoic-quote",
                ["parts"] = {
                  "stoic-quote",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
