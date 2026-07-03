# StoicismQuote SDK configuration


def make_config():
    return {
        "main": {
            "name": "StoicismQuote",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://stoic.tekloon.net",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "stoic_quote": {},
            },
        },
        "entity": {
      "stoic_quote": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
        ],
        "name": "stoic_quote",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/stoic-quote",
                "parts": [
                  "stoic-quote",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
