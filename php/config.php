<?php
declare(strict_types=1);

// StoicismQuote SDK configuration

class StoicismQuoteConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "StoicismQuote",
                "slug" => "stoicism-quote",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://stoic.tekloon.net",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "stoic_quote" => [],
                ],
            ],
            "entity" => [
        'stoic_quote' => [
          'fields' => [
            [
              'name' => 'author',
              'req' => true,
              'short' => 'The author of the stoicism quote',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'quote',
              'req' => true,
              'short' => 'The stoicism quote text',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'stoic_quote',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/stoic-quote',
                  'parts' => [
                    'stoic-quote',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return StoicismQuoteFeatures::make_feature($name);
    }
}
