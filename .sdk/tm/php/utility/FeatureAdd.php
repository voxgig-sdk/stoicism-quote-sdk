<?php
declare(strict_types=1);

// StoicismQuote SDK utility: feature_add

class StoicismQuoteFeatureAdd
{
    public static function call(StoicismQuoteContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
