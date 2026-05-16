<?php
declare(strict_types=1);

// StoicismQuote SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class StoicismQuoteFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new StoicismQuoteBaseFeature();
            case "test":
                return new StoicismQuoteTestFeature();
            default:
                return new StoicismQuoteBaseFeature();
        }
    }
}
