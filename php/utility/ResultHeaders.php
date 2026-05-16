<?php
declare(strict_types=1);

// StoicismQuote SDK utility: result_headers

class StoicismQuoteResultHeaders
{
    public static function call(StoicismQuoteContext $ctx): ?StoicismQuoteResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
