<?php
declare(strict_types=1);

// StoicismQuote SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class StoicismQuoteMakeContext
{
    public static function call(array $ctxmap, ?StoicismQuoteContext $basectx): StoicismQuoteContext
    {
        return new StoicismQuoteContext($ctxmap, $basectx);
    }
}
