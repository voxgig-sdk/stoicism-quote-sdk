<?php
declare(strict_types=1);

// StoicismQuote SDK configuration

class StoicismQuoteConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "StoicismQuote",
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
                "auth" => [
                    "prefix" => "Bearer",
                ],
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
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 0,
            ],
          ],
          'name' => 'stoic_quote',
          'op' => [
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'method' => 'GET',
                  'orig' => '/stoic-quote',
                  'parts' => [
                    'stoic-quote',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
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
