
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { StoicismQuoteSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = StoicismQuoteSDK.test()
    equal(testsdk instanceof StoicismQuoteSDK, true,
      'StoicismQuoteSDK.test() must return a client synchronously')
  })

})
