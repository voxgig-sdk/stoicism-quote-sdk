package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewStoicQuoteEntityFunc func(client *StoicismQuoteSDK, entopts map[string]any) StoicismQuoteEntity

