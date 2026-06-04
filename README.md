# StoicismQuote SDK

Fetch a random Stoic quote with its author for daily inspiration or app content

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Stoicism Quote API

The Stoicism Quote API is a small public service hosted at `stoic.tekloon.net` that returns a single random quote drawn from Stoic philosophers such as Marcus Aurelius, Epictetus and Seneca. It is catalogued on [Free Public APIs](https://freepublicapis.com/stoicism-quote-api).

What you get from the API:

- `GET /stoic-quote` — a JSON envelope of the form `{"data": {"author": "...", "quote": "..."}}`.
- A short attributed quote suitable for embedding in dashboards, chat bots, daily-message emails and similar applications.

Operationally the service is unauthenticated and exposes a single endpoint. CORS is reported as disabled on the catalogue page, so browser-side calls may need to go through a proxy; server-side calls work directly.

## Try it

**TypeScript**
```bash
npm install stoicism-quote
```

**Python**
```bash
pip install stoicism-quote-sdk
```

**PHP**
```bash
composer require voxgig/stoicism-quote-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/stoicism-quote-sdk/go
```

**Ruby**
```bash
gem install stoicism-quote-sdk
```

**Lua**
```bash
luarocks install stoicism-quote-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { StoicismQuoteSDK } from 'stoicism-quote'

const client = new StoicismQuoteSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o stoicism-quote-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "stoicism-quote": {
      "command": "/abs/path/to/stoicism-quote-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **StoicQuote** | A single Stoic quote with its author, returned by `GET /stoic-quote` as `{ data: { author, quote } }`. | `/stoic-quote` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from stoicismquote_sdk import StoicismQuoteSDK

client = StoicismQuoteSDK({})


# Load a specific stoicquote
stoicquote, err = client.StoicQuote(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'stoicismquote_sdk.php';

$client = new StoicismQuoteSDK([]);


// Load a specific stoicquote
[$stoicquote, $err] = $client->StoicQuote(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/stoicism-quote-sdk/go"

client := sdk.NewStoicismQuoteSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "StoicismQuote_sdk"

client = StoicismQuoteSDK.new({})


# Load a specific stoicquote
stoicquote, err = client.StoicQuote(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("stoicism-quote_sdk")

local client = sdk.new({})


-- Load a specific stoicquote
local stoicquote, err = client:StoicQuote(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = StoicismQuoteSDK.test()
const result = await client.StoicQuote().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = StoicismQuoteSDK.test(None, None)
result, err = client.StoicQuote(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = StoicismQuoteSDK::test(null, null);
[$result, $err] = $client->StoicQuote(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.StoicQuote(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = StoicismQuoteSDK.test(nil, nil)
result, err = client.StoicQuote(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:StoicQuote(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Stoicism Quote API

- Upstream: [https://stoic.tekloon.net](https://stoic.tekloon.net)
- API docs: [https://freepublicapis.com/stoicism-quote-api](https://freepublicapis.com/stoicism-quote-api)

- Distributed under the MIT licence as listed on the catalogue entry.
- No API key or registration is required to call the endpoint.
- Attribution to the original Stoic author is included in each response; please preserve it when displaying quotes.

---

Generated from the Stoicism Quote API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
