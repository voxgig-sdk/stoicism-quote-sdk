
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { StoicismQuoteSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('StoicQuoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STOICISMQUOTE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STOICISMQUOTE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StoicismQuoteSDK.test()
    const ent = testsdk.StoicQuote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STOICISM_QUOTE_TEST_LIVE
    for (const op of ['load']) {
      if (maybeSkipControl(t, 'entityOp', 'stoic_quote.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set STOICISM_QUOTE_TEST_STOIC_QUOTE_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let stoic_quote_ref01_data = Object.values(setup.data.existing.stoic_quote)[0] as any

    // LOAD
    const stoic_quote_ref01_ent = client.StoicQuote()
    const stoic_quote_ref01_match_dt0: any = {}
    const stoic_quote_ref01_data_dt0 = await stoic_quote_ref01_ent.load(stoic_quote_ref01_match_dt0)
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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['STOICISM_QUOTE_TEST_STOIC_QUOTE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'STOICISM_QUOTE_TEST_STOIC_QUOTE_ENTID': idmap,
    'STOICISM_QUOTE_TEST_LIVE': 'FALSE',
    'STOICISM_QUOTE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['STOICISM_QUOTE_TEST_STOIC_QUOTE_ENTID']

  const live = 'TRUE' === env.STOICISM_QUOTE_TEST_LIVE

  if (live) {
    client = new StoicismQuoteSDK(merge([
      {
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
