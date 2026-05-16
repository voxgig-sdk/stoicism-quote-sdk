package voxgigstoicismquotesdk

import (
	"github.com/voxgig-sdk/stoicism-quote-sdk/core"
	"github.com/voxgig-sdk/stoicism-quote-sdk/entity"
	"github.com/voxgig-sdk/stoicism-quote-sdk/feature"
	_ "github.com/voxgig-sdk/stoicism-quote-sdk/utility"
)

// Type aliases preserve external API.
type StoicismQuoteSDK = core.StoicismQuoteSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type StoicismQuoteEntity = core.StoicismQuoteEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type StoicismQuoteError = core.StoicismQuoteError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewStoicQuoteEntityFunc = func(client *core.StoicismQuoteSDK, entopts map[string]any) core.StoicismQuoteEntity {
		return entity.NewStoicQuoteEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewStoicismQuoteSDK = core.NewStoicismQuoteSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
