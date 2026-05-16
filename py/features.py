# StoicismQuote SDK feature factory

from feature.base_feature import StoicismQuoteBaseFeature
from feature.test_feature import StoicismQuoteTestFeature


def _make_feature(name):
    features = {
        "base": lambda: StoicismQuoteBaseFeature(),
        "test": lambda: StoicismQuoteTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
