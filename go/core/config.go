package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "StoicismQuote",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://stoic.tekloon.net",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"stoic_quote": map[string]any{},
			},
		},
		"entity": map[string]any{
			"stoic_quote": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "author",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "quote",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
				},
				"name": "stoic_quote",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/stoic-quote",
								"parts": []any{
									"stoic-quote",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"index$": 0,
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
