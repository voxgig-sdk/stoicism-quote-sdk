package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/stoicism-quote-sdk/go"
	"github.com/voxgig-sdk/stoicism-quote-sdk/go/core"

	vs "github.com/voxgig-sdk/stoicism-quote-sdk/go/utility/struct"
)

func TestStoicQuoteEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.StoicQuote(nil)
		if ent == nil {
			t.Fatal("expected non-nil StoicQuoteEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := stoic_quoteBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "stoic_quote." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set STOICISM_QUOTE_TEST_STOIC_QUOTE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		stoicQuoteRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.stoic_quote", setup.data)))
		var stoicQuoteRef01Data map[string]any
		if len(stoicQuoteRef01DataRaw) > 0 {
			stoicQuoteRef01Data = core.ToMapAny(stoicQuoteRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = stoicQuoteRef01Data

		// LOAD
		stoicQuoteRef01Ent := client.StoicQuote(nil)
		stoicQuoteRef01MatchDt0 := map[string]any{}
		stoicQuoteRef01DataDt0Loaded, err := stoicQuoteRef01Ent.Load(stoicQuoteRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if stoicQuoteRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func stoic_quoteBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "stoic_quote", "StoicQuoteTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read stoic_quote test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse stoic_quote test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"stoic_quote01", "stoic_quote02", "stoic_quote03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("STOICISM_QUOTE_TEST_STOIC_QUOTE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"STOICISM_QUOTE_TEST_STOIC_QUOTE_ENTID": idmap,
		"STOICISM_QUOTE_TEST_LIVE":      "FALSE",
		"STOICISM_QUOTE_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["STOICISM_QUOTE_TEST_STOIC_QUOTE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["STOICISM_QUOTE_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewStoicismQuoteSDK(core.ToMapAny(mergedOpts))
	}

	live := env["STOICISM_QUOTE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["STOICISM_QUOTE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
