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
            "name": "author",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "quote",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
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
                "kind": "http",
                "method": "GET",
                "orig": "/stoic-quote",
                "parts": [
                  "stoic-quote",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
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
