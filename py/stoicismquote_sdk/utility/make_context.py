# StoicismQuote SDK utility: make_context

from stoicismquote_sdk.core.context import StoicismQuoteContext


def make_context_util(ctxmap, basectx):
    return StoicismQuoteContext(ctxmap, basectx)
