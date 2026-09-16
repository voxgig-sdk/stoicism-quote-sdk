

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { StoicismQuoteSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('StoicQuoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STOICISM_QUOTE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STOICISM_QUOTE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StoicismQuoteSDK.test()
    const ent = testsdk.StoicQuote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STOICISM_QUOTE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'stoic_quote.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"author","req":true,"short":"The author of the stoicism quote","type":"`$STRING`","index$":0},{"active":true,"name":"quote","req":true,"short":"The stoicism quote text","type":"`$STRING`","index$":1}],"name":"stoic_quote","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /stoic-quote","json":"{\"operationId\":\"getStoicQuote\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"author\":\"Ryan Holiday\",\"quote\":\"True will is quiet humility, resilience, and flexibility; the other kind of will is weakness disguised by bluster and ambition.\"}},\"schema\":{\"properties\":{\"data\":{\"properties\":{\"author\":{\"description\":\"The author of the stoicism quote\",\"example\":\"Ryan Holiday\",\"type\":\"string\"},\"quote\":{\"description\":\"The stoicism quote text\",\"example\":\"True will is quiet humility, resilience, and flexibility; the other kind of will is weakness disguised by bluster and ambition.\",\"type\":\"string\"}},\"required\":[\"author\",\"quote\"],\"type\":\"object\"}},\"required\":[\"data\"],\"type\":\"object\"}}},\"description\":\"Successfully retrieved a stoicism quote\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Internal server error\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"example\":\"An unexpected error occurred while processing your request\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/stoic-quote","segments":[{"lit":"stoic-quote"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"stoic_quote","name__orig":"stoic_quote","Name":"StoicQuote","name_":"stoic_quote","name-":"stoic-quote","NAME":"STOIC_QUOTE","index$":0}, {"active":true,"entity":"stoic_quote","key$":"BasicStoicQuoteFlow","kind":"basic","name":"BasicStoicQuoteFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"stoic_quote_ref01","srcdatavar":"stoic_quote_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-stoic_quote_ref01"}}],"index$":0}]}, 'StoicQuote')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let stoic_quote_ref01_data = Object.values(setup.data.existing.stoic_quote)[0] as any

    // LOAD
    const stoic_quote_ref01_ent = client.StoicQuote()
    const stoic_quote_ref01_match_dt0: any = {}
    const stoic_quote_ref01_data_dt0 = (await stoic_quote_ref01_ent.load(stoic_quote_ref01_match_dt0)).data()
    assert(null != stoic_quote_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/stoic_quote/StoicQuoteTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = StoicismQuoteSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['stoic_quote01','stoic_quote02','stoic_quote03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STOICISM_QUOTE_TEST_STOIC_QUOTE_ENTID': idmap,
    'STOICISM_QUOTE_TEST_LIVE': 'FALSE',
    'STOICISM_QUOTE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['STOICISM_QUOTE_TEST_STOIC_QUOTE_ENTID']

  const live = 'TRUE' === env.STOICISM_QUOTE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STOICISM_QUOTE_TEST_STOIC_QUOTE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new StoicismQuoteSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.STOICISM_QUOTE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
