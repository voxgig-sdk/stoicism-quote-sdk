# StoicismQuote SDK feature factory

from stoicismquote_sdk.feature.base_feature import StoicismQuoteBaseFeature
from stoicismquote_sdk.feature.ratelimit_feature import StoicismQuoteRatelimitFeature
from stoicismquote_sdk.feature.retry_feature import StoicismQuoteRetryFeature
from stoicismquote_sdk.feature.test_feature import StoicismQuoteTestFeature
from stoicismquote_sdk.feature.timeout_feature import StoicismQuoteTimeoutFeature


_FEATURES = {
    "base": lambda: StoicismQuoteBaseFeature(),
    "ratelimit": lambda: StoicismQuoteRatelimitFeature(),
    "retry": lambda: StoicismQuoteRetryFeature(),
    "test": lambda: StoicismQuoteTestFeature(),
    "timeout": lambda: StoicismQuoteTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
