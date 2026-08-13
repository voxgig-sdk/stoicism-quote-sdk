# StoicismQuote SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

StoicismQuoteUtility.registrar = ->(u) {
  u.clean = StoicismQuoteUtilities::Clean
  u.done = StoicismQuoteUtilities::Done
  u.make_error = StoicismQuoteUtilities::MakeError
  u.feature_add = StoicismQuoteUtilities::FeatureAdd
  u.feature_hook = StoicismQuoteUtilities::FeatureHook
  u.feature_init = StoicismQuoteUtilities::FeatureInit
  u.fetcher = StoicismQuoteUtilities::Fetcher
  u.make_fetch_def = StoicismQuoteUtilities::MakeFetchDef
  u.make_context = StoicismQuoteUtilities::MakeContext
  u.make_options = StoicismQuoteUtilities::MakeOptions
  u.make_request = StoicismQuoteUtilities::MakeRequest
  u.make_response = StoicismQuoteUtilities::MakeResponse
  u.make_result = StoicismQuoteUtilities::MakeResult
  u.make_point = StoicismQuoteUtilities::MakePoint
  u.make_spec = StoicismQuoteUtilities::MakeSpec
  u.make_url = StoicismQuoteUtilities::MakeUrl
  u.param = StoicismQuoteUtilities::Param
  u.prepare_auth = StoicismQuoteUtilities::PrepareAuth
  u.prepare_body = StoicismQuoteUtilities::PrepareBody
  u.prepare_headers = StoicismQuoteUtilities::PrepareHeaders
  u.prepare_method = StoicismQuoteUtilities::PrepareMethod
  u.prepare_params = StoicismQuoteUtilities::PrepareParams
  u.prepare_path = StoicismQuoteUtilities::PreparePath
  u.prepare_query = StoicismQuoteUtilities::PrepareQuery
  u.graphql_body = StoicismQuoteUtilities::GraphqlBody
  u.graphql_errors = StoicismQuoteUtilities::GraphqlErrors
  u.result_basic = StoicismQuoteUtilities::ResultBasic
  u.result_body = StoicismQuoteUtilities::ResultBody
  u.result_headers = StoicismQuoteUtilities::ResultHeaders
  u.transform_request = StoicismQuoteUtilities::TransformRequest
  u.transform_response = StoicismQuoteUtilities::TransformResponse
}
