package = "voxgig-sdk-stoicism-quote"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/stoicism-quote-sdk.git"
}
description = {
  summary = "StoicismQuote SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["stoicism-quote_sdk"] = "stoicism-quote_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
