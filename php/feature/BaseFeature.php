<?php
declare(strict_types=1);

// StoicismQuote SDK base feature

class StoicismQuoteBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(StoicismQuoteContext $ctx, array $options): void {}
    public function PostConstruct(StoicismQuoteContext $ctx): void {}
    public function PostConstructEntity(StoicismQuoteContext $ctx): void {}
    public function SetData(StoicismQuoteContext $ctx): void {}
    public function GetData(StoicismQuoteContext $ctx): void {}
    public function GetMatch(StoicismQuoteContext $ctx): void {}
    public function SetMatch(StoicismQuoteContext $ctx): void {}
    public function PrePoint(StoicismQuoteContext $ctx): void {}
    public function PreSpec(StoicismQuoteContext $ctx): void {}
    public function PreRequest(StoicismQuoteContext $ctx): void {}
    public function PreResponse(StoicismQuoteContext $ctx): void {}
    public function PreResult(StoicismQuoteContext $ctx): void {}
    public function PreDone(StoicismQuoteContext $ctx): void {}
    public function PreUnexpected(StoicismQuoteContext $ctx): void {}
}
