package core

type StoicismQuoteError struct {
	IsStoicismQuoteError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewStoicismQuoteError(code string, msg string, ctx *Context) *StoicismQuoteError {
	return &StoicismQuoteError{
		IsStoicismQuoteError: true,
		Sdk:              "StoicismQuote",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *StoicismQuoteError) Error() string {
	return e.Msg
}
