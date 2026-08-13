# StoicismQuote SDK exists test

import pytest
from stoicismquote_sdk import StoicismQuoteSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = StoicismQuoteSDK.test(None, None)
        assert testsdk is not None
