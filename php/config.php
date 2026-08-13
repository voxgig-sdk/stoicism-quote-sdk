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
              'name' => 'author',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'quote',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
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
