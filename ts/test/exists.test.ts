
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { StoicismQuoteSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await StoicismQuoteSDK.test()
    equal(null !== testsdk, true)
  })

})
