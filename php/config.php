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
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
          ],
          'name' => 'stoic_quote',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/stoic-quote',
                  'parts' => [
                    'stoic-quote',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
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
