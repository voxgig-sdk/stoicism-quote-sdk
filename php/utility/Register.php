<?php
declare(strict_types=1);

// StoicismQuote SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

StoicismQuoteUtility::setRegistrar(function (StoicismQuoteUtility $u): void {
    $u->clean = [StoicismQuoteClean::class, 'call'];
    $u->done = [StoicismQuoteDone::class, 'call'];
    $u->make_error = [StoicismQuoteMakeError::class, 'call'];
    $u->feature_add = [StoicismQuoteFeatureAdd::class, 'call'];
    $u->feature_hook = [StoicismQuoteFeatureHook::class, 'call'];
    $u->feature_init = [StoicismQuoteFeatureInit::class, 'call'];
    $u->fetcher = [StoicismQuoteFetcher::class, 'call'];
    $u->make_fetch_def = [StoicismQuoteMakeFetchDef::class, 'call'];
    $u->make_context = [StoicismQuoteMakeContext::class, 'call'];
    $u->make_options = [StoicismQuoteMakeOptions::class, 'call'];
    $u->make_request = [StoicismQuoteMakeRequest::class, 'call'];
    $u->make_response = [StoicismQuoteMakeResponse::class, 'call'];
    $u->make_result = [StoicismQuoteMakeResult::class, 'call'];
    $u->make_point = [StoicismQuoteMakePoint::class, 'call'];
    $u->make_spec = [StoicismQuoteMakeSpec::class, 'call'];
    $u->make_url = [StoicismQuoteMakeUrl::class, 'call'];
    $u->param = [StoicismQuoteParam::class, 'call'];
    $u->prepare_auth = [StoicismQuotePrepareAuth::class, 'call'];
    $u->prepare_body = [StoicismQuotePrepareBody::class, 'call'];
    $u->prepare_headers = [StoicismQuotePrepareHeaders::class, 'call'];
    $u->prepare_method = [StoicismQuotePrepareMethod::class, 'call'];
    $u->prepare_params = [StoicismQuotePrepareParams::class, 'call'];
    $u->prepare_path = [StoicismQuotePreparePath::class, 'call'];
    $u->prepare_query = [StoicismQuotePrepareQuery::class, 'call'];
    $u->result_basic = [StoicismQuoteResultBasic::class, 'call'];
    $u->result_body = [StoicismQuoteResultBody::class, 'call'];
    $u->result_headers = [StoicismQuoteResultHeaders::class, 'call'];
    $u->transform_request = [StoicismQuoteTransformRequest::class, 'call'];
    $u->transform_response = [StoicismQuoteTransformResponse::class, 'call'];
});
