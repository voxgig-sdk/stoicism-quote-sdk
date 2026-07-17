-- StoicismQuote SDK exists test

local sdk = require("stoicism-quote_sdk")

describe("StoicismQuoteSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
