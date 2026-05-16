<?php
declare(strict_types=1);

// StoicismQuote SDK utility: result_body

class StoicismQuoteResultBody
{
    public static function call(StoicismQuoteContext $ctx): ?StoicismQuoteResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
