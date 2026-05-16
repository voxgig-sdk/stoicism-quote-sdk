-- StoicismQuote SDK error

local StoicismQuoteError = {}
StoicismQuoteError.__index = StoicismQuoteError


function StoicismQuoteError.new(code, msg, ctx)
  local self = setmetatable({}, StoicismQuoteError)
  self.is_sdk_error = true
  self.sdk = "StoicismQuote"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function StoicismQuoteError:error()
  return self.msg
end


function StoicismQuoteError:__tostring()
  return self.msg
end


return StoicismQuoteError
