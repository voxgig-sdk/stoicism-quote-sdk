
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'StoicismQuote',
        slug: "stoicism-quote",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://stoic.tekloon.net",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      stoic_quote: {
      },

    }
  }


  entity = {
    "stoic_quote": {
      "fields": [
        {
          "name": "author",
          "req": true,
          "short": "The author of the stoicism quote",
          "type": "`$STRING`"
        },
        {
          "name": "quote",
          "req": true,
          "short": "The stoicism quote text",
          "type": "`$STRING`"
        }
      ],
      "name": "stoic_quote",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/stoic-quote",
              "parts": [
                "stoic-quote"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

